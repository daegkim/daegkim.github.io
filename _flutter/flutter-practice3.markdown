---
layout: post
title:  "flutter 기본 위젯 실습2"
date:   2022-01-19
---

StatefulWidget을 활용한 좋아요 버튼 구현
```dart
class FavoriteWidget extends StatefulWidget {
  // 1. 생성자
  // 2. key
  FavoriteWidget({Key? key, this.active = false}) : super(key: key);

  //3. state
  bool active;

  //4. createState
  @override
  _FavoriteWidgetState createState() => _FavoriteWidgetState();
}
```
<p style="font-weight: bold">생성자</p>
<p>named param을 사용할 수 있다. 이를 통해 this.active = active와 같은 코드를 생성자에 추가하지 않아도 된다.</p>
<p style="font-weight: bold">key</p>
<p>react에서 list에 할당하는 key와 같은 개념이다.</p>
<p>이 key가 해당 widget을 정확히 포인트할 수 있도록 해준다.</p>
<p>ListView에서도 내부에 widget을 넣을 때 key를 꼭 할당하도록 한다.</p>
<p style="font-weight: bold">StatefulWidget 내부의 변수</p>
<p>State class에서만 state를 선언하고 사용할 수 있는 것은 아니다.</p>
<p>State class에서 widget.{state}로 set하거나 get할 수 있다.</p>
<p>자세한 내용은 아래에도 나온다.</p>
<p style="font-weight: bold">createState</p>
<p>StatefulWidget의 생성자가 호출되면 곧바로 호출되는 녀석이 바로 createState이다.</p>
<p>createState를 통해서 state를 만들고 build를 한다고 생각하면 편할 것 같다.</p>

```dart
class _FavoriteWidgetState extends State<FavoriteWidget> {
  // 1. state
  bool _isFavorited = true;
  int _favoriteCount = 41;

  void _handlePressIcon() {
    // 2. setState
    setState(() {
      if(_isFavorited) {
        _favoriteCount -= 1;
        _isFavorited = false;
        // 3. widget.active
        widget.active = false;
      }
      else {
        _favoriteCount += 1;
        _isFavorited = true;
        widget.active = true;
      }
    });
  }

  // 4. build
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        FavoriteNumberWidget(number: _favoriteCount,),
        IconButton(
          icon: _isFavorited ? const Icon(Icons.star) : const Icon(Icons.star_border),
          onPressed: _handlePressIcon,
        ),
        // 5. visibility
        Visibility(
          child: IconButton(
            icon: Icon(Icons.email),
            onPressed: () {
              log('hello');
            },
          ),
          visible: widget.active,
        )
      ],
    );
  }
}
```
<p style="font-weight: bold">state</p>
<p>State class 내부의 속성이 state가 된다.</p>
<p style="font-weight: bold">setState</p>
<p>setState를 통해서 state를 변경해야만 rebuild가 발생한다.</p>
<p style="font-weight: bold">widget.active</p>
<p>위에서 말한 것처럼 StatefulWidget class 내부의 속성에도 접근할 수 있다.</p>
<p>추측이지만 이런 식으로 접근하는 방식을 추천하진 않을 것 같다.</p>
<p>State class 내부에 정의하여 사용하는것만드로도 충분하지 않을까?</p>
<p style="font-weight: bold">build</p>
<p>build하는 과정이다.</p>
<p>개인적으로 StatelessWidget처럼 build를 StatefulWidget에서 재정의 하는게 더 맞는거 아닌가 생각된다.</p>
<p>왜 State 안에서 재정의하도록 했을까? 마치 State가 Widget객체인 것처럼...</p>
<p>아마도 State에 따라 빌드되는 값이 다르기 때문에 하나에 몰아둔 것 같기도 하다.</p>