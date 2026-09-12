const express = require('express');
const router = express.Router();

router.post('/upload', (req, res) => {
    res.json({ success: true, message: 'Upload simulado', url: 'https://via.placeholder.com/300' });
});

module.exports = router;