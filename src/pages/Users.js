import { useContext, useEffect } from "react";
import UserListItem from "../components/UserListItem";
import { tokenContext } from "../context/TokenContext";

const Users = () => {
    const { users, fetchAllUsers } = useContext(tokenContext);

    useEffect(() => {
        fetchAllUsers();
    }, [fetchAllUsers]);

    return (
        <section className="users-manager">
            <h1>Manage Users</h1>
            {users.length !== 0 && users.length === 1 ? (
                <h3>No Users</h3>
            ) : (
                users.map((user, key) =>
                    user.role !== "admin" ? (
                        <UserListItem
                            key={key}
                            name={user.firstName + " " + user.lastName}
                            email={user.email}
                            userId={user.id}
                        />
                    ) : null
                )
            )}
        </section>
    );
};

export default Users;
