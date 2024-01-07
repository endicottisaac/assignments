const express = require('express')
const Inventory = require('../models/inventory')
const inventoryRouter = express.Router()


//get all
inventoryRouter.get('/', async(req, res, next) => {
    try {
        const inventory = await Inventory.find()
        return res.status(200).send(inventory)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//get one
inventoryRouter.get('/:inventoryID', async(req, res, next) => {
    try {
        const inventoryItem = await Inventory.findOne({ _id: req.params.inventoryID})
        return res.status(200).send(inventoryItem)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//post one
inventoryRouter.post('/', async(req, res, next) => {
    try {
        const newInventory = new Inventory(req.body)
        const savedInventory = await newInventory.save()
        return res.status(200).send(`Successfully created new inventory item: ${savedInventory}`)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//delete one
inventoryRouter.delete('/:inventoryID', async (req, res, next) => {
    try {
        const deletedInventory = await Inventory.findOneAndDelete({ _id: req.params.inventoryID })
        return res.status(200).send(`Successfully deleted: ${deletedInventory}`)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})


//put one
inventoryRouter.put('/:inventoryID', async(req, res, next) => {
    try {
        const updatedInventory = await Inventory.findOneAndUpdate(
            { _id: req.params.inventoryID },
            req.body,
            { new: true }
        );
        return res.status(200).send(`Successfully updated item: ${updatedInventory}`)
    } catch (err) {
        res.status(500) 
        return next(err)
    }
})

module.exports = inventoryRouter