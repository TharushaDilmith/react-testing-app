import { useEffect, useState } from "react";
import { UserProps } from "./user.types";

const Users = ({ users }: UserProps) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLogged(true);
    }, 500);
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      <button onClick={() => setIsLogged(!isLogged)}>
        {isLogged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Users;
