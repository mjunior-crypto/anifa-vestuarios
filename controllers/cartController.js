const Cart = require('../models/Cart');

const obterCarrinho = async (req, res) => {
    try {
        const { usuarioId } = req.query;
        let carrinho = await Cart.findOne({ usuario: usuarioId }).populate('itens.produto');
        if (!carrinho) {
            carrinho = await Cart.create({ usuario: usuarioId, itens: [] });
        }
        res.json({ success: true, carrinho });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const adicionarAoCarrinho = async (req, res) => {
    try {
        const { usuarioId, produtoId, quantidade, tamanho, cor } = req.body;
        let carrinho = await Cart.findOne({ usuario: usuarioId });
        if (!carrinho) {
            carrinho = await Cart.create({ usuario: usuarioId, itens: [] });
        }
        carrinho.itens.push({ produto: produtoId, quantidade, tamanho, cor });
        await carrinho.save();
        await carrinho.populate('itens.produto');
        res.json({ success: true, carrinho });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const removerDoCarrinho = async (req, res) => {
    try {
        const { usuarioId, produtoId } = req.body;
        const carrinho = await Cart.findOne({ usuario: usuarioId });
        carrinho.itens = carrinho.itens.filter(i => i.produto.toString() !== produtoId);
        await carrinho.save();
        res.json({ success: true, carrinho });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { obterCarrinho, adicionarAoCarrinho, removerDoCarrinho };