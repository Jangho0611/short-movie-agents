# 대산이 Motion Library

## 최종 보존 모션

### daesani-point-right.mp4
정면 차렷 → 오른쪽 가리키기 → 차렷 복귀.

기본 오른쪽 설명/제품 지시용.

### daesani-point-right-talking.mp4
오른쪽을 가리키면서 입 움직임이 포함된 버전.

현재 테스트 중 말하는 느낌이 가장 자연스러웠던 승인 후보.
정확한 TTS 립싱크용이 아니라 설명 중인 느낌을 주는 용도.

### daesani-point-left.mp4
정면 차렷 → 왼쪽 가리키기 → 차렷 복귀.

왼쪽 제품/비교 대상 지시용.

### daesani-open-arms-explain.mp4
양팔을 벌리며 설명 → 차렷 복귀.

작은 크기의 보조 캐릭터로 조건부 사용.

## 기본 활용 방식

- Shorts 화면 높이 약 20~25%의 보조 캐릭터로 사용.
- 실제 Scene에 overlay할 때 배경 제거 후 합성.
- 위치와 크기는 Scene별로 Remotion에서 조정.
- 핵심 제품/자막을 가리지 않는다.
- 모션 종료 후 캐릭터를 유지해야 할 경우 마지막 정상 차렷 프레임을 freeze한다.
- 필요 구간까지만 모션을 사용하고 이후 정상 프레임을 유지할 수 있다.
- Veo 원본을 매 영상마다 다시 생성하지 않고 승인된 모션을 우선 재사용한다.

## 알려진 한계

- 팔 동작 중 팔 굵기·길이 또는 손 형태가 일부 변할 수 있다.
- 작은 크기의 보조 캐릭터 사용을 기본으로 한다.
- 브랜드 동일성이 중요한 큰 화면 Hero 캐릭터 용도로는 사용하지 않는다.

## Reference

`reference/daesani-motion-safe-reference.png`

Veo IMAGE → VIDEO 테스트에 사용한 motion-safe padded Canonical Reference.
