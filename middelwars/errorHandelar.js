const errorHandelar = (err,req,res,next) => {
    return res.status(500).send({err})
}
module.exports = errorHandelar