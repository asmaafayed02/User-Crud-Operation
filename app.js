const express = require('express')
const app = express()
const routes= require('./routes/users.route')
const port = process.env.PORT || 3000
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middelwars/notFound')
const errorHandler = require('./middelwars/errorHandelar')
//midelware
app.use(express.json())
//routes
app.use('/api/v1/users', routes)
app.use(notFound)
app.use(errorHandler)
const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log('listening on port '+port);
        })
    } catch (error) {
        console.log(error);
    }
}
start()