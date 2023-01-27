import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const tokenContext = createContext();

const TokenContext = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({
        id: -1,
        token: "",
        firstName: "",
        lastName: "",
        email: "",
        isAdmin: false,
        isReady: false,
        isAuthenticate: false,
    });

    const navigate = useNavigate();

    const handleSignUp = (data) => {
        if (!data.password.match(data.passwordAgain)) {
            console.log("Invelid User");
        }

        axios
            .post("http://localhost:8000/api/v1/user/signup", {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
                role: "normal",
            })
            .then(({ data }) => {
                if (data.code === 200) {
                    navigate("/home");
                } else alert(data.msg);
            })
            .catch((err) => alert(err.message));
    };

    const handleSignIn = (data) => {
        axios
            .post("http://localhost:8000/api/v1/user/signin", data)
            .then(({ data }) => {
                if (data.code === 200) {
                    setCurrentUser((user) => ({
                        ...user,
                        token: data.token,
                        isAuthenticate: true,
                        isAdmin: data.role.match("admin") ? true : false,
                    }));
                    navigate(`/${data.id}/dashboard`);
                } else alert(data.msg);
            })
            .catch((err) => alert(err.message));
    };

    const fetchUserById = (id) => {
        axios
            .get(`http://localhost:8000/api/v1/user/${id}`, {
                headers: { Authorization: `Bearer ${currentUser.token}` },
            })
            .then(({ data }) => {
                setCurrentUser((user) => ({
                    ...user,
                    id: data.user.id,
                    firstName: data.user.firstName,
                    lastName: data.user.lastName,
                    email: data.user.email,
                    role: data.user.role,
                    isReady: true,
                }));
            })
            .catch((err) => {
                alert(err.message);
                navigate("/");
            });
    };

    const fetchAllUsers = () => {
        axios
            .get("http://localhost:8000/api/v1/user", {
                headers: { Authorization: `Bearer ${currentUser.token}` },
            })
            .then(({ data }) => {
                setUsers(data.users);
            })
            .catch((err) => {
                alert(err.message);
                navigate("/");
            });
    };

    const deleteUserById = (id) => {
        axios
            .delete(`http://localhost:8000/api/v1/user/${id}`, {
                headers: { Authorization: `Bearer ${currentUser.token}` },
            })
            .then(({ data }) => {
                alert(data.msg);
            })
            .catch((err) => alert(err.message));
    };

    const deleteCurrentUser = () => {
        deleteUserById(currentUser.id);
        handleLogout();
    };

    const handleLogout = () => {
        setCurrentUser({
            id: -1,
            token: "",
            firstName: "",
            lastName: "",
            email: "",
            isAdmin: false,
            isReady: false,
            isAuthenticate: false,
        });
        navigate("/");
    };

    return (
        <tokenContext.Provider
            value={{
                currentUser,
                users,
                handleSignIn,
                handleSignUp,
                handleLogout,
                fetchUserById,
                fetchAllUsers,
                deleteUserById,
                deleteCurrentUser,
            }}
        >
            {children}
        </tokenContext.Provider>
    );
};

export default TokenContext;
