const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const Contact = require('../../models/Contact');


router.post('/', [
    check('firstname', 'Firstname is required').not().isEmpty(),
    check('lastname', 'Lastname is required').not().isEmpty(),
    check('email', 'Please include a valide email').isEmail(),
    check('message', 'Please enter a message').not().isEmpty()
], (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    let newContact = new Contact(req.body);
    newContact.save()
    .then(item => {
        res.send("Ok, saved to database");
    })
    .catch(err => {
        res.status(400).send("Unable to save to database");
    });
    
});

module.exports = router;