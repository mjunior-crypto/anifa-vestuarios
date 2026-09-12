const express = require('express');
const router = express.Router();
const { obterCarrinho, adicionarAoCarrinho, removerDoCarrinho } = require('../controllers/cartController');

router.get('/', obterCarrinho);
router.post('/adicionar', adicionarAoCarrinho);
router.post('/remover', removerDoCarrinho);

module.exports = router;