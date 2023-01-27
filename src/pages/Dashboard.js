import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { tokenContext } from "../context/TokenContext";

const Dashboard = () => {
    const { userId } = useParams();

    const { currentUser, fetchUserById, deleteCurrentUser } =
        useContext(tokenContext);

    useEffect(() => {
        fetchUserById(userId);
    }, [userId, fetchUserById]);

    return (
        <section id="profile">
            <h1>PROFILE</h1>
            {currentUser.isAdmin && <span>Hello Admin</span>}
            <h3>
                <span>name : </span>
                <span>
                    {currentUser.isReady &&
                        currentUser.firstName + " " + currentUser.lastName}
                </span>
            </h3>
            <h3>
                <span>email : </span>
                <span>{currentUser.isReady && currentUser.email}</span>
            </h3>
            <div className="">
                <button className="primary hover-anmiation">
                    Update Profile
                </button>
                <button
                    className="primary hover-anmiation"
                    onClick={deleteCurrentUser}
                >
                    Delete Profile
                </button>
            </div>
        </section>
    );
};

export default Dashboard;
