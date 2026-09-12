const express = require('express');
const router = express.Router();
const { obterProdutos, obterProduto, criarProduto } = require('../controllers/productController');

router.get('/', obterProdutos);
router.get('/:id', obterProduto);
router.post('/', criarProduto);

module.exports = router;