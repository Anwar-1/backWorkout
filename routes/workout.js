const express = require('express')
const router = express.Router()

const Workout = require('../model/workoutModel')
const { default: mongoose } = require('mongoose')
const {getWorkouts,getWorkout,createWorkout,updateWorkout,deleteWorkout} = require('../controllers/workoutController')

///get all work 
router.get('/',getWorkouts)

/// get a single workout
router.get('/:id',getWorkout)

/// post a new work 
router.post('/',createWorkout)

/// delete a workout
router.delete('/:id',deleteWorkout)

/// update a workout 
router.patch('/:id',updateWorkout)


module.exports = router