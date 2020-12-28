const express = require('express');
const conectarDB = require('./config/db');

// Creación del servidor
const app = express();

const PORT = process.env.PORT || 4000;

// Conecta a la base de datos
conectarDB();

// Inicia app
app.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
