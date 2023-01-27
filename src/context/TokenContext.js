import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const tokenContext = createContext();

const TokenContext = ({ children }) => {
    const [token, setToken] = useState("");
    const [isAuthenticate, setIsAuthenticate] = useState(false);
    const [currentUser, setCurrentUser] = useState({
        id: -1,
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        isReady: false,
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
                    alert(data.msg);
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
                    setToken(data.token);
                    setIsAuthenticate(true);
                    alert(data.msg);
                    navigate(`/user/${data.id}/dashboard`);
                } else alert(data.msg);
            })
            .catch((err) => alert(err.message));
    };

    const handleLogout = () => {
        setToken("");
        setIsAuthenticate(false);
        navigate("/");
    };

    const fetchUserById = (id) => {
        axios
            .get(`http://localhost:8000/api/v1/user/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(({ data }) => {
                setCurrentUser({
                    id: data.user.id,
                    firstName: data.user.firstName,
                    lastName: data.user.lastName,
                    email: data.user.email,
                    role: data.user.role,
                    isReady: true,
                });
            })
            .catch((err) => {
                alert(err.message);
                navigate("/");
            });
    };

    return (
        <tokenContext.Provider
            value={{
                token,
                isAuthenticate,
                currentUser,
                handleSignIn,
                handleSignUp,
                handleLogout,
                fetchUserById,
            }}
        >
            {children}
        </tokenContext.Provider>
    );
};

export default TokenContext;
