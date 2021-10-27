const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {   email:String,
        given_name:String,
        family_name:String,
        picture:String,
        gid:{
            type:String,
            required:true,
            unique:true,
            immutable:true,
        },
        newuser: {
            type:Boolean,
            required:true
        },
       
    },
    {timestamps:true}
)

module.exports.User = mongoose.model('user',userSchema);
