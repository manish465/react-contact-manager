import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { tokenContext } from "../context/TokenContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setToken } = useContext(tokenContext);

    const navigate = useNavigate();

    const handleSignIn = () => {
        const data = {
            email,
            password,
        };

        axios
            .post("http://localhost:8000/api/v1/user/signin", data)
            .then(({ data }) => {
                if (data.code === 200) {
                    setToken(data.token);
                    alert(data.msg);
                    navigate(`/user/${data.id}/dashboard`);
                } else alert(data.msg);
            })
            .catch((err) => alert(err.message));
    };

    return (
        <section className="user login">
            <h1>User Login</h1>
            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className="button-group">
                <Link to="/register">
                    <button className="secondary hover-anmiation">
                        Register
                    </button>
                </Link>
                <button
                    className="primary hover-anmiation"
                    onClick={handleSignIn}
                >
                    Login
                </button>
            </div>
        </section>
    );
};

export default Login;
