const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Por favor, forneça um nome de produto'],
        trim: true
    },
    descricao: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: [true, 'Por favor, forneça um preço'],
        min: 0
    },
    precoOriginal: Number,
    categoria: {
        type: String,
        enum: ['infantil', 'adolescente', 'adulto', 'senior'],
        required: true
    },
    imagens: [{
        url: String,
        publicId: String,
        principal: { type: Boolean, default: false }
    }],
    tamanhos: [{
        tamanho: String,
        estoque: { type: Number, default: 0 }
    }],
    cores: [String],
    material: String,
    marca: String,
    avaliacao: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    numAvaliacoes: {
        type: Number,
        default: 0
    },
    emEstoque: {
        type: Boolean,
        default: true
    },
    destaque: {
        type: Boolean,
        default: false
    },
    promocao: {
        ativa: { type: Boolean, default: false },
        desconto: { type: Number, default: 0 }
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);