# 표준 경로 통합 — 2026-10-15

원본 output 파일 삭제/이동 없음. 과거 영상은 승인본이 아닌 역사적 재현 자산이다.

| 원본 | 표준 복사본 | bytes | SHA256 |
|---|---|---:|---|
| output/preview-v1/scene01-timed-v1.mp4 | public/assets/video/scene01-timed-v1.mp4 | 160762 | abefdd6efa41691afcfc3974153b308cfae1588c4b628fad2ebe80ac162bf6db |
| output/preview-v1/scene02-timed-v1.mp4 | public/assets/video/scene02-timed-v1.mp4 | 121535 | 0d6ece7554e008488ba553e185c6426d6e7f8924e63ab678a57f8b4a7a3ff286 |
| output/preview-v1/scene03-timed-v1.mp4 | public/assets/video/scene03-timed-v1.mp4 | 138746 | d2a4210a35866df339436d830255c4df15dfa681c6b6d48bc4df0da9133cb30a |
| output/preview-v1/scene04-timed-v1.mp4 | public/assets/video/scene04-timed-v1.mp4 | 146486 | 003b904629a9842f7470575557f9196924885592f4af979e763363c7f4642660 |
| output/preview-v1/scene05-timed-v1.mp4 | public/assets/video/scene05-timed-v1.mp4 | 188014 | 96022691aa7864fe976bfc6b9f184ef70fd039f6daaaa6113cd119ff20ab6ab2 |
| output/preview-v1/scene06-timed-v1.mp4 | public/assets/video/scene06-timed-v1.mp4 | 204047 | 3cba77161685d692779229838697ec8cdb11b44a9a334b773c1f62204b4e8529 |
| output/preview-v2/scene01-v2.mp4 | public/assets/video/scene01-v2.mp4 | 141782 | 84960b4942063b987a99004753f2d1bc6997fd922ef36cf91153fb3f7dac08d8 |
| output/preview-v2/scene02-v2.mp4 | public/assets/video/scene02-v2.mp4 | 112208 | 8f252eeca38139208421d8b74ee442fa24fb45de9b514ef4323e911691963c31 |
| output/preview-v2/scene03-v2.mp4 | public/assets/video/scene03-v2.mp4 | 119005 | 78415e8cc01b2be1ea8a8a34a346dd20adcf33c863c083c016f25d8e264ed82e |
| output/preview-v2/scene04-v2.mp4 | public/assets/video/scene04-v2.mp4 | 138930 | 764a16b2c0155c811c3ee75c02a71e4f466b2b4625e6499debeaa8509ee604c2 |
| output/preview-v2/scene05-v2.mp4 | public/assets/video/scene05-v2.mp4 | 170260 | bf0cc9ee0bdfd8a096d3cd47e91e0e9ec30326a55f65625bf37e684da4a8f7d2 |
| output/preview-v3/scene04-v3.mp4 | public/assets/video/scene04-v3.mp4 | 131182 | fa94ec30e0e4a01cf9bd87ae3f9155d75c8da5ff138a89687bb580e0bcfa5898 |
| output/preview-v3/scene05-v3.mp4 | public/assets/video/scene05-v3.mp4 | 170260 | bf0cc9ee0bdfd8a096d3cd47e91e0e9ec30326a55f65625bf37e684da4a8f7d2 |
| output/slim-frame-reform-preview-v2.mp4 | public/assets/video/slim-frame-reform-preview-v2.mp4 | 6011942 | 9c4347ae0b302e2e784ff482a27cf7667f2afb82e92f562199c61d36192edafb |
| output/slim-frame-reform-preview-v3.mp4 | public/assets/video/slim-frame-reform-preview-v3.mp4 | 5979517 | a4d4608f7b2eb56392ad849e7fdc95b1c82e6b80e87ac7ace40415f20cacb396 |
| output/preview-v3/scene3-qa.png | public/assets/images/scene03-preview-v3-qa.png | 92805 | d97149137d5ed0c855160ac6e282d75c514a99d2bce21993af83e1b4ca81099c |
| output/preview-v4/scene04-motion-review.png | public/assets/images/scene04-preview-v4-motion-review.png | 28607 | 0b5fa3a5537bc780ad2e963d016bf3286d07dba5bf9a5771d70082295e134456 |
| output/preview-v5/scene04-scene05-comparison-v5.png | public/assets/images/scene04-scene05-preview-v5-comparison.png | 68946 | bea9862653b436e38d8da63ff00a3f5f41036026b2d3d24315be2cff99e6b0ec |

## 기존 88개 대비 추가 정리 후보23개

| 경로 | bytes | 동일 표준본 | Git 추적 |
|---|---:|---|---|
| output/preview-v1/scene01-timed-v1.mp4 | 160762 | public/assets/video/scene01-timed-v1.mp4 | False |
| output/preview-v1/scene02-timed-v1.mp4 | 121535 | public/assets/video/scene02-timed-v1.mp4 | False |
| output/preview-v1/scene03-timed-v1.mp4 | 138746 | public/assets/video/scene03-timed-v1.mp4 | False |
| output/preview-v1/scene04-timed-v1.mp4 | 146486 | public/assets/video/scene04-timed-v1.mp4 | False |
| output/preview-v1/scene05-timed-v1.mp4 | 188014 | public/assets/video/scene05-timed-v1.mp4 | False |
| output/preview-v1/scene06-timed-v1.mp4 | 204047 | public/assets/video/scene06-timed-v1.mp4 | False |
| output/preview-v2/scene01-v2.mp4 | 141782 | public/assets/video/scene01-v2.mp4 | True |
| output/preview-v2/scene02-v2.mp4 | 112208 | public/assets/video/scene02-v2.mp4 | True |
| output/preview-v2/scene03-v2.mp4 | 119005 | public/assets/video/scene03-v2.mp4 | False |
| output/preview-v2/scene04-v2.mp4 | 138930 | public/assets/video/scene04-v2.mp4 | False |
| output/preview-v2/scene05-v2.mp4 | 170260 | public/assets/video/scene05-v2.mp4 | True |
| output/preview-v3/scene04-v3.mp4 | 131182 | public/assets/video/scene04-v3.mp4 | False |
| output/preview-v3/scene05-v3.mp4 | 170260 | public/assets/video/scene05-v3.mp4 | False |
| output/slim-frame-reform-preview-v2.mp4 | 6011942 | public/assets/video/slim-frame-reform-preview-v2.mp4 | False |
| output/slim-frame-reform-preview-v3.mp4 | 5979517 | public/assets/video/slim-frame-reform-preview-v3.mp4 | False |
| output/preview-v3/scene3-qa.png | 92805 | public/assets/images/scene03-preview-v3-qa.png | False |
| output/preview-v4/scene04-motion-review.png | 28607 | public/assets/images/scene04-preview-v4-motion-review.png | False |
| output/preview-v5/scene04-scene05-comparison-v5.png | 68946 | public/assets/images/scene04-scene05-preview-v5-comparison.png | False |
| output/preview-v3/scene02-v3.mp4 | 111181 | public/assets/video/scene02-final-approved-v3.mp4 | True |
| output/preview-v3/scene06-v3.mp4 | 163395 | public/assets/video/scene06-final-approved-v3.mp4 | True |
| output/preview-v3/scene01-v3.mp4 | 133380 | public/assets/video/scene01-final-approved-v3.mp4 | True |
| output/preview-v3/scene03-v3.mp4 | 123849 | public/assets/video/scene03-final-approved-v3.mp4 | True |
| output/preview-v2/scene06-v2.mp4 | 163395 | public/assets/video/scene06-final-approved-v3.mp4 | True |

모두 표준본과 SHA256 동일, 제작 코드의 원래 output 입력 참조 없음. 삭제 권한은 포함하지 않으며 다음 사용자 승인 후 휴지통 이동 검토. 기존 커버/QA 후보는 변경 없음.
