const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
   name:String,
   geometry:{
       type: {type:String, default:"Point"},
       coordinates:[Number]
   },
   map:{
       type: mongoose.Schema.Types.ObjectId,
       ref:"maps"
   }
})


module.exports = Points = mongoose.model('points', PointSchema);