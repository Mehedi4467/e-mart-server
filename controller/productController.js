const Product = require('.././models/ProductModel')

const postProduct =async(req,res,next)=>{
    try{
        const result = await Product.create(req.body);
        
        res.status(200).json({
            status:'success',
            message: 'Data inserted Sucessfully',
            data:result
        });
    }
    catch(err){
    res.status(400).json({
        status:'failed',
        message: 'Data is not inserted',
        error: err.message
    });
    }
};

const getProduct = async(req,res,next)=>{
    res.send("yes")
}

module.exports = {
    postProduct,
    getProduct
 }