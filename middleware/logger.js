function logger(req,res ,next){
    console.log("Request receiveded");
    next()
}
module.exports = logger;