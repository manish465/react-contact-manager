const UserListItem = ({ name, email, userId }) => {
    return (
        <div className="user-manager">
            <h3>{name}</h3>
            <h3>{email}</h3>
            <button>DEL</button>
        </div>
    );
};

export default UserListItem;
