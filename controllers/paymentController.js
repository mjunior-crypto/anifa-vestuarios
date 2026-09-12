const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy');
const Order = require('../models/Order');

const processarPagamento = async (req, res) => {
    try {
        const { token, pedidoId, valor } = req.body;
        const charge = await stripe.charges.create({ amount: Math.round(valor * 100), currency: 'brl', source: token, description: `Pagamento do pedido ${pedidoId}` });
        const pedido = await Order.findByIdAndUpdate(pedidoId, { 'pagamento.status': 'aprovado', 'pagamento.stripePaymentId': charge.id, 'status': 'confirmada' }, { new: true });
        res.json({ success: true, message: 'Pagamento processado!', pedido });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const obterIntencaoPagamento = async (req, res) => {
    try {
        const { valor } = req.query;
        const paymentIntent = await stripe.paymentIntents.create({ amount: Math.round(valor * 100), currency: 'brl' });
        res.json({ success: true, clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { processarPagamento, obterIntencaoPagamento };