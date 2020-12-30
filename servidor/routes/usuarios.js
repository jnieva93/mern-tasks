const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

// Crea un usuario. Recordar que api/usuarios es base (equivale a /)
router.post('/', usuarioController.crearUsuario);

module.exports = router;
