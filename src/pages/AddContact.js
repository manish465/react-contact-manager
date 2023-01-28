import axios from "axios";
import { useContext } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { tokenContext } from "../context/TokenContext";

const AddContact = () => {
    const { handleSubmit, control, register } = useForm();
    const { currentUser } = useContext(tokenContext);
    const { fields, append, remove } = useFieldArray({
        control,
        name: "phoneNumbers",
    });
    const navigate = useNavigate();

    const handleAddContact = (data) => {
        axios
            .post(
                `http://localhost:8000/api/v1/contacts/user/${currentUser.id}`,
                data,
                {
                    headers: { Authorization: `Bearer ${currentUser.token}` },
                }
            )
            .then(({ data }) => {
                alert(data.msg);
                navigate(`/user/${currentUser.id}/contacts`);
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <section className="add-contact">
            <h1>ADD CONTACT</h1>
            <input
                type="text"
                placeholder="First Name"
                {...register("firstName")}
            />
            <input
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
            />
            <input
                type="email"
                name="contact.email"
                placeholder="Email"
                {...register("email")}
            />
            <input
                type="text"
                placeholder="Company Name"
                {...register("companyName")}
            />
            <input
                type="text"
                placeholder="Job Designation"
                {...register("jobDesignation")}
            />
            <textarea
                type="text"
                placeholder="Description"
                {...register("description")}
            />
            {fields.map((field, key) => (
                <div className="phone-number-input" key={field.id}>
                    <input
                        type="text"
                        placeholder="Country Code"
                        className="country-code"
                        {...register(`phoneNumbers.${key}.countryCode`)}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="number"
                        {...register(`phoneNumbers.${key}.number`)}
                    />
                    <input
                        type="text"
                        placeholder="Contact Type"
                        className="type"
                        {...register(`phoneNumbers.${key}.type`)}
                    />
                    <button
                        className="remove secondary hover-anmiation"
                        onClick={() => remove(key)}
                    >
                        REMOVE
                    </button>
                </div>
            ))}
            <button
                className="remove secondary hover-anmiation"
                onClick={() =>
                    append({ countryCode: "", number: "", type: "" })
                }
            >
                ADD PHONE
            </button>
            <button
                className="primary hover-anmiation"
                onClick={handleSubmit((data) => handleAddContact(data))}
            >
                SAVE CONTACT
            </button>
        </section>
    );
};

export default AddContact;
