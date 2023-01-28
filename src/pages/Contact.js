import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { tokenContext } from "../context/TokenContext";

const Contact = () => {
    const [contact, setContact] = useState(null);
    const { currentUser } = useContext(tokenContext);
    const { contactId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(
                `http://localhost:8000/api/v1/contacts/user/${currentUser.id}/contact/${contactId}`,
                {
                    headers: { Authorization: `Bearer ${currentUser.token}` },
                }
            )
            .then(({ data }) => {
                if (data.code === 200) {
                    setContact(data.contact);
                } else {
                    console.log(data);
                }
            })
            .catch(({ message }) => {
                console.log(message);
            });
    }, [contactId, currentUser.id, currentUser.token]);

    return (
        <section id="profile">
            <h1>PROFILE</h1>
            {contact ? (
                <>
                    <h3>
                        <span>name : </span>
                        <span>
                            {contact.firstName + " " + contact.lastName}
                        </span>
                    </h3>
                    <h3>
                        <span>email : </span>
                        <span>{contact.email}</span>
                    </h3>
                    <h3>
                        <span>company name : </span>
                        <span>{contact.work.companyName}</span>
                    </h3>
                    <h3>
                        <span>job designation : </span>
                        <span>{contact.work.jobDesignation}</span>
                    </h3>
                    {contact.phoneNumbers.map((phoneNumber, key) => (
                        <div key={key}>
                            <h3>
                                <span>country code : </span>
                                <span>
                                    {contact
                                        ? phoneNumber.countryCode
                                        : "feching....."}
                                </span>
                            </h3>
                            <h3>
                                <span>number : </span>
                                <span>
                                    {contact
                                        ? phoneNumber.number
                                        : "feching....."}
                                </span>
                            </h3>
                            <h3>
                                <span>type : </span>
                                <span>
                                    {contact
                                        ? phoneNumber.type
                                        : "feching....."}
                                </span>
                            </h3>
                        </div>
                    ))}
                    <h3>
                        <span>country code : </span>
                        <span>
                            {contact ? contact.description : "feching....."}
                        </span>
                    </h3>
                </>
            ) : (
                ""
            )}
            <div className="button-group">
                <button className="secondary hover-anmiation">
                    Update Contact
                </button>
                <button className="secondary hover-anmiation">
                    Delete Contact
                </button>
            </div>
        </section>
    );
};

export default Contact;
