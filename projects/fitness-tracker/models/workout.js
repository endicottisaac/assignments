const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    exercise: {
        type: String,
        required: true,
      },
      sets: {
        type: Number,
        required: true,
      },
      reps: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model("Workouts", workoutSchema)