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

## 옵셔널 체이닝
