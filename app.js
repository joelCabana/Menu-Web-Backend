//requiere el modulo express para crear la ruta del servidor. 
//de esta manera vamos a recibir las peticions.
const express = require('express'); //funcion de procesar algo antes que termine (miderware)
const cors = require('cors');

//ejecutamos express
const app = express();

app.set('port',process.env.PORT || 3000); //definimos una variable con el numero de puerto PORT es variable de entorno

app.use(cors()); // escuchar las peticiones y mostralo por consolta
//empezamos a escuchar.
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/user',require('./routes/user.routes'));

module.exports = app; //exportar este modulo
