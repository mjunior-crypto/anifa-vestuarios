const Cart = require('../models/Cart');
const Product = require('../models/Product');

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

        const item = carrinho.itens.find(i => i.produto.toString() === produtoId && i.tamanho === tamanho);
        if (item) {
            item.quantidade += quantidade;
        } else {
            carrinho.itens.push({ produto: produtoId, quantidade, tamanho, cor });
        }

        carrinho.atualizadoEm = new Date();
        await carrinho.save();
        await carrinho.populate('itens.produto');

        res.json({ success: true, message: 'Produto adicionado ao carrinho', carrinho });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const removerDoCarrinho = async (req, res) => {
    try {
        const { usuarioId, produtoId } = req.body;

        const carrinho = await Cart.findOne({ usuario: usuarioId });
        if (!carrinho) {
            return res.status(404).json({ success: false, message: 'Carrinho não encontrado' });
        }

        carrinho.itens = carrinho.itens.filter(i => i.produto.toString() !== produtoId);
        await carrinho.save();
        await carrinho.populate('itens.produto');

        res.json({ success: true, message: 'Produto removido do carrinho', carrinho });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { obterCarrinho, adicionarAoCarrinho, removerDoCarrinho };