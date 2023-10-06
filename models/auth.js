const mongoose = require('mongoose');

const auth = new mongoose.Schema({
    usn:{
        type:String,
       
    },
    dob:{
        type:String,
        
    },
    name:{
        type:String,
       
    }
})
const Auth = mongoose.model('Auth', auth);
module.exports=Auth;