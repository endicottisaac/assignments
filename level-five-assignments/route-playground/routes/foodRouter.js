const express = require('express')
const Food = require('../models/food')
const foodRouter = express.Router()

// Get All
    // Get requests should return an empty array at first until you build the post request and add items to the DB

    // Callback

    foodRouter.post('/', (req, res, next) => {
        const newFood = new Food(req.body)
        newFood.save((err, savedFood) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedFood)
        })
    })

    foodRouter.post('/async', async(req, res, next) => {
        try {
            const newFood = new Food(req.body)
            const savedFood = await newFood.save()
            return res.status(200).send(savedFood)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })

    foodRouter.get('/', (req, res, next) => {
        Food.find((err, food) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(food)
        })
    })

    foodRouter.get('/async', async(req, res, next) => {
        try {
            const food = await Food.find()
            return res.status(200).send(food)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })


module.exports = foodRouter



