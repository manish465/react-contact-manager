import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const handleSignUp = () => {
        if (!password.match(passwordAgain)) {
            console.log("Invelid User");
        }

        const data = {
            firstName,
            lastName,
            email,
            password,
            role: "normal",
        };

        axios
            .post("http://localhost:8000/api/v1/user/signup", data)
            .then((res) => {
                console.log(res.data.msg);
            })
            .catch((err) => console.log(err.message));
    };

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
                    onClick={handleSignUp}
                >
                    Register
                </button>
            </div>
        </section>
    );
};

export default Register;
