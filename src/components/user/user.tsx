import { UserProps } from './user.types';


const Users = ({ users }: UserProps) => {
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
