const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bounties = [
    { fname: "Luke", lname: "Skywalker", living: true, bounty: 1000000000, type: "Jedi", _id: uuidv4() },
    { fname: "Darth", lname: "Vader", living: true, bounty: 1500000000, type: "Sith", _id: uuidv4() },
    { fname: "Obi-Wan", lname: "Kenobi", living: true, bounty: 800000000, type: "Jedi", _id: uuidv4() },
    { fname: "Emperor", lname: "Palpatine", living: true, bounty: 2000000000, type: "Sith", _id: uuidv4() },
    { fname: "Yoda", lname: "", living: true, bounty: 1200000000, type: "Jedi", _id: uuidv4() },
    { fname: "Count", lname: "Dooku", living: true, bounty: 900000000, type: "Sith", _id: uuidv4() },
    { fname: "Anakin", lname: "Skywalker", living: true, bounty: 1800000000, type: "Sith", _id: uuidv4() },
    { fname: "Mace", lname: "Windu", living: true, bounty: 950000000, type: "Jedi", _id: uuidv4() },
    { fname: "Kylo", lname: "Ren", living: true, bounty: 1200000000, type: "Sith", _id: uuidv4() },
    { fname: "Ahsoka", lname: "Tano", living: true, bounty: 750000000, type: "Jedi", _id: uuidv4() }
]

bountyRouter.route("/") 
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send("New bounty acquired")
    }) 
    
bountyRouter.delete("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        if (bountyIndex !== -1) {
            bounties.splice(bountyIndex, 1);
            res.send('Successfully deleted bounty');
        } else {
            res.status(404).send('Bounty not found');
        }
    })

bountyRouter.put("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const updatedObject = req.body
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        if (bountyIndex !== -1) {
            const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject)
            res.send(updatedBounty)
        } else {
            res.status(404).send('Bounty not found')
        }
})
    

module.exports = bountyRouter