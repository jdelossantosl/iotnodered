const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

const url = 'http://delossantos.tech:1880'


router.get('/co2', function (req,res,next){

    fetch(url+'/stateco2') 
        .then(res => res.json())
        .then(json=> {
            console.log(json);
            res.render('co2',{json});
        })
});
module.exports = router;