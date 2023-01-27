import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const tokenContext = createContext();

const TokenContext = ({ children }) => {
    const [token, setToken] = useState("");
    const [isAuthenticate, setIsAuthenticate] = useState(false);

    const navigate = useNavigate();

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

    return (
        <tokenContext.Provider
            value={{ token, isAuthenticate, handleSignIn, handleLogout }}
        >
            {children}
        </tokenContext.Provider>
    );
};

export default TokenContext;
