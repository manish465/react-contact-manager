import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignIn = () => {
        const data = {
            email,
            password,
        };

        axios
            .post("http://localhost:8000/api/v1/user/signin", data)
            .then((res) => {
                console.log(res.data);
                navigate(`/user/${res.data.id}/dashboard`);
            })
            .catch((err) => console.log(err.message));
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
