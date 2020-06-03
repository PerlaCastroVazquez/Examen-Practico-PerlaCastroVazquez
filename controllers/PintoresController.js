let mongoose = require('mongoose');
//Unir a modelo
let Pintores = require('../models/Pintores');

let pintoresController = {};

/*LISTAR -> FIND()*/
pintoresController.list = (req, res)=>{
    Pintores.find({})
     .limit(20)
     .skip(0)
     .exec((err, pintor)=>{
        if(err){
            console.log('Error: ', err)
        }
        res.render('../views/index',{
            pintores : pintor,
            titulo : "Listado de Pintores",
            autor : 'Perla Arely Castro Vazquez',
            year: new Date().getDate()
        })
    })
};

module.exports = pintoresController;