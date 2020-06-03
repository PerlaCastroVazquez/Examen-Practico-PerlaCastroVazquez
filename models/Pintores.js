const mongoose = require('mongoose');
//Crear schema (nuestra base de datos)

let Schema = mongoose.Schema;

//coleccion
let PintoresSchema = new Schema({
    nombre:{
        type: String, 
        required: [true, 'Requerimos el nombre']
    },
    corriente:{
        type: String,
        required: [true, 'Requerimos la corriente']
    },
    nacionalidad: {
        type: String
    },
    nacimiento: {
        type: String
    },
    pintura: {
        type:String
    }
});

module.exports = mongoose.model('Pintores', PintoresSchema);