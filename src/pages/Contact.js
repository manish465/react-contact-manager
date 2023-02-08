import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../config";
import { tokenContext } from "../context/TokenContext";

const Contact = () => {
    const [contact, setContact] = useState(null);
    const { currentUser } = useContext(tokenContext);
    const { contactId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(
                `${url}/api/v1/contacts/user/${currentUser.id}/contact/${contactId}`,
                {
                    headers: { Authorization: `Bearer ${currentUser.token}` },
                }
            )
            .then(({ data }) => {
                if (data.code === 200) setContact(data.contact);
                else console.log(data);
            })
            .catch(({ message }) => {
                alert(message);
                navigate("/");
            });
    }, [contactId, currentUser.id, currentUser.token, navigate]);

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
                    <h3>
                        <span>description : </span>
                        <span>
                            {contact ? contact.description : "feching....."}
                        </span>
                    </h3>
                    <h1>Numbers:</h1>
                    {contact.phoneNumbers.map((phoneNumber, key) => (
                        <div className="phone-number" key={key}>
                            <div>
                                {contact
                                    ? "+" + phoneNumber.countryCode
                                    : "feching....."}
                            </div>
                            <div>
                                {contact ? phoneNumber.number : "feching....."}
                            </div>
                            <div>
                                {contact ? phoneNumber.type : "feching....."}
                            </div>
                        </div>
                    ))}
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
