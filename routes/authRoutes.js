const express = require('express');
const router = express.Router();
const { registro, login, verificarToken } = require('../controllers/authController');

router.post('/registro', registro);
router.post('/login', login);
router.get('/verificar', verificarToken);

module.exports = router;