const express = require('express');
const app = express();

app.use(express.static(__dirname + '/src/'));
const path = require('path');
const publicPath = path.join(__dirname, '/src');
const bootstrapPath = path.join(__dirname, '/node_modules/bootstrap');
const fontawesomePath = path.join(__dirname, '/node_modules/font-awesome');

app.use(express.static(publicPath));
app.use(express.static(bootstrapPath));
app.use(express.static(fontawesomePath))
app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});
