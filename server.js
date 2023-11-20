const express = require('express');
require('dotenv').config()
const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.json())  ///عشان اضمن انهم يوصولوا في شكل json عشان create and update.. if user input information
app.use('/api/workout' ,workoutRoutes) /// name of api as you like 

mongoose.connect(process.env.MONGO_URL).then(()=>{
   // const userSchmea = new mongoose.Schema({name:String,age:Number})
    //const userModal = mongoose.model('users',userSchmea)
   /*
    app.get('/user',(req,res)=>{
      userModal.find().then((u)=>{
        res.json(u)
      })
    })
      */
     
    
    
    app.listen(process.env.PORT, () => {
      console.log('listening on port', process.env.PORT)
    })
    })
    
    .catch((error) =>{
      console.log(error)
    })
/*
app.listen(process.env.PORT,() =>{
    console.log('lisyening on port ',process.env.PORT)  /// to create server always
})
*/