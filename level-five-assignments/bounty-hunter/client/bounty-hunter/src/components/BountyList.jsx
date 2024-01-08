import React, {useContext, useState} from "react";
import { Bounty } from "./Bounty";
import { BountyContext } from "../bountycontext";

const BountyList = () =>{
    const {bounties, onDelete, editBounty} = useContext(BountyContext)

    const theBounties = bounties.map(item => {
        return(
            <Bounty 
                fname={item.fname}
                lname={item.lname}
                bounty={item.bounty}
                living={item.living}
                type={item.type}
                onDelete={onDelete}
                editBounty={editBounty}
                key={item._id}
                id={item._id}
            />
        )
    })

    return (
        <>
            {theBounties}
        </>
    )
}

export {BountyList}