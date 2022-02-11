const express = require('express')
const route = express.Router()
const {getAllUsers,getUser,createUser,updateUser,deleteUser} = require('../controllers/users.control')
route.get('/',getAllUsers)
route.post('/',createUser)
route.get('/:id',getUser)
route.patch('/:id',updateUser)
route.delete('/:id',deleteUser)
module.exports =route