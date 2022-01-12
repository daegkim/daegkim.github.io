---
layout: post
title:  "github.io 환경설정"
date:   2022-01-11
---
## 환경설정
#### 0. 정적 프레임워크는 jekyll을 사용했다. 기본언어가 ruby여서 구조나 소스가 익숙하지가 않다.
<br />

#### 1. 루비 개발환경 설치
- 맥에는 이미 설치가 되어 있어서 skip...
<br />
<br />

#### 2. jekyll설치
- `gem install jekyll bundler (npm install)`
- `jekyll new myblog (npx create-react-app myblog)`
- 해당 경로로 이동 후 `bundle exec jekyll serve` 실행하면 로컬에 생성된다.
<br />
<br />

#### 3. github에 올리기
- 해당 소스를 그대로 github에 push하는데 레퍼지토리 이름은 반드시 `{github_id}.github.io`로 해야 합니다.
- push를 하게 되면 아래 화면과 같이 action탭에서 push한 소스가 build되고 deploy되는 것을 볼 수 있다.
<br />
<img src="../assets/images/github_action.png" width="350px" height="100px">
<br />
<br />

#### 4. 다른 사람의 테마 가져오기
- 몇 번 시도를 해봤지만.. 내 입맛에 맞게 수정할 수가 없었다. 그래서 그냥 처음부터 만들기로 결심했다.