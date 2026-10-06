import fs from 'node:fs';
import {GoogleGenAI} from '@google/genai';

const output = 'public/assets/images/scene04-1-start-v1.png';
const logPath = 'tmp/imagegen/scene04-1-vertex-debug.log';
const log = (label, value) => {
  const line = `${label}\n${JSON.stringify(value, null, 2)}\n`;
  process.stdout.write(line);
  fs.appendFileSync(logPath, line);
};
fs.writeFileSync(logPath, '');
const originalFetch = globalThis.fetch;
globalThis.fetch = async (...args) => {
  const response = await originalFetch(...args);
  if (response.url.includes('aiplatform.googleapis.com')) {
    log('HTTP', {status: response.status, statusText: response.statusText});
    if (!response.ok) log('HTTP_ERROR_BODY', await response.clone().text());
  }
  return response;
};

try {
  if (fs.existsSync(output)) throw new Error('Output already exists; no API call made');
  const ai = new GoogleGenAI({vertexai: true, project: 'gen-lang-client-0646355490', location: 'global', httpOptions: {retryOptions: {attempts: 1}}});
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: 'Realistic interior photography, 9:16 portrait, close-up cross-section view of a wall under construction showing wooden stud frame, a fire-retardant gypsum board panel being fixed to the studs, and a strip of wallpaper partially applied over the finished section, natural side lighting, real construction site texture, no text, no labels, no Korean characters, no logos, real camera look, shallow depth of field, restrained neutral tones',
    config: {candidateCount: 1, responseModalities: ['IMAGE'], imageConfig: {aspectRatio: '9:16'}},
  });
  log('FULL_API_RESPONSE', response);
  log('SDK_HTTP_STATUS', response.sdkHttpResponse?.status ?? response.sdkHttpResponse?.statusCode ?? response.status ?? null);
  const images = (response.candidates ?? []).flatMap(c => c.content?.parts ?? []).filter(p => p.inlineData?.mimeType?.startsWith('image/'));
  log('IMAGE_COUNT', images.length);
  if (images.length === 0) {
    log('BLOCK_DIAGNOSTICS', {
      promptFeedback: response.promptFeedback ?? null,
      blockReason: response.blockReason ?? null,
      safetyRatings: response.safetyRatings ?? null,
      candidates: (response.candidates ?? []).map(c => ({index: c.index ?? null, finishReason: c.finishReason ?? null, finishMessage: c.finishMessage ?? null, safetyRatings: c.safetyRatings ?? null, blockReason: c.blockReason ?? null})),
    });
    throw new Error('Expected 1 image; received 0');
  }
  if (images.length !== 1) throw new Error(`Expected 1 image; received ${images.length}`);
  const data = Buffer.from(images[0].inlineData.data, 'base64');
  if (data.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') throw new Error('Response not PNG');
  fs.mkdirSync('public/assets/images', {recursive: true});
  fs.writeFileSync(output, data, {flag: 'wx'});
  log('SAVED', {path: output, width: data.readUInt32BE(16), height: data.readUInt32BE(20), bytes: data.length});
} catch (error) {
  log('ERROR', {name: error.name, message: error.message, status: error.status ?? error.statusCode ?? null, code: error.code ?? null});
  process.exitCode = 1;
}
