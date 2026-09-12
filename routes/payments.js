const express = require('express');
const router = express.Router();

router.post('/processar', (req, res) => {
    res.json({ success: true, message: 'Pagamento simulado com sucesso' });
});

router.get('/intencao', (req, res) => {
    res.json({ success: true, clientSecret: 'pi_test_1234567890' });
});

module.exports = router;