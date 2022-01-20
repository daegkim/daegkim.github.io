---
layout: post
title:  "daegkim.github.io 커스텀 방법"
date: 2022-01-16
---
## 사용방법
<br />

> 현재 사이트를 커스텀 하는 방법을 소개하고자 합니다.

<br />

#### 1. 카테고리 추가
- _data > category.json로 이동
- groups > items에 item_name과 link추가
- 카테고리 그룹(group_name)을 추가하면 카테고리 묶음이 달라집니다.
```json
{
  "group_name": "about",
  "items": [
    {"item_name": "About me", "link": "about.html"},
    {"item_name": "memo", "link": "memo.html"}
  ]
}
```

#### 2. config.yml 작성
- _config.yml > collections에 아래와 같이 그룹 이름 추가
```yml
collections:
  flutter:
    output: true
```

#### 3. 폴더 추가
- _xxx 이름으로 폴더 추가
- 이후에 해당 폴더에 markdown문서 추가

#### 4. 해당 카테고리의 link를 타고 들어가서 띄울 페이지 추가
- xxx.html 추가하여 작성

#### 5. syntax_highlighter 수정
아래와 같이 _config.yml을 설정하고
```yml
markdown: kramdown
kramdown:
  input: GFM
  syntax_highlighter: rouge
```
rougify를 설치하고 아래 명령어를 입력하면 원하는 테마를 지정할 수 있다.
```bash
rougify style ${원하는테마}  > ${css파일 경로}
rougify style base16.dark  > assets/css/syntax.css
```
[페이지](https://spsarolkar.github.io/rouge-theme-preview/)에 접속하면 테마가 어떤 모양인지를 볼 수 있다.

그리고 나는 코드에 padding이 없어서 syntax.css에
`pre.highlight { padding: 10px; }`를 추가했다.