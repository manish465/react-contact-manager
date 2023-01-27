import axios from "axios";
import { useContext, useEffect, useState } from "react";
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
                console.log(data.users);
            })
            .catch((err) => alert(err.message));
    }, [currentUser.id]);

    return (
        <section className="my-contacts">
            <h1>My Contacts</h1>
            <div className="conatct-list"></div>
            <button className="hover-anmiation">ADD CONTACT</button>
        </section>
    );
};

export default Contacts;
