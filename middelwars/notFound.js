const notFoundMiddleware=(req,res) => {
    return res.status(404).send('route not found')
}
module.exports = notFoundMiddleware