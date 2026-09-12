const express = require('express');
const router = express.Router();
const { criarPedido, obterPedidos, obterPedido } = require('../controllers/orderController');

router.post('/', criarPedido);
router.get('/', obterPedidos);
router.get('/:id', obterPedido);

module.exports = router;