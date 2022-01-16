---
layout: post
title:  "flutter 기본 위젯 실습"
date:   2022-01-16
---
## 실습내용
#### 1. Row & Column
- Row가 세로, Column이 가로 생각했는데 아니었다. 완전 반대로 진행된다.
```dart
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: <Widget>[
    Row(
      mainAxisAlignment: MainAxisAlignment.center, 
      // main axis기준으로 center가운데 정렬
      // main axis가 가로축
      // cross axis가 세로축
      // Row가 가로축이므로 main axis로 컨트롤 한다.
      children: const <Widget>[
        Text('Col-1 Row-1  /'),
        Text('  Col-1 Row-2  /'),
        Text('  Col-1 Row-3')
      ],
    ),
    Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: const <Widget>[
        Text('Col-2 Row-1 /'),
        Text('  Col-2 Row-2  /'),
        Text('  Col-2 Row-3')
      ],
    ),
  ]
)
```
<img src="../assets/images/row-column.png" width="280" height="180">
- [axis와 flex 개념 참고](https://medium.com/flutter-korea/row-column-widgets-8c1ff09a6219)

#### 2. Container & Stack
- Containter는 네모 영역이라고 생각하면된다.
- Stack이라는 위젯의 children으로 들어간 위젯들은 계속 겹쳐진다.
- 자료구조 Stack처럼 먼저 들어간 위젯이 맨 밑으로 깔린다.
```dart
Stack(
  children: [
    Container(
      width: 100,
      height: 100,
      color: Colors.amber,
    ),
    container(
      width: 50,
      height: 50,
      color: Colors.blueAccent
    )
  ]
)
```
<img src="../assets/images/stack-container.png" width="280" height="180">