//external import
const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();



//external import 




app.use(express.json())
app.use(cors());


// database connection 

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("database connected")
})


// routing

//404 error

//


const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log("server is running")
})

