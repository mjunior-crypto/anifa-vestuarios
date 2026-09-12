const express = require('express');
const router = express.Router();

router.post('/processar', (req, res) => {
    res.json({ success: true, message: 'Pagamento ok' });
});

router.get('/intencao', (req, res) => {
    res.json({ success: true, clientSecret: 'test' });
});

module.exports = router;