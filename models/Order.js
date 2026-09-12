const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    numeroOrdem: {
        type: String,
        unique: true,
        default: () => 'ORD-' + Date.now()
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    itens: [{
        produto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantidade: { type: Number, required: true },
        preco: { type: Number, required: true },
        tamanho: String,
        cor: String
    }],
    total: {
        type: Number,
        required: true
    },
    subtotal: Number,
    frete: { type: Number, default: 0 },
    status: {
        type: String,
        enum: ['pendente', 'confirmada', 'processando', 'enviada', 'entregue', 'cancelada'],
        default: 'pendente'
    },
    pagamento: {
        metodo: {
            type: String,
            enum: ['cartao', 'pix', 'boleto'],
            required: true
        },
        status: {
            type: String,
            enum: ['pendente', 'aprovado', 'rejeitado'],
            default: 'pendente'
        },
        stripePaymentId: String
    },
    entrega: {
        endereco: {
            rua: String,
            numero: String,
            bairro: String,
            cidade: String,
            estado: String,
            cep: String
        },
        rastreamento: String
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema);