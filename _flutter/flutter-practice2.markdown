---
layout: post
title:  "flutter 예제 따라하기[2단계]"
date:   2022-01-12
---
## 실습내용

#### 0. 주의사항
- 1단계에서 한 것과 소스가 조금 다르다. 실습하면서 소스 전체를 다시 입력해야 한다.
<br />
<br />

#### 1. list에 [좋아요] icon추가
- Icon이라는 위젯을 사용하여 각 row에 icon추가
<br />
<br />

#### 2. row 선택시 이벤트 추가
- 아이템을 클릭할 때마다 icon이 변경된다.
- 좋아요를 누르지 않았던 아이템을 클릭하면 _saved에서 해당 row의 item이 추가된다.
- 좋아요를 눌렀던 아이템을 클릭하면 _saved에서 해당 row의 item이 제거된다.
<br />
<br />

#### 3. appBar에 다른 페이지로 넘어가는 버튼 추가
- 해당 버튼 클릭시 navigator를 통해 다른 페이지로 넘어간다.
- 해당 페이지에서는 이전 페이지에서 좋아요 누른 아이템들이 나온다.
<br />
<br />

#### 4. Material App의 테마 수정
<br />
<br />
<hr />

## 소스분석
#### 1. _RandomWordsState > build > scaffold > appbar > action
- appbar의 우측 상단 자리를 의미한다.
<br />
<img src="../assets/images/appbar_action.png" width="300" height="200">
<br />
<br />

#### 2. _RandomWordsState > build > scaffold > appbar > action > onPressed
- action에 있는 버튼을 클릭시 실행될 메서드를 정의한다.
<br />
<br />

#### 3. _pushSaved
- navigator는 스택처럼 행동한다. A라는 화면이 있을 때 navigator에 B를 넣으면 화면상에서 B가 나타나게 되는 것이다.
- navigator.of(context)에서 context는 내가 이해한 바로는 특정 객체를 지칭할 수 있는 녀석이다. 여기서 context는 navigator를 호출한 materialapp이 된다. 즉, navigator.of(context)는 materialapp의 navigator라는 뜻이 된다고 본다. 다른 layout위젯도 별도의 navigator를 가질 수 있겠다.
<br />
<br />

#### 4. MaterialPageRoute
- navigator를 통해 이동하면 나타나는 화면을 의미하는 것으로 보인다.
- 현재 소스에서는 titles에 좋아요를 누른 아이템들을 가져와서 listTile을 만든다.. (hashset으로 넣어서 map함수로 가져오는 것으로 보인다.)
- divideTiles를 통해서 아이템들 사이에 구분선을 넣어줄 수 있다.
```dart
return Scaffold(
  appBar: AppBar(
    title: const Text('Saved Suggestions'),
  ),
  //body부분을 ListView.Builder를 통해서 아래와 같이 수정해봤다.
  body: ListView(children: divided),
;
```
```dart
body: ListView.builder(
    padding: const EdgeInsets.all(16.0),
    itemCount: _saved.length * 2 - 1,
    itemBuilder: (context, i) {
      if (i.isOdd) return const Divider(); /*2*/
      return _buildRow(_saved.elementAt(i ~/ 2));
  })
```
<br />
<br />

#### 5. MaterialApp > theme
- 테마를 바꾼다.
- 이 context의 navigator에 있는 녀석들도 적용된다.
<br />
<br />
<hr />

## 소감
- 아직도 많이 감이 필요한 것 같다. dart언어 자체에도 익숙해지지 않은 느낌이다.
- 다음은 [flutter개발문서](https://flutter-ko.dev/docs/development/ui/widgets-intro)로 기능들 전부 구현하는 앱을 하나 만들어 봐야겠다.
<br />
<br />
<hr />

## 출처
- [api.flutter.dev](https://api.flutter.dev/flutter/material/AppBar-class.html)