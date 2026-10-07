# 공통 캐릭터 기준

## Canonical reference

- 기준 이미지: `public/assets/images/scene01-vertex-reference-v4.png`
- 이미지 생성 시 위 파일을 캐릭터 visual reference로 사용한다.
- 가능하면 최초 생성 단계부터 canonical reference를 적용한다.

## 캐릭터 스타일

- Professional editorial webtoon 스타일
- 검은 hand-drawn ink line
- 중립적이고 단순한 표정
- 실사, 3D, 귀여운 mascot 스타일 금지

## 체형과 화면 비율

- 상대적으로 큰 머리
- 짧은 몸통, 팔, 다리의 compact proportions
- 캐릭터 높이는 화면 높이의 약 18~20%를 기준으로 하며, 최대 21%를 넘지 않는다.

## 기준 팔레트

| 요소 | 색상 |
|---|---|
| Body | `#636361` |
| Face | `#E4DFD9` |
| Outline | `#1E1E1E` |
| Eyes / Mouth | `#0A0A0A` |

얼굴색은 살색이나 피치가 아닌 옅은 ivory-gray 계열로 유지한다.

## 재사용 원칙

새 영상에서는 제품, 배경, 행동만 변경한다. 캐릭터의 스타일, 체형, 팔레트 등 identity는 동일하게 유지한다.

## Scene 사례

- Scene 1: canonical 기준
- Scene 2: 얼굴을 로컬 recolor로 보정했으며, 캐릭터 크기는 기준보다 큼
- Scene 3: 3명의 얼굴을 로컬 recolor하여 색상 통일
- Scene 4: 동일 스타일 참고 사례

## 실패 사례와 교훈

- HEX 프롬프트만으로는 정확한 색상 유지가 어렵다.
- Reference edit 시 전체 이미지가 재해석될 수 있다.
- 캐릭터 geometry와 크기는 수정이 잘 되지 않을 수 있다.
- 정확한 단순 색상 보정은 로컬 pixel recolor가 더 안정적이다.
- 가능하면 처음 생성할 때부터 canonical reference를 사용한다.

## 향후 workflow

장면 기획  
→ canonical character reference 적용  
→ 캐릭터 색/체형 먼저 검수  
→ 수정  
→ 캐릭터 확정 후 Veo
