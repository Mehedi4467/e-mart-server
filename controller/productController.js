const postProduct =async(req,res,next)=>{
    try{
        res.send(res.body);
    }
    catch(err){
console.log(err);
    }
};

const getProduct = async(req,res,next)=>{
    res.send("yes")
}

module.exports = {
    postProduct,
    getProduct
 }