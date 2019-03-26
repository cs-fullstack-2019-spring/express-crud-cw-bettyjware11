var express = require('express');
var router = express.Router();
var CrimeCollection = require('../models/crimesModel');

//Update by location
router.get('/updateLocation/:latitude/:street/:longitude', (req, res)=>{
    CrimeCollection.findOneAndUpdate({latitude:req.params.latitude, street:req.params.street,
    longitude:req.params.longitude}, {completed:true}, (error, results)=>{
        if(error) res.send(error);
        else res.send("Update complete!");
    } )
});

//Delete by persistent_id
router.get('/delete/:persistent_id', (req, res) => {
    CrimeCollection.deleteOne({persistent_id:req.params.persistent_id}, (error) =>{
        if (error) return console.log(error);
    });
    res.send("Done")
});




module.exports = router;