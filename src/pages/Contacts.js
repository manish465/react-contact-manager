import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { tokenContext } from "../context/TokenContext";

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const { currentUser } = useContext(tokenContext);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/v1/contact/${currentUser.id}`, {
                headers: { Authorization: `Bearer ${currentUser.token}` },
            })
            .then(({ data }) => {
                setContacts(data.contacts);
            })
            .catch((err) => alert(err.message));
    }, [currentUser.id, currentUser.token]);

    return (
        <section className="my-contacts">
            <h1>My Contacts</h1>
            <div className="conatct-list"></div>
            <Link to={`/${currentUser.id}/contacts/add`}>
                <button className="hover-anmiation">ADD CONTACT</button>
            </Link>
        </section>
    );
};

export default Contacts;
