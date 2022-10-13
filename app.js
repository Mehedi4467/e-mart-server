//external import
const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();



//external import 

const { notFoundHandelar, errorHandler } = require('./middleware/common/errorHandler');
const userRouter = require("./routers/v1/userRouter");
const productRouter = require('./routers/v1/productRouter');



app.use(express.json())
app.use(cors());


// database connection 
mongoose.connect(process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("database connected")
})
.catch((err) => console.log(err))



// routing
app.use('/api/v1/user',userRouter);
app.use('/api/v1/product',productRouter);


//404 error
app.use(notFoundHandelar);

// main error handler
app.use(errorHandler);


const port = process.env.PORT || 8000

app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server is running")
    }
})

