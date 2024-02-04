import { useEffect, useState } from "react";

const UsersTwo = () => {
  const [userList, setUserList] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserList(data.map((user: { name: string }) => user.name)))
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {error && <p>{error}</p>}
      <ul>
        {userList &&
          userList.map((user) => <li key={user}>{user}</li>)}
      </ul>
      </div>
  );
}

export default UsersTwo;
