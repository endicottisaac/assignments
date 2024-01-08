const express = require("express")
const thingsRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    },{
        name: "banana",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    }
]


//Get All 
thingsRouter.route("/") 
    .get((req, res) => {
        res.send(inventoryItems)
    })
    .post((req, res) => {
        const newItem = req.body
        newItem._id = uuidv4()
        inventoryItems.push(newItem)
        res.send("New item added to our inventory")
    })

//Get One 
thingsRouter.get("/:thingsId", (req, res) => {
    const thingsId = req.params.thingsId
    const foundThing = inventoryItems.find(thing => thing._id === thingsId)
    res.send(foundThing)
})

thingsRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredThings = inventoryItems.filter(thing => thing.type === type)
    res.send(filteredThings)
})


module.exports = thingsRouter