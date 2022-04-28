# 리액트가 제공하는 hook 이용해서 커스텀 hook 만들기

- hook을 만들 때는 'use'라는 단어를 붙히는 것이 좋다. (커스텀을 의미한다)
-

```
import { useState, useEffect } from "react";

export default function useUser(userId) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserApi(userId).then((data) => setUser(data));
  }, [userId]);

  return user;
}

const user1 = { name: "mike", age: 24 };
const user2 = { name: "jane", age: 30 };

function getUserApi(userId) {
  return new Promise((res) => {
    setTimeout(() => {
      res(userId % 2 ? user1 : user2);
    });
  });
}

```

- (useId) 이처럼 파라미터 값을 받아서 커스텀 훅을 만들어준다.
