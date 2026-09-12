const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    res.json({ success: true, user: { id: req.params.id, nome: 'Usuario' } });
});

router.put('/:id', (req, res) => {
    res.json({ success: true, message: 'Perfil atualizado' });
});

module.exports = router;