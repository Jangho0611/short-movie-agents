# 하단 캡션 교체 QA v1 / 전체 Preview v4

## 적용 기준과 범위
최신 로컬 통합 실행 지침 v2.10 및 해당 영상 작업기록, 최신 Preview v3 기준. 공통 운영가이드의 승인 자산 보존, 부분 변경, 모바일/전체 디코딩 QA 원칙 적용. Scene2·3·5의 하단 레이어만 교체했다. Scene4 고정2×2에는 별도 캡션을 추가하지 않았다.

## 정확한 적용 문구
- Scene2: 도무스 511 NI 교체 연출 이미지
- Scene3: 기존 손잡이 탈거 후 타공 부분 예시
- Scene5: 도무스 511 NI 교체 연출 이미지

해당 세 Scene의 기존 호환성·타공 치수·조건 확인 내부 메모를 제거했다. 새 문구는 설치 호환성을 보장하지 않는다.

## 디자인과 구현
기존 프로젝트 Pretendard-SemiBold.woff2, weight600,40px,line-height1.4,#303431,노란 강조/외곽선/새 장식 없음. 기존 반투명 웜화이트 배경 rgba(244,241,233,.96) 유지. 기존30px보다 확대해 중앙 정렬했다. 박스 x64–1016,y1616–1730,높이114px. 실제 문구는 박스 안쪽26px 패딩 및 중앙 정렬로 배치. 하단190px 여백 유지. Scene2·5 동일 PNG를 사용하며 Scene3도 동일 위치/타이포.

`src/caption-patch-v1.tsx`에서 승인 이미지의 y1600–1740 범위를 원래 좌표·크기로 복원한 뒤 새 보조 캡션을 합성했다. 원본 이미지 파일 수정 없음. Remotion still 패치 PNG를 ffmpeg로 기존 Scene 영상에 얹어 기존 메인 자막 모션/타이밍을 유지했다. 조립 재현: scripts/assemble-caption-preview-v1.py.

## 시각 QA
public/assets/images/preview-caption-qa-v1.png: Scene2/3/5의 360×640 축소 프레임을 직접 확인했다.
- 세 승인 문구 정확히 표시, 줄바꿈/잘림/겹침 없음.
- 메인 자막보다 작은 차분한 보조 캡션, 세 Scene의 시각 체계 동일.
- 기존 하단 영역을 활용해 여백을 유지하면서 가독성 개선.
- 하단190px 여백 및 실제 글자의 좌우 여백 확인. 플랫폼별 실제 앱 UI 오버레이 환경은 미검증이며 모든 플랫폼에서 가림이 없다고 단정하지 않는다.
- 대표 정지화면 QA 완료. 전체 연속 시청·청취 체감은 사용자 승인 대기.

## 기술 QA 및 보존
- 1080×1920,30fps,H.264/AAC,937프레임,31.233333초. 전체 오디오·영상 디코딩 오류 없음.
- Scene프레임111/145/140/225/146 및 공통 엔딩170프레임(5.666667초) 불변. Scene 시작/전환 변경 없음.
- Scene1·Scene4·공통 엔딩 총506프레임이 Preview v3와 decoded MD5 일치.
- 전체 AAC 스트림을 Preview v3에서 재인코딩 없이 복사. 비트스트림 SHA256 동일: b2cfd6e69b8d5b9ca8fdfde9ce9e2fda989d4d8b7a24b9a995290aab74852b6f.
- 기존 src/public106개 파일 SHA256 모두 보존. 승인 이미지/도면/TTS/자막 컴포넌트/엔딩/이전 Preview 덮어쓰기 없음.
- 수정 Scene2·3·5는 H.264 재인코딩되어 패치 밖도 미세 압축 차이가 있다. 대표 프레임의 패치 밖 RGB 평균 절대차는 각각0.188/0.181/0.190(255기준). 해당 Scene 전체 픽셀이 동일하다고 주장하지 않으며 내용·구도·모션은 그대로다.
- 상세 기계검사 docs/preview-caption-mechanical-qa-v1.json, 보호목록 docs/preview-caption-input-lock-v1.json.

## 기술적 미확인 상태 유지
공식Ø54mm/대산 등록Ø55mm 차이, 실제 설치 호환성, Afterv1 제품 세부 형상 조건부 승인, Scene3 실제 타공 규격 미검증은 이전 기록대로 유지한다. 영상의 내부 메모를 제거한 것이며 검증 완료로 변경하지 않았다.

## 결과 SHA256
- `public/assets/video/doormaster-handle-replacement-preview-v4.mp4`: `d111f35cdbc100579cecbb01b8c10ef0ae91177c7a248fac2cd7740ee77bfe5e`
- `public/assets/images/preview-caption-qa-v1.png`: `8047a650c4c80722183498e2d206df1e92364c9acfa259fddfc0e7f7a67f937f`

TTS·새AI이미지·Final·Cover·SNS·Git 작업 없음. 사용자 Preview 승인 전 다음 단계 진행하지 않음.
