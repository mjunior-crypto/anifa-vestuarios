const Product = require('../models/Product');

const obterProdutos = async (req, res) => {
    try {
        const { categoria, pagina = 1, limite = 12, busca } = req.query;
        const filtro = {};
        if (categoria && categoria !== 'todos') {
            filtro.categoria = categoria;
        }
        if (busca) {
            filtro.$or = [{ nome: { $regex: busca, $options: 'i' } }, { descricao: { $regex: busca, $options: 'i' } }];
        }
        const skip = (pagina - 1) * limite;
        const produtos = await Product.find(filtro).limit(parseInt(limite)).skip(skip).sort({ criadoEm: -1 });
        const total = await Product.countDocuments(filtro);
        res.json({ success: true, total, pagina: parseInt(pagina), limite: parseInt(limite), produtos });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const obterProduto = async (req, res) => {
    try {
        const produto = await Product.findById(req.params.id);
        if (!produto) {
            return res.status(404).json({ success: false, message: 'Produto nao encontrado' });
        }
        res.json({ success: true, produto });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const criarProduto = async (req, res) => {
    try {
        const produto = await Product.create(req.body);
        res.status(201).json({ success: true, message: 'Produto criado!', produto });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { obterProdutos, obterProduto, criarProduto };