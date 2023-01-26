import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <h1 className="hover-anmiation">CONTACT MANAGER</h1>
            </Link>
            <div>
                <Link to="/login">
                    <button className="secondary hover-anmiation">Login</button>
                </Link>
                <Link to="/register">
                    <button className="primary hover-anmiation">
                        Register
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
