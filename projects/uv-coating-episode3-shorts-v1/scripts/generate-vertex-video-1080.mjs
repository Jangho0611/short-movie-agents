import {GoogleGenAI} from '@google/genai';
import {existsSync, readFileSync, writeFileSync} from 'node:fs';
import {resolve} from 'node:path';

const values = {};
for (let i = 2; i < process.argv.length; i += 2) values[process.argv[i]] = process.argv[i + 1];
const imagePath = resolve(values['--image']);
const promptPath = resolve(values['--prompt-file']);
const outputPath = resolve(values['--out']);
if (existsSync(outputPath)) throw new Error(`Output already exists: ${outputPath}`);

const ai = new GoogleGenAI({
  vertexai: true,
  project: process.env.GOOGLE_CLOUD_PROJECT || 'gen-lang-client-0646355490',
  location: process.env.GOOGLE_CLOUD_LOCATION || 'global',
});
const bytes = readFileSync(imagePath).toString('base64');
const mimeType = imagePath.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg';
console.log(`[vertex-video] call_count=1 resolution=1080p aspect_ratio=9:16 output=${outputPath}`);
let operation = await ai.models.generateVideos({
  model: process.env.VERTEX_VIDEO_MODEL || 'veo-3.1-fast-generate-001',
  prompt: readFileSync(promptPath, 'utf8'),
  image: {imageBytes: bytes, mimeType},
  config: {numberOfVideos: 1, durationSeconds: 4, aspectRatio: '9:16', resolution: '1080p', generateAudio: false},
});
console.log(`[vertex-video] operation submitted name=${operation.name}`);
while (!operation.done) {
  await new Promise((resolveWait) => setTimeout(resolveWait, 10000));
  operation = await ai.operations.getVideosOperation({operation});
}
if (operation.error) throw new Error(JSON.stringify(operation.error));
const video = operation.response?.generatedVideos?.[0]?.video;
if (!video?.videoBytes) throw new Error(`No inline video returned: ${video?.uri || 'empty response'}`);
writeFileSync(outputPath, Buffer.from(video.videoBytes, 'base64'));
console.log(`[vertex-video] SAVED path=${outputPath}`);
