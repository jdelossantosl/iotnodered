const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

const url = 'http://delossantos.tech:1880'

router.get('/temperatura', function (req,res,next){

    fetch(url+'/temperaturaPv') 
        .then(res => res.json())
        .then(json=> {
            console.log(json);
            res.render('temperatura',{json});
        })
});


module.exports = router;