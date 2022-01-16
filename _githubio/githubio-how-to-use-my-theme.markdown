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