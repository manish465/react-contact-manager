import { useContext } from "react";
import { Link } from "react-router-dom";
import { tokenContext } from "../context/TokenContext";

const NavBar = () => {
    const { currentUser, handleLogout } = useContext(tokenContext);

    return (
        <nav>
            <Link
                to={
                    currentUser.isAuthenticate
                        ? `/${currentUser.id}/dashboard`
                        : "/"
                }
            >
                <h1 className="hover-anmiation">CONTACT MANAGER</h1>
            </Link>
            <div>
                <Link to="/about">
                    <button className="secondary hover-anmiation">About</button>
                </Link>
                {currentUser.isAuthenticate && (
                    <Link to={`/${currentUser.id}/dashboard`}>
                        <button className="secondary hover-anmiation">
                            Dashboard
                        </button>
                    </Link>
                )}
                {currentUser.isAuthenticate && !currentUser.isAdmin && (
                    <Link to={`/${currentUser.id}/contacts`}>
                        <button className="secondary hover-anmiation">
                            Manage Contacts
                        </button>
                    </Link>
                )}
                {currentUser.isAuthenticate && currentUser.isAdmin && (
                    <Link to={`/${currentUser.id}/users`}>
                        <button className="secondary hover-anmiation">
                            Manage Users
                        </button>
                    </Link>
                )}
            </div>
            <div>
                {!currentUser.isAuthenticate && (
                    <Link to="/login">
                        <button className="secondary hover-anmiation">
                            Login
                        </button>
                    </Link>
                )}
                {!currentUser.isAuthenticate && (
                    <Link to="/register">
                        <button className="primary hover-anmiation">
                            Register
                        </button>
                    </Link>
                )}
                {currentUser.isAuthenticate && (
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
