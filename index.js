//Importamos dependencias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Constante para el valor de puerto
const PUERTO = process.env.PORT || 3000;

//Emplear rutas
let pintoresRouter = require('./routes/pintor');

//Sitio web y HBS
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

//Vamos a decirle a express la ruta a emplear
app.use('/', pintoresRouter);

/*conexion con MongoDB*/
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://Cascastro:Pg3eERRLAaRadRoe@castroperla-hn80x.mongodb.net/curso?retryWrites=true&w=majority';
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Conexion establecida');
})
.catch(err=> console.log(err));


/*Arrancar el servidor web*/
app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto...')
});
