
const getUser = async (req, res,next) => {
    const user = {
        name:"Md.Mehedi Hassan",
        age:22,
    }

    res.send(user);
}


module.exports = {
   getUser
}
