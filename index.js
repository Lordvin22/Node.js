const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://ive:bases1@ds143143.mlab.com:43143/ive-mongoose');

const app = express();
app.use(bodyParser.json());

const ruta = require('./routes/personasRoutes');
ruta(app);
// require('./routes/personasRoutes')(app);

app.get('/', (req, res) => {
	res.send({ mensaje: 'hola Ive'});
})



app.listen(5000);