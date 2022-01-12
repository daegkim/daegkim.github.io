---
layout: post
title:  "flutter 예제 따라하기[1단계]"
date:   2022-01-10
---
## 실습내용
#### 1. flutter create my_app
- (app이름 지을 때, under bar만 가능)
<br />
<br />

#### 2. vscode에서 해당 폴더로 이동 
- `cd /my_app`
<br />
<br />

#### 3. 메인 소스 수정
- `my_app/lib/main.dart` 내의 소스를 전부 복붙
<br />
<br />

#### 4. pubspec.yaml에 패키지 추가(package.json)
- `flutter pub add english_words`로 가져오는게 더 편하다고 본다.(npm install)
- `my_app/pubspec.yaml`에 "english_words"를 추가
- 공식문서에는 english_words의 버전을 3.1.0으로 가져오라고 하지만 에러 발생함. 이에 4.0.0(최신버전)으로 가져오니 에러 발생하지 않음
<br />
<br />

#### 5. 시뮬레이터 중앙에 랜덤하게 문자가 입력되는 것을 확인
- `open -a Simulator`
- vscode에서 우측 하단에서 방금 켠 시뮬레이터 선택
- F5로 디버깅 시작 후 디버깅 툴은 flutter & dart 선택
- 소스를 저장할 때마다 hot reload로 인하여 시뮬레이터 중앙에 랜덤하게 문자 입력되는 것을 확인
<br />
<br />
<hr />

## 소스분석
#### 1. void main() => runApp(MyApp());
- c, java처럼 main()부터 실행된다.
- 화살표형 함수다. `const main = () => console.log('hello world')`
- 객체 생성시 `new MyApp()`에서 `new`는 생략한다.
<br />
<br />

#### 2. class MyApp extends StatelessWidget
- StatelessWidget을 상속.
- 모든 요소들은 Widget으로 표현한다.
- StatelessWidget은 react에서의 state가 없다는 뜻이다. 이는 state의 변경을 감지하지 않는다는 뜻이 된다.
<br />
<br />

#### 3. @override
- java에서의 역할과 동일. 상속받은 class의 함수를 덮어쓴다.
<br />
<br />

#### 4. Widget build(BuildContext context)
- build함수는 tree에 삽입될 때 호출하는 함수이며 이 함수에서 리턴하는 위젯을 트리에 삽입 시킨다. 트리에서의 위치를 BuildContext를 통해 지정한다.
<br />
<br />

#### 5. return MaterialApp(title: 'Startup Name Generator', home: RandomWords());
- MaterialApp이라는 layout위젯이며 이 위젯의 하위 노드로 들어갈 위젯을 또 넣어준다. 이 위젯의 사용법은 home에 위젯을 담아서 넣는 것이다.
<br />
<br />

#### 6. RandomWordsState createState() => RandomWordsState();
- RandomWords라는 위젯의 state와 RandomWordsState를 연결하는 메소드라고 보면 된다.
- RandomWords라는 위젯은 `extends StatefulWidget`으로 state가 필요하다.
<br />
<br />

#### 7. class RandomWordsState extends State<RandomWords>
- RandomWordsState는 State인데 RandomWords위젯에서 사용될 State라고 생각하면 될 것 같다.
<br />
<br />

#### 8. RandomWordsState내부의 build()
- 내 생각엔 state가 바뀔 때 빌드될 항목들을 반환하는 것으로 보인다. 즉, RandomWords의 state가 바뀔 때 build되는 내용이 RandomWordsState에 작성되어 있는 것이다. ~~그래서 사실 마음에 안든다.~~
<br />
<br />

#### 9. Scaffold
- MaterialApp과 같은 layout위젯으로 생각했다.
<br />
<br />
<hr />

## 참조
- [박성룡 medium](https://pks2974.medium.com/flutter-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-9532e16aff57)