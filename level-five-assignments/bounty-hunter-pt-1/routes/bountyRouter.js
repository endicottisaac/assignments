const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bounties = [
    {fname: "Luke", lname: "Skywalker", living: true, bounty: 1000000000, type: "Jedi", _id: uuidv4() }
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


module.exports = bountyRouter