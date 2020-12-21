const express = require('express');

// Creación del servidor
const app = express();

const PORT = process.env.PORT || 4000;

// Inicia app
app.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
