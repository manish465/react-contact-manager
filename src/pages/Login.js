import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <section className="user login">
                <h1>User Login</h1>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <div className="button-group">
                    <Link to="/register">
                        <button className="secondary hover-anmiation">
                            Register
                        </button>
                    </Link>
                    <button className="primary hover-anmiation">Login</button>
                </div>
            </section>
        </>
    );
};

export default Login;
