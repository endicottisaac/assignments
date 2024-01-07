const express = require('express')
const Workout = require('../models/workout')
const workoutRouter = express.Router()

// get all
workoutRouter.get('/', async(req, res, next) => {
    try {
        console.log(req.body)
        const workouts = await Workout.find()
        return res.status(200).send(workouts)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//get one 
workoutRouter.get('/:workoutID', async(req, res, next) => {
    try {
        const workout = await Workout.findOne({_id: req.params.workoutID})
        return res.status(200).send(workout)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// post request 
workoutRouter.post('/', async(req, res, next) => {
    try {
        const newWorkout = new Workout(req.body)
        const savedworkout = await newWorkout.save()
        return res.status(200).send(`Successfully created new log: ${savedworkout}`) 
    } catch (err) {
        res.status(500)
        return next(err)
    }
 
})

//delete request 
workoutRouter.delete('/:workoutID', async(req, res, next) => {
    try{
        const deletedWorkout = await Workout.findOneAndDelete({_id: req.params.workoutID})
        return res.status(200).send(deletedWorkout)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//put request 
workoutRouter.put('/:workoutID', async(req, res, next) => {
    try {
        const updatedWorkout = await Workout.findOneAndUpdate(
            {_id: req.params.workoutID},
            req.body,
            {new: true}
        );
        return res.status(200).send(updatedWorkout)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = workoutRouter