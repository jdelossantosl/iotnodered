const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

const url = 'http://delossantos.tech:1880'


router.get('/luz', function (req,res,next){

    fetch(url+'/stateluz') 
        .then(res => res.json())
        .then(json=> {
            console.log(json);
            res.render('luz',{json});
        })
});

router.get('/encenderluz', function (req,res,next){

    fetch(url+'/onoffluz?luz=true') 
        .then(res => res.json())
        .then(json=> {
            console.log(json);
            res.render('luz',{json});
        })
});

router.get('/apagarluz', function (req,res,next){

    fetch(url+'/onoffluz?luz=false') 
        .then(res => res.json())
        .then(json=> {
            console.log(json);
            res.render('luz',{json});
        })
});
/*
router.post('/enviarluz', function (req,res,next) {
    
    
    fetch(url+'/onoffluz', {
        method: 'POST', 
        body: 'false',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log(response);
        res.render('luz');
    }
    );

} )
*/
module.exports = router;