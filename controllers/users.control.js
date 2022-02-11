const User = require('../models/users')
const asyncWrapper = require('../middelwars/async')
const getAllUsers=asyncWrapper(async(req, res)=>{
    const user =await User.find({})
    res.status(200).json({ user})
})
const getUser=asyncWrapper (async(req, res)=>{
    const {id:userId}= req.params
    const user =await User.findOne({_id:userId})
    if(!user){
        return res.status(404).json({message:'no user found'})
    }
    res.status(200).json({ user})
})
const createUser=asyncWrapper( async(req, res)=>{
    const user = await User.create(req.body)
    res.status(201).json({user})
})
const updateUser=asyncWrapper( async(req, res)=>{
    const {id:userId}= req.params
    const user = await User.findByIdAndUpdate({_id:userId},req.body,{
        new:true, runValidators:true,
    })
    if (!user){
        return res.status(404).json({message:'no user found'})
    }
    res.status(200).json({user})
})
const deleteUser=asyncWrapper( async(req, res)=>{
    const{id:userId}=req.params
    const user =await User.findOneAndDelete({_id:userId})
    if(!user) return res.status(404).json({message:'no user found with this id'})
    res.status(200).json({user})
})
module.exports ={
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    createUser,
}