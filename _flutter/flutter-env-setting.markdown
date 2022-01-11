---
layout: post
title:  "flutter 예제 따라하기"
date:   2022-01-10
excerpt_separator: <!--more-->
---
flutter 공식 문서의 예제를 따라서 실습 진행
<!--more-->

### 1~2단계 실습내용  
1. flutter create my_app
(app이름 지을 때, under bar만 가능)

2. vscode에서 해당 폴더로 이동 
`cd /my_app`

3. 메인 소스 수정
`my_app/lib/main.dart` 내의 소스를 전부 복붙

4. pubspec.yaml에 패키지 추가(package.json과 유사한 기능으로 보임)
	- `my_app/pubspec.yaml`에 "english_words"를 추가
    - 공식문서에는 english_words의 버전을 3.1.0으로 가져오라고 하지만 에러 발생함. 이에 4.0.0(최신버전)으로 가져오니 에러 발생하지 않음

5. 시뮬레이터 중앙에 랜덤하게 문자가 입력되는 것을 확인
- `open -a Simulator`
- vscode에서 우측 하단에서 방금 켠 시뮬레이터 선택
- F5로 디버깅 시작
	- 디버깅 툴은 flutter & dart 선택
- 소스를 저장할 때마다 hot reload로 인하여 시뮬레이터 중앙에 랜덤하게 문자 입력되는 것을 확인