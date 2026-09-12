const express = require('express');
const router = express.Router();

router.get('/usuarios', (req, res) => {
    res.json({ success: true, message: 'Usuarios endpoint' });
});

module.exports = router;