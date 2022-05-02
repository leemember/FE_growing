## spread-syntax

### 💫 객체

`const shirt = Object.assign(item, detail)`
새로운 오브젝트를 생성해준다. 하지만 더 좋은 방법으로는 spread 방식이 있음

```
const shirt = {...item, ...detail, price:40};
```

기존에 값들을 유지하고 새로운 값을 추가하면서 **새로운 값을** 생성하고자 할 때 쓴다. 그럼 기존에 값에서 `price: 40` 이라는 값만 추가돼서 new 값이 생김

### 💫 배열

```
let fruits = ['사과', '포도', '오렌지']

// push 처리가 된다.
fruits = [...fruits, '딸기']

// unshift 처리가 된다.
fruits = ['딸기', ...fruits]
```

#### fruits와 fruits2 합치고 싶을 때 ?

- concat 사용
- ... 기법 사용

```
let fruits2 = ['파인애플', '한라봉', '샤인머스켓']

let combinedFruits = fruits.concat(fruits2)

combinedFruits = [...fruits, ...fruits2]
```

만약 중간에 다른 값을 추가하고 싶다면

```
combinedFruits = [...fruits, '사과', ...fruits2]
```

이렇게 추가가 가능하다.

## 1. 삼항연산자를 사용하여 깔끔하게 작성해보자

```
function getResult(score) {

 let result;

 if(score > 5) {
 	result = "👍";
  } else if (score <= 5) {
    result = "👎";
  }
  return result;
```

이렇게 긴 문장의 if문을

```
function getResult(score) {
	return score > 5 ? "👍" : "👎";
}
```

이렇게 삼항연산자를 사용해서 작성해볼 수 있다.

<br />

## nullish 방식 (??)

```
function printMsg(text) {
	let msg = text;

    if (text == null || text == undefined) {
    	msg = "hello";
    }

    console.log(msg);
}
```

이 코드는 (??) nullish 방법을 사용해서 단축시킬 수 있다.
이 연산자는 👉 null이나 undefined인 경우 👈를 표현한다.

```
function printMsg(text) {
	const msg = text ?? 'hello';
     console.log(msg);
}
```

여기서 default 파라미터값은 undefined 일 때만 반환이 된다.

```
function printMsg(text="hello") {
	console.log(text);
}

printMsg('hello')
printMsg(undefined)
printMsg(null)
```

이런 경우에 파라미터 값에 값이 있다면 그 값이 출력되고, undefined면 기본값인 hello가 출력된다. 그리고 null이라면 그냥 null을 반환해준다.

## 3. OR 연산자 (||)

```
a || b
```

false인 경우에는 모두 오른쪽 문장이 실행된다.

false로 취급하는 값

- false
- " " (빈 문자열)
- undefined
- null
- 0
- -0
- NaN
