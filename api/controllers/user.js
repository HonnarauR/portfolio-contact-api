const mongoose=require('mongoose');

const Contact = require('../models/user');

exports.contact =(req,res,next)=>{
    console.log("--------------------------------Inside Contact------------------------------------");

        const contact =new Contact({
            _id : new mongoose.Types.ObjectId(),
            name : req.body.name,
            email : req.body.email,
            work:req.body.work,
            message: req.body.message,
            time:req.body.time
        })
    
        contact.save()
        .then(result=>{
            res.status(201).json({
                message : "message Saved",
            })
        })
        .catch(err=>{
            res.status(500).json({
                message : "Unable to save information",
                error:err
            })
        })
}


