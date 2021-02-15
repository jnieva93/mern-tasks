const express = require('express');
const conectarDB = require('./config/db');

// Creación del servidor
const app = express();

// Conecta a la base de datos
conectarDB();

// Habilita express.json
app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

// Importa rutas
app.use('/api/usuarios', require('./routes/usuarios'));

// Inicia app
app.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
