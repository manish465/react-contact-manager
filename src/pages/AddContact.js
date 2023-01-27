import { useState } from "react";

const AddContact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [jobDesignation, setJobDesignation] = useState("");
    const [description, setDescription] = useState("");
    const [phoneNumbers, setPhoneNumbers] = useState([
        {
            countryCode: "",
            number: "",
            type: "",
        },
    ]);

    const addPhoneNumberInputs = () => {
        setPhoneNumbers((nums) =>
            nums.push({
                countryCode: "",
                number: "",
                type: "",
            })
        );
    };

    return (
        <section className="add-contact">
            <h1>ADD CONTACT</h1>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Job Designation"
                value={jobDesignation}
                onChange={(e) => setJobDesignation(e.target.value)}
            />
            <textarea
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            {phoneNumbers.map((phoneNumber, key) => (
                <div className="phone-number-input" key={key}>
                    <input
                        type="text"
                        placeholder="Country Code"
                        className="country-code"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="number"
                    />
                    <input
                        type="text"
                        placeholder="Contact Type"
                        className="type"
                    />
                    {phoneNumbers.length !== 1 && (
                        <button className="remove secondary">REMOVE</button>
                    )}
                    <button
                        className="add secondary"
                        onClick={addPhoneNumberInputs}
                    >
                        ADD PHONE
                    </button>
                </div>
            ))}
            <button className="primary">SAVE CONTACT</button>
        </section>
    );
};

export default AddContact;
