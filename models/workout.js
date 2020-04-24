const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: {
        type: String,
        required: false
      },
    name: {
        type: String,
        required: false
      },
    duration: {
        type: Number,
        required: false
      },
    weight: {
        type: Number,
        required: false
      },
    reps: {
        type: Number,
        required: false
      },
    sets: {
        type: Number,
        required: false
      },
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
      {
        type: String
      }
    ]
});

const Workout = mongoose.model('workout', WorkoutSchema);


module.exports = Workout;