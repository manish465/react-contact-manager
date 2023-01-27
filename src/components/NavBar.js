import { useContext } from "react";
import { Link } from "react-router-dom";
import { tokenContext } from "../context/TokenContext";

const NavBar = () => {
    const { isAuthenticate, handleLogout } = useContext(tokenContext);

    return (
        <nav>
            <Link to="/">
                <h1 className="hover-anmiation">CONTACT MANAGER</h1>
            </Link>
            <div>
                <button className="secondary hover-anmiation">About</button>
                {isAuthenticate && (
                    <button className="secondary hover-anmiation">
                        Dashboard
                    </button>
                )}
                {isAuthenticate && (
                    <button className="secondary hover-anmiation">
                        Contact
                    </button>
                )}
            </div>
            <div>
                {!isAuthenticate && (
                    <Link to="/login">
                        <button className="secondary hover-anmiation">
                            Login
                        </button>
                    </Link>
                )}
                {!isAuthenticate && (
                    <Link to="/register">
                        <button className="primary hover-anmiation">
                            Register
                        </button>
                    </Link>
                )}
                {isAuthenticate && (
                    <button
                        className="primary hover-anmiation"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
