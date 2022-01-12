---
layout: post
title:  "flutter 예제 따라하기[2단계]"
date:   2022-01-10
---
## 실습내용
#### 0. 주의사항
- 1단계에서 한 것과 소스가 조금 다르다. 실습하면서 소스 전체를 다시 입력해야 한다.

#### 1. list에 [좋아요] icon추가
- Icon이라는 위젯을 사용하여 각 row에 icon추가

#### 2. row 선택시 이벤트 추가
- 아이템을 클릭할 때마다 icon이 변경된다.
- 좋아요를 누르지 않았던 아이템을 클릭하면 _saved에서 해당 row의 item이 추가된다.
- 좋아요를 눌렀던 아이템을 클릭하면 _saved에서 해당 row의 item이 제거된다.

#### 3. appBar에 다른 페이지로 넘어가는 버튼 추가
- 해당 버튼 클릭시 navigator를 통해 다른 페이지로 넘어간다.
- 해당 페이지에서는 이전 페이지에서 좋아요 누른 아이템들이 나온다.

#### 4. Material App의 테마 수정

<br/>

## 소스분석