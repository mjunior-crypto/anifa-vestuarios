const express = require('express');
const router = express.Router();
const { processarPagamento, obterIntencaoPagamento } = require('../controllers/paymentController');

router.post('/processar', processarPagamento);
router.get('/intencao', obterIntencaoPagamento);

module.exports = router;