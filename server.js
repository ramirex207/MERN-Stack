const express = require('express');
const conexion = require('./conexion');

const app = express();

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

conexion.then(() => {
  console.log('Conexión establecida con la base de datos');
}).catch((error) => {
  console.error('Error al conectar con la base de datos', error);
});
