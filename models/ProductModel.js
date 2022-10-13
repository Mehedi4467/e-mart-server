// schema and model
const mongoose = require('mongoose');

const productSchama = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a name of this product"],
        trim:true,
        unique:[true,"Name must be unique"],
        minLength:[3,"Name must be at least 3 characters."],
        maxLength:[100,"name is too large"]
    },
    description:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        required:true,
        min:[0,"Price can't be Negative"],
    },
    unit:{
        type:String,
        required:true,
        enum:{
            value:["kg","litter","pcs"],
            message:"unit value can't be {VALUE}, must be kg/litter/pcs"
        },
    },
    quantity:{
        type:Number,
        required:true,
        min:[0,"quantity can't be Negative"],
        validate:{
            validator:(value)=>{
                const isInteger = Number.isInteger(value);
                if(isInteger){
                    return true
                }
                else{
                    return false
                }
            }
        },
        message:"Qunatity must be an integer"
    },
    status:{
        type:String,
        required:true,
        enum:{
            value:["in-stock","ut-of-stock","discontinued"],
            message:"status can't be {VALUE}",
        }
    },
    // suplier:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Spplier"
    // },
    // categories:[{
    //     name:{
    //         type:String,
    //         required:true
    //     },
    //     _id:mongoose.Schema.Types.ObjectId
    // }]
},{
    timestamps:true
});

// mogoose pattern 

// Schama -> Model -> Query

const Product = mongoose.model("Product",productSchama);

module.exports=Product;

