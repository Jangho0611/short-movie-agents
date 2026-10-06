# 이보드 Canonical Reference

## 1. 목적

도배용·페인트용·단면·전체 외형의 실제 제품 기준을 보존하는 reference library다.

## 2. 실제 촬영 기준

- 촬영일: 2026-08-20
- 실제 제품 촬영본이며 AI 생성 이미지와 구분한다.
- 원본 위치: `/Users/janghokim/Pictures/Photos Library.photoslibrary/originals/`

## 3. 도배용

육안으로 페인트용과 쉽게 구분되지 않을 수 있다. 표면 섬유가 약간 더 살아 있고 털이 조금 일어난 듯한 미세 질감이 있으나 차이를 과장하지 않는다.

| 파일명 | 역할 | 해상도 | 파일 크기 | 원본 경로 | SHA-256 | 추천 용도 |
|---|---|---:|---:|---|---|---|
| `eboard-wallpaper-front-v1.jpeg` | 전체 정면 | 5712×4284 | 5,971,731 bytes | `A/A10175A9-ACCB-4E20-926D-6B8DD19A4C99.jpeg` | `d64e9c37d6ddee2445b976e52b13860863e599356f7cbe298cf9b228de09a90b` | 제품 소개, 전체 비율 QA |
| `eboard-wallpaper-angle-v1.jpeg` | 전체 사선 | 5712×4284 | 6,089,810 bytes | `9/9EEEFC59-3D2A-4E1B-9195-AF0653950D65.jpeg` | `4963ad01827a402027176dc90adc158f387c9c2ccf8417022f84592acfeff12a` | 두께와 모서리 인지 |
| `eboard-wallpaper-surface-closeup-v1.jpeg` | 표면 클로즈업 | 4032×3024 | 3,178,234 bytes | `8/8173910C-0470-43B7-AD04-2956F080CD78.jpeg` | `fb26c7e81c55045353d9c034f3f5db8f730f55b3cd1efaca4b266f1d59282ab3` | 섬유 질감 QA |

## 4. 페인트용

도배용과 전체적으로 매우 유사하다. 상대적으로 표면이 더 균일하고 매끈하게 보이지만 유광이나 플라스틱처럼 표현하지 않고 matte fibrous surface를 유지한다.

| 파일명 | 역할 | 해상도 | 파일 크기 | 원본 경로 | SHA-256 | 추천 용도 |
|---|---|---:|---:|---|---|---|
| `eboard-paint-front-v1.jpeg` | 전체 정면 | 5712×4284 | 5,909,519 bytes | `D/D1F7309E-9E30-466B-B0BF-93449B5C1B23.jpeg` | `0c43b3d7669de8cfff085128df917fa6eafa288f8ce897d4b8a172f44c088fcd` | 제품 소개, 전체 비율 QA |
| `eboard-paint-angle-v1.jpeg` | 전체 사선 | 5712×4284 | 5,302,395 bytes | `5/5B6437DE-0618-425F-8BE6-50E148FAF94D.jpeg` | `8e8033081a4790fbc9aebd7f79430145870503ea12cf826560664537f7c5a85e` | 두께와 모서리 인지 |
| `eboard-paint-surface-closeup-v1.jpeg` | 표면 클로즈업 | 4032×3024 | 1,945,119 bytes | `4/43F43DA2-7189-4FAD-B061-3BDE9796B460.jpeg` | `474c1ffbe9e9df4769931204fff6a180b73720fb4a95dc93fceb6e6622bac814` | 균일한 무광 섬유 질감 QA |

## 5. 도배용 vs 페인트용 비교

- 실제 육안 차이가 크지 않고 색상 차이로 구분하는 자재가 아니다.
- AI 생성 시 texture difference를 과장하지 않는다.
- `eboard-wallpaper-vs-paint-v1.jpeg`은 왼쪽 도배용, 오른쪽 페인트용 비교컷이다.

| 파일명 | 역할 | 해상도 | 파일 크기 | 원본 경로 | SHA-256 | 추천 용도 |
|---|---|---:|---:|---|---|---|
| `eboard-wallpaper-vs-paint-v1.jpeg` | 좌 도배용·우 페인트용 | 5712×4284 | 6,410,280 bytes | `5/59AC61AB-61C6-41D6-8554-D2BE0C8A3D70.jpeg` | `7b1fe4cb51280b428cc04e16491e7dea9a8483ae4e215dd6549ef9f1dd7e01a6` | 실제 차이 검증 |

## 6. 단면

실사에서 pink XPS core, 얇은 표면층과 실제 단면 비율을 확인할 수 있다. PP·부직포 같은 세부 구조 명칭은 공식 제품 자료와 함께 검증하고 사진만으로 과도하게 해석하지 않는다.

| 파일명 | 역할 | 해상도 | 파일 크기 | 원본 경로 | SHA-256 | 추천 용도 |
|---|---|---:|---:|---|---|---|
| `eboard-cross-section-main-v1.jpeg` | 메인 단면 | 4032×3024 | 1,656,773 bytes | `E/E84C17A0-944C-4A47-AC9F-D2744CFF1497.jpeg` | `aae255eafec603089defbd7c1fbad0afeae70e6248fcc7f8fb8e36e823ac2fd7` | 구조와 층 비율 설명 |
| `eboard-cross-section-detail-v1.jpeg` | 상세 단면 | 4032×3024 | 1,634,922 bytes | `F/F2750564-B8DC-4328-8185-24ED3C907429.jpeg` | `ba31179dd1426db6171915f55fec040ac6ecd840a826b94da4938ed8a86dba56` | 얇은 표면층 QA |

## 7. AI 생성 실패 방지

- 도배용을 carpet, wool, felt 또는 fur처럼 표현하지 않는다.
- 페인트용을 glossy, polished 또는 plastic처럼 표현하지 않는다.
- 규칙적인 mesh나 embossed 반복 패턴을 만들지 않는다.
- 검은 표면층을 두꺼운 sandwich panel처럼 표현하지 않는다.
- pink XPS가 실제 주 두께라는 점을 유지한다.
- 제품 정확도를 디자인보다 우선한다.

## 8. Scene 추천 용도

- 전체판: 제품 소개
- 사선: 두께·단면 인지
- close-up: 도배용·페인트용 표면 비교
- 비교컷: 실제 차이 검증
- 단면: 구조 설명
- AI 결과 QA: 실제 reference 대조
