const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const Points = require('../../models/Points');
const Maps = require('../../models/Maps');





router.get('/',  async (req,res) => {
    

    try {

        const points =  await Points.find({});  // Get all points of the database
        res.send(points);
        
    } catch (err) {

        console.log(err);

        
    }
 });

// Add a point to a map, by giving the ID of the map in the Database.

router.post('/:id', [ 
    check('name', 'Please enter the name of the point').exists(), 
    check('geometry','Coordinates are required').exists()
], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {name, geometry} = req.body;
    const mapId = req.params.id;


    try {

        
        
        const newPoint = new Points({
            name,
            geometry,
            map:mapId
            
            
        });
        
        await newPoint.save();
        await Maps.updateOne({_id:mapId}, {$push:{points:[newPoint]}}); // Add the new point to the array of points
        await res.status(200).send("New point added to the map in database");
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

});

module.exports = router;