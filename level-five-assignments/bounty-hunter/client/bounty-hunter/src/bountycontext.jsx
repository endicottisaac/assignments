import React, {useState, useEffect} from "react";
import axios from "axios";

const BountyContext = React.createContext();

function BountyContextProvider(props){
    const [bounties, setBounties] = useState([])

    const [formSubmitted, setFormSubmitted] = useState(false)

    const [edit, setEdit] = useState();

    const [newBounty, setNewBounty] = useState({
        fname: "",
        lname: "",
        living: false,
        bounty: "",
        type: "Jedi",
    });
    
    // const getBounty = () => {
    //     axios.get('/bounty')
    //         .then(res => {
    //             console.log(res.data)
    //             setBounties(prevBounties => res.data)
    //         })
    //         .catch(err => console.log(err))
    // }

    const onDelete = (bountyId) => {
        console.log(bountyId)
        axios.delete(`/bounty/${bountyId}`)
            .then(res => {
                // setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
                console.log(res)
                setFormSubmitted(true)
            })
            .catch(err => console.log(err))
    }

    const editBounty = (bountyId, edit) => {
        setEdit(edit)
        axios.put(`/bounty/${bountyId}`, edit)
            .then(res => {
                console.log(res)
                setFormSubmitted(true)
            })
            .catch(err => console.log(err))
    }

    const addBounty = (newBounty) => {
        axios.post("/bounty", newBounty)
            .then((res) => {
                console.log(res.data);
                setFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newBounty);
        addBounty(newBounty);
        setNewBounty({
            fname: "",
            lname: "",
            living: false,
            bounty: "",
            type: "Jedi",
        });
    };


    useEffect(() => {
        axios.get('/bounty')
                .then(res => {
                    console.log(res.data)
                    setBounties(prevBounties => res.data)
                })
                .catch(err => console.log(err))
            setFormSubmitted(false)
        }, [formSubmitted])

    return (
        <BountyContext.Provider value={{
            bounties: bounties,
            onDelete: onDelete,
            editBounty: editBounty, 
            addBounty: addBounty,
            newBounty: newBounty,
            handleSubmit: handleSubmit,
            setNewBounty: setNewBounty
        }}
        
        >
            {props.children}
        </BountyContext.Provider>
    )
}

export {BountyContext, BountyContextProvider}