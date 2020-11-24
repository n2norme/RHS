const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const Maps = require('../../models/Maps');




router.get('/:name/points',  async (req,res) => {
    

    try {

        const map =  await Maps.find({name: req.params.name}).populate("points");  
        res.send(map);
        
    } catch (err) {

        console.log(err);

        
    }
 });

router.post('/', [
    check('name', 'Please enter the name of the Map').exists(),
    check('center','Location is required').exists()
], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {name, center,points} = req.body;

    try {

        const newMap = new Maps({
            name,
            center,
            points
        });

        await newMap.save();
        await res.status(200).send('New map added to the database');

        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

});

module.exports = router;