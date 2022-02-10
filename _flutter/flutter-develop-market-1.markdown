---
layout: post
title:  "쇼핑몰 앱 제작기 - Day1"
date:   2022-02-10
---
쇼핑몰 앱을 구현해 볼 에정이다. 서버는 따로 구축하지 않고 데이터 요청은 비동기 방식으로 가져오도록 할 예정이다.
앱은 무신사 앱을 따라서 개발해보려고 한다.
<br />
<br />

### Day 1
<br />

#### 초기 앱 실행시 나타나는 화면 개발

<br />
처음 앱을 켜면 ferde라고 써있는 화면이 나타난다. 서서히 나타났다가 사라지면 메인 화면이 나타난다.
<br />
이는 마치 현관문을 열고 들어가야 집을 볼 수 있는 것과 같은 구조이다. 그래서 이 화면은 front-door라고 부른다.
<br />
<br />
<img src="../assets/images/front-door.gif" width="250" height="580">
<br />
<br />
아래 목록들을 개발했다.
<br />
<br />

1. app을 시작하면 front-door를 열도록 한다.
2. front-door에 애니메이션 효과를 준다.
3. 애니메이션 효과가 끝나면 메인 화면으로 이동시킨다.

<br />
그럼 이제 목록들을 어떻게 구현했는지 살펴보자
<br />
<br />

#### app을 시작하면 front-door를 열도록 한다.
materialApp의 하위 위젯으로 FrontDoorWidget을 사용하도록 넣어준다.
```dart
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      // FrontDoor
      home: const FrontDoorWidget(),
    );
  }
}
```
<br />
<br />
<br />

#### front-door에 애니메이션 효과를 준다.
<br />
Animation과 이를 통제하는 AnimationController를 사용하면 애니메이션 효과를 줄 수 있다.
<br />
서서히 fadein하는 효과를 주기 위해서 opacity에 animation을 부여했다. 다른 요소에 애니메이션 효과를 줄 때는 animation.value를 넣어준다.
<br />
예를 들어 0에서 100으로 만드는 animation이 있고 이를 높이에 적용시키려면 height: animation.value로 지정한다.
<br />
<br />
<br />

#### 애니메이션 효과가 끝나면 메인 화면으로 이동시킨다.
<br />
addStatusListener라는 리스너를 통해서 애니메이션의 상태에 따라서 어떤 것을 실행할지 설정할 수 있다.
애니메이션 종료 라는 상태를 리스터를 통해서 받으면 Navigator를 통해 화면을 이동시키도록 했다.
<br />
<br />
<br />

#### 최종코드
<br />
최종 코드는 아래와 같으며 몇가지 정리하고 넘어간다.
<br />
<br />

1. late
   1. 객체가 완성되고 _controller가 실제로 사용되는 시점에 초기화가 된다는 것을 의미한다.
   2. context와 this는 선언부에서는 사용할 수가 없는데 (객체가 완성되어야 사용할 수 있기 때문에) late가 이를 가능하게 만들어준다.
2. AnimationController의 vsync에 this매핑
   1. vsync는 구글링을 해보면 수직동기화라고 입력부와 출력부의 프레임을? 동기화 시키는 작업이라고 한다.
   2. this에는 타이머 객체인 TickerProviderStateMixin가 들어가게 수직동기화 시키는 타이머?라고 이해했다.
<br />
<br />

```dart
class _FrontDoorWidgetState extends State<FrontDoorWidget> with TickerProviderStateMixin {
  _FrontDoorWidgetState();
  late final AnimationController _controller = AnimationController(
    duration: const Duration(milliseconds: 1500),
    vsync: this,
  )..forward()
  ..addStatusListener((status) {
    if(status == AnimationStatus.completed){
      Navigator.of(context).pop();
      Navigator.of(context).push(
        MaterialPageRoute(
          builder: (context) => const IndexWidget()
        )
      );
    }
  });

  late final Animation<double> _animation = CurvedAnimation(
    parent: _controller,
    curve: Curves.easeIn,
  );
  
  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // 전체를 가득 채우는 방법
    return Scaffold(
      body: Center(
        child: FadeTransition(
          child: const Image(
            image: AssetImage('assets/images/front-door.png'),
            fit: BoxFit.cover,
            height: double.infinity,
            width: double.infinity,
          ),
          opacity: _animation,
        ),
      ),
    );
  }
}
```