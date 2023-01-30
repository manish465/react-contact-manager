import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { tokenContext } from "../context/TokenContext";

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const { currentUser } = useContext(tokenContext);

    useEffect(() => {
        axios
            .get(
                `http://localhost:8000/api/v1/contacts/user/${currentUser.id}`,
                {
                    headers: { Authorization: `Bearer ${currentUser.token}` },
                }
            )
            .then(({ data }) => setContacts(data.contacts))
            .catch((err) => alert(err.message));
    }, [currentUser.id, currentUser.token]);

    return (
        <section className="my-contacts">
            <h1>My Contacts</h1>
            <div className="conatct-list">
                {contacts.length !== 0 &&
                    contacts.map((contact, key) => (
                        <div className="conatct" key={key}>
                            <Link
                                to={`/user/${currentUser.id}/conatct/${contact.id}`}
                            >
                                <h2 className="hover-anmiation">
                                    {contact.firstName + " " + contact.lastName}
                                </h2>
                            </Link>
                            <h4>{contact.email}</h4>
                            <div className="button-group">
                                <button className="update">UPDATE</button>
                                <button className="delete">DELELE</button>
                            </div>
                        </div>
                    ))}
            </div>
            <Link to={`/user/${currentUser.id}/contacts/add`}>
                <button className="hover-anmiation">ADD CONTACT</button>
            </Link>
        </section>
    );
};

export default Contacts;
