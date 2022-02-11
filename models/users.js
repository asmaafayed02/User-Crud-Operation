const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:[true,'name is required'],
            trim:true,
            maxLength:[20,'name is too long and must be less than 20 characters']

        },
        email:{
            type:String,
            required:[true,'email is required'],
            trim:true,
        },
        password:{
            type:String,
            required:[true,'password is required'],
            minlength:[6,'password is too short']
        }
})
module.exports = mongoose.model('User',userSchema);