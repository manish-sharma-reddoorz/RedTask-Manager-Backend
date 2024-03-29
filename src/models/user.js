const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        
        email: {
            type: String , 
            required: true
        },
        phone :{
           type: Number,
           required: true
        },

        password: {
            type: String, 
            required: true
        },
        cpassword : {
            type: String,
            required: true
        }
       
    },
    { timestamps: true }
)

const User = mongoose.model('User',userSchema)
module.exports = User;
