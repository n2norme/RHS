const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    date:{
        type: Date,
        default: Date.now
    },
    message:{
        type:String,
        required:true
    }
});

module.exports = Contact = mongoose.model('contact', ContactSchema);