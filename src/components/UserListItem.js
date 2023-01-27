import { useContext } from "react";
import { tokenContext } from "../context/TokenContext";

const UserListItem = ({ name, email, userId }) => {
    const { deleteUserById } = useContext(tokenContext);

    return (
        <div className="user-manager">
            <h3>{name}</h3>
            <h3>{email}</h3>
            <button
                className="hover-anmiation"
                onClick={() => deleteUserById(userId)}
            >
                DEL
            </button>
        </div>
    );
};

export default UserListItem;
