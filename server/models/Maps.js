const mongoose = require('mongoose');

const MapSchema = new mongoose.Schema({
    name:String,
    center:{
        coordinates:[Number],
    },
    points:[{type:mongoose.Schema.Types.ObjectId,ref:'points'}]
});


module.exports = Maps = mongoose.model('maps', MapSchema);