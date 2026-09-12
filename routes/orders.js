const express = require('express');
const router = express.Router();
const { criarPedido, obterPedidos } = require('../controllers/orderController');

router.post('/', criarPedido);
router.get('/', obterPedidos);

module.exports = router;