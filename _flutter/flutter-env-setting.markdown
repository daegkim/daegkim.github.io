---
layout: post
title:  "flutter환경설정(맥OS)"
date:   2022-01-10
---
## 환경설정
### 1. flutter sdk설치
- [다운로드 경로](https://storage.googleapis.com/flutter_infra_release/releases/stable/macos/flutter_macos_2.8.1-stable.zip)에서 다운로드
  - 한국 flutter.dev에는 이상하게 링크가 깨져 있어서 가져왔습니다.
  - 혹은 `git clone -b master https://github.com/flutter/flutter.git` 으로 클론해도 잘 됩니다.
- 원하는 곳에 압축 해제
- `cd /` 입력 후 `vim .zshrc`
- `.zshrc`에 `export PATH="$PATH:{압축해제한 절대경로(?)}/flutter/bin`입력 후 저장
  - [예시] `export PATH="$PATH:Users/daegeunkim/development/flutter/bin"`
- `source .zshrc` 입력
- `flutter --version`으로 정상 세팅 확인

### 2. xcode 설치
- xcode 설치
- xcode에 있는 모바일 시뮬레이터를 `open -a simulator`로 시작

### 3. flutter sample app 실행
- 터미널로 app실행
```bash
flutter create my_app
cd my_app
flutter run
/* react와 유사함 */
```
- vscode로 app실행
  - Extension설치 : Flutter
  - vscode로 프로젝트 오픈
  - `open -a simulator`로 시뮬레이터 켜기
  - vscode 우측 하단에 no devices를 클릭해서 시뮬레이터 선택
    - ![우측하단](../assets/images/vscode-simulator.png)
  - F5 혹은 디버깅 버튼 눌러서 디버깅 시작

### 4. 아이폰으로 배포(나중에 필요하면 진행..)
- 공식문서 가이드를 따라가던 중에 문제가 생긴 것이 있어서 공유
- 내 애플 계정을 개발자 계정으로 등록해야 함
  - [경로](https://developer.apple.com/account/)