const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');


router.get('/dashboard', auth, (req,res) => {
   // try {
        
    res.send("private route");



   // } catch (err) {
        
        //console.error(err.message);
        //res.status(500).send('Server error');



   // }
});

module.exports = router;