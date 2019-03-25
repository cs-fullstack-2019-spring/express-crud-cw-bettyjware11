var express = require('express');
var router = express.Router();
var CrimeCollection = require('../models/CrimeCollection');


//find by Crime Street ID
router.get('/findBystreet_Id/:streeet_id', (req,res)=>{

    CrimeCollection.find({street_Id: req.params.street_id}, (errors, results)=>{
        if(errors) res.send(errors);
        else res.send(results);
    });
});


module.exports= router;