const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
        fname: {
            type: String,
            required: true
        }, 
        lname: {
            type: String,
            required: true
        }, 
        living: {
            type: Boolean,
            required: true
        }, 
        bounty: {
            type: Number,
            required: true
        }, 
        type: {
            type: String,
            required: true
        }
})


module.exports = mongoose.model("Bounties", bountySchema)

//fname: "Luke", lname: "Skywalker", living: true, bounty: 1000000000, type: "Jedi"