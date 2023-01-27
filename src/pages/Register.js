import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { tokenContext } from "../context/TokenContext";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const { handleSignUp } = useContext(tokenContext);

    return (
        <section className="user register">
            <h1>User Register</h1>
            <input
                type="text"
                placeholder="first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
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
            <input
                type="password"
                placeholder="password again"
                value={passwordAgain}
                onChange={(e) => setPasswordAgain(e.target.value)}
            />
            <div className="button-group">
                <Link to="/login">
                    <button className="secondary hover-anmiation">Login</button>
                </Link>
                <button
                    className="primary hover-anmiation"
                    onClick={() =>
                        handleSignUp({
                            firstName,
                            lastName,
                            email,
                            password,
                            passwordAgain,
                            role: "normal",
                        })
                    }
                >
                    Register
                </button>
            </div>
        </section>
    );
};

export default Register;
