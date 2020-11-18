const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const Contact = require('../../models/Contact');


router.post('/', [
    check('firstname', 'Firstname is required').not().isEmpty(),
    check('lastname', 'Lastname is required').not().isEmpty(),
    check('email', 'Please include a valide email').isEmail(),
    check('message', 'Please enter a message').not().isEmpty()
], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { firstname, lastname, email,message } = req.body;

    try {

        let newContact = new Contact({
            firstname,
            lastname,
            email,
            message

        });

        await newContact.save();
        await res.status(200).send('Contact form successfully saved to the database');
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error, could not save to the database');
    }
    
});

module.exports = router;