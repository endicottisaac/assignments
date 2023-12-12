import React, { useContext } from "react";
import { BountyContext } from "../bountycontext";

const Form = () => {
    const {
        newBounty,
        setNewBounty,
        handleSubmit,
    } = useContext(BountyContext);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewBounty((prevBounty) => {
            return {
                ...prevBounty,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="First Name"
                    type="text"
                    name="fname"
                    value={newBounty.fname}
                    onChange={handleChange}
                    required
                ></input>
                <input
                    placeholder="Last Name"
                    type="text"
                    name="lname"
                    value={newBounty.lname}
                    onChange={handleChange}
                    required
                ></input>
                <label htmlFor="living">Living:</label>
                <input
                    type="checkbox"
                    id="living"
                    name="living"
                    checked={newBounty.living}
                    onChange={handleChange}
                />
                <label htmlFor="type">Force Alignment:</label>
                <select name="type" id="type" onChange={handleChange}>
                    <option value="Jedi">Jedi</option>
                    <option value="Sith">Sith</option>
                </select>
                <input
                    type="number"
                    placeholder="Bounty Amount"
                    name="bounty"
                    value={newBounty.bounty}
                    onChange={handleChange}
                ></input>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Form;
