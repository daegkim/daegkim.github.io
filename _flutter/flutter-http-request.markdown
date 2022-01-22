---
layout: post
title:  "flutter http request 결과를 통한 초기 State 세팅"
date:   2022-01-21
---

<h4>Http request 결과를 통한 초기 State 세팅</h4>
<p>앱 개발할 때는 서버에 데이터를 요청하는 과정은 필수이다.</p>
<p>flutter에서 http통신을 통해 데이터를 가져오는 과정을 알아본다.</p>
<br />

```dart
class _TodoListState extends State<TodoList> {
  // 1. Future
  Future<List<TodoItem>> todoItems = Future<List<TodoItem>>(() => []);

  Future<List<TodoItem>> getTodoItems() async {
    // 2. http 설치
    Uri uri = Uri.https("jsonplaceholder.typicode.com", "/todos");
    List<TodoItem> result = [];
    int x = 0;

    final http.Response response = await http.get(uri);
    for (var todoItem in jsonDecode(response.body)) {
      if(x > 5) {
        break;
      }
      result.add(TodoItem(title: todoItem["title"].toString()));
      ++x;
    }

    return result;
  }

  // 3. initState
  @override
  void initState() {
    super.initState();
    todoItems = getTodoItems();
  }

  @override
  Widget build(BuildContext context) {
    // 4. FutureBuilder
    return FutureBuilder<List<TodoItem>>(
      future: todoItems,
      builder: (context, snapshot) {
        if(snapshot.hasData){
          return Column(
            children: [
              OutlinedButton(
                onPressed: () {
                  // 5. Future state에 값 추가
                  setState(() {
                    todoItems
                    .then((value) {
                      value.add(TodoItem(title: 'This is my way'));
                    });
                  });
                },
                child: const Text("CLICK"),
              ),
              Expanded(
                child: ListView.builder(
                  // 6. use snapshot
                  itemCount: snapshot.requireData.length,
                  itemBuilder: ((context, index) {
                    return Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                      child: Text(
                        snapshot.requireData[index].title
                      ),
                    );
                  })
                )
              )
            ],
          );
        }
        else if(snapshot.hasError) {
          return const Text('error');
        }
        else {
          return const Text('loading');
        }
      },
    );
  }
}
```

<br />
<h4 style="font-weight: bold">Future 객체</h4>
<p>javascript의 promise와 같은 개념이라고 보면 된다.</p>
<p>비동기 결과값을 가지고 있는 객체라고 보면 된다. 지금 당장은 값을 가지고 있지 않을 수도 있는 것이다.</p>
<br />

<h4 style="font-weight: bold">http 패키지 설치</h4>
<p>nodejs의 npm install xxx와 같이 설치할 수 있다.</p>

```
flutter pub add http
```

<p>혹은 pubspec.yaml에 설치하고자 하는 패키지 명을 입력하고 아래 명령어를 사용하는 방법도 있다.</p>

```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^0.13.4
```
```bash
flutter pub get
```

<br />
<h4 style="font-weight: bold">initState</h4>
<p>처음 객체가 생성될 때만 실행되는 함수이며 초기 state값을 설정하는 용도로 사용한다. state가 변경되어서 build함수를 다시 실행시킬 때는 호출되지 않는다.</p>
<p>initState는 비동기 함수로 선언할 수 없다. initState 내부에서 state값을 설정할 때, async함수를 await로 대기시킬 수 없다는 뜻이다.<br />따라서 async함수를 통해 가져온 Future형태 그대로 state로 사용해야 한다.<br />그런데 Future객체는 말 그대로 미래에, 비동기 작업이 끝나면 값이 채워지는 객체다. 이걸 state로 쓰면 build되기 전까지 값이 채워지지 않았을 수도 있다. 그리고 initState는 단 한 번만 호출되기 때문에 만약 build되기 전까지 값이 채워지지 않으면 state가 없는 상태로 build되고 끝나버린다. 이에 대응하기 위해 있는 것이 아래의 FutureBuilder이다.</p>

_FutureBuilder를 사용하지 않고 그냥 initState에서 비동기로 호출한 후에 setState를 사용할 수도 있다._
<br />
<br />

#### __FutureBuilder__
<p>Future 객체에 저장된 값을 가지고 Build해주는 객체이다. 초기에 state값을 비동기로 가져와야 하는 경우에 사용한다.</p>
<p>다른 때에는 비동기여도 비동기 작업 종료 후 setState()를 해주면 되기 때문에 FutureBuilder를 사용할 일은 없을 것 같다.</p>
<br />

#### __Future state에 값 추가__
<p>아래와 같이 Future객체도 js의 Promise와 같이 비동기 실행 후의 결과를 then이나 await키워드를 통해서 받는다.</p>
<p>Future state에 값을 then 내부에서 setState를 통해서 추가한다.</p>

```
state.then(() => setState();)
```

<br />

#### __snapshot__
<p>FutureBuilder > builder의 파라미터인 snapshot은 Future에 담긴 비동기 작업의 진행상황에 대한 snapshot이라고 생각하면 된다.</p>
<p>snapshot에는 hasData가 있는데 비동기 작업이 끝나면 true이고 진행중이거나 에러가 발생하면 false이다.</p>
<p>snapshot에는 data가 있는 이 값이 바로 Future내부에 있는 값이 된다.
<br />그런데 이 data를 사용하려고 하면 data가 nullable하다고 컴파일러 에러 발생한다.
<br />이를 해결하기 위해서
<br />
1) snapshot.requireData.length 또는
<br />
2) snapshot.data!.length(!를 사용)
<br />를 사용하여 얘는 not nullable이며 에러 띄우지말라고 알려줘야 한다.</p>