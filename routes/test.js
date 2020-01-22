const express = require('express');
var router= express.Router();
const testModel = require('../models/test');

router.route('/')
.get(async(req,res)=>{
    try{
        const data = await testModel.find({})
        res.json(data)
    }
    catch(err){
        res.json({message:err})
    }
})

.post(async (req,res)=>{
    const post = new testModel({
        name:req.body.name
    })
    try{
        const data = await post.save()
        res.json(data)
    }
    catch(err){
        res.json({message:err})
    }
})

module.exports=router;