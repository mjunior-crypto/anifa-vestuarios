const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    itens: [{
        produto: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantidade: { type: Number, required: true, min: 1 },
        tamanho: String,
        cor: String
    }],
    total: { type: Number, default: 0 },
    atualizadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);