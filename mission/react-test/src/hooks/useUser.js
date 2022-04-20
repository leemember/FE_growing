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
