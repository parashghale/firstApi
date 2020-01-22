const Express= require('express');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');


const url = 'mongodb://localhost:27017/mydb';
const connect = mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true
});

connect.then((db)=>{
    console.log("connected to mongodb");
},(err)=>{console.log(err);});

const testRoute= require('./routes/test.js')

const express = new Express();

express.get('/hello',(req,res)=>{res.send("sucessfull")})

express.use(bodyParser.json())
express.use('/test',testRoute);



express.listen(3000,'localhost',()=>{console.log("server has started")})

