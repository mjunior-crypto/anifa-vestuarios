const User = require('../models/User');
const jwt = require('jsonwebtoken');

const gerarToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
};

const registro = async (req, res) => {
    try {
        const { nome, email, senha, confirmarSenha } = req.body;
        if (!nome || !email || !senha || !confirmarSenha) {
            return res.status(400).json({ success: false, message: 'Preencha todos' });
        }
        if (senha !== confirmarSenha) {
            return res.status(400).json({ success: false, message: 'Senhas diferentes' });
        }
        let usuario = await User.findOne({ email });
        if (usuario) {
            return res.status(400).json({ success: false, message: 'Email existente' });
        }
        usuario = await User.create({ nome, email, senha });
        const token = gerarToken(usuario._id);
        res.status(201).json({ success: true, token, usuario: { id: usuario._id, nome, email } });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        if (!email || !senha) {
            return res.status(400).json({ success: false, message: 'Credenciais necessarias' });
        }
        let usuario = await User.findOne({ email }).select('+senha');
        if (!usuario) {
            return res.status(401).json({ success: false, message: 'Invalido' });
        }
        const senhaValida = await usuario.compararSenha(senha);
        if (!senhaValida) {
            return res.status(401).json({ success: false, message: 'Invalido' });
        }
        const token = gerarToken(usuario._id);
        res.json({ success: true, token, usuario: { id: usuario._id, nome: usuario.nome, email: usuario.email } });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { registro, login };