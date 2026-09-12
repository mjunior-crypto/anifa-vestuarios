const Order = require('../models/Order');

const criarPedido = async (req, res) => {
    try {
        const { usuarioId, itens, total, metodo } = req.body;
        if (!itens || itens.length === 0) {
            return res.status(400).json({ success: false, message: 'Carrinho vazio' });
        }
        const pedido = await Order.create({ usuario: usuarioId, itens, total, pagamento: { metodo } });
        res.status(201).json({ success: true, pedido });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const obterPedidos = async (req, res) => {
    try {
        const { usuarioId } = req.query;
        const pedidos = await Order.find({ usuario: usuarioId }).populate('itens.produto');
        res.json({ success: true, pedidos });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { criarPedido, obterPedidos };