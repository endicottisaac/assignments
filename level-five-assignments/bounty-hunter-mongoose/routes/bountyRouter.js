const express = require('express')
const Bounty = require('../models/bounty')
const bounty = require('../models/bounty')
const bountyRouter = express.Router()

//get all
bountyRouter.get('/', async(req, res, next) => {
    try {
        const bounties = await Bounty.find()
        return res.status(200).send(bounties)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//get one 
bountyRouter.get('/:bountyID', async(req, res, next) => {
    try {
        const bounty = await Bounty.findOne({_id: req.params.bountyID})
        return res.status(200).send(bounty)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})


//post request
bountyRouter.post('/', async(req, res, next) => {
    try {
        const newBounty = new Bounty(req.body)
        const savedBounty = await newBounty.save()
        return res.status(200).send(`Successfully created new bounty: ${savedBounty}`) 
    } catch (err) {
        res.status(500)
        return next(err)
    }
 
})

//delete one

bountyRouter.delete('/:bountyID', async(req, res, next) => {
    try {
        const deletedBounty = await Bounty.findOneAndDelete({_id: req.params.bountyID})
        return res.status(200).send(`Successfully deleted bounty: ${deletedBounty}`)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//put request 
bountyRouter.put('/:bountyID', async(req, res, next) => {
    try {
        const updatedBounty = await Bounty.findOneAndUpdate(
            {_id: req.params.bountyID}, 
            req.body,
            {new: true}
        );
        return res.status(200).send(`Successfully updated bounty: ${updatedBounty}`)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = bountyRouter