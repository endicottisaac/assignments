import React, {useState} from "react";
// import { BountyContext } from "../bountycontext";

const Bounty = (props) => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(prevToggle => !prevToggle)
    }

    const [edit, setEdit] = useState({
        bounty: props.bounty, 
        fname: props.fname, 
        living: props.living,
        lname: props.lname,
        type: props.type
    });


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEdit((prevEdit) => {
            return {
                ...prevEdit,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    };

    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(props.id)
        props.editBounty(props.id, edit)
        handleToggle()
    }


    return (
        <>
            {
                toggle ? 
                    <div>
                      <h3>{props.fname} {props.lname}</h3>
                      <p>Force Alignment: {props.type}</p>
                      <p>{props.living ? 'Alive' : 'Dead'}</p>
                      <p>Current Bounty: {props.bounty} Credits</p>
                    <div>
                    <button onClick={handleToggle}>Edit</button>
                    <button onClick={() => props.onDelete(props.id)}>Delete</button>
                </div>
                    </div> 
                    :
                    <form onSubmit={handleSubmit}>
                        <h3>{props.fname} {props.lname}</h3>
                        <p>Force Alignment: {props.type}</p>
                        <p>{props.living ? 'Alive' : 'Dead'}</p>
                        <p>Current Bounty: {props.bounty} Credits</p>
                        <div>
                            <input
                                name="fname"
                                value={edit.fname}
                                onChange={handleChange}
                            />
                            <input
                                name="lname"
                                value={edit.lname}
                                onChange={handleChange}
                            />
                            <input
                                name="type"
                                value={edit.type}
                                onChange={handleChange}
                            />
                            <input
                                name="living"
                                type="checkbox"
                                checked={edit.living}
                                onChange={handleChange}
                            />
                            <input
                                name="bounty"
                                value={edit.bounty}
                                onChange={handleChange}
                            />
                            <button type="submit">Save</button>
                            <button onClick={handleToggle}>Cancel</button>
                        </div>
                    </form>
            }
        </>
    )
}

export {Bounty}

