import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { tokenContext } from "../context/TokenContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { handleSignIn } = useContext(tokenContext);

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
                    onClick={() => handleSignIn({ email, password })}
                >
                    Login
                </button>
            </div>
        </section>
    );
};

export default Login;
