const User = require('../models/User');
const jwt = require('jsonwebtoken');

const gerarToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
};

const registro = async (req, res) => {
    try {
        const { nome, email, senha, confirmarSenha } = req.body;

        if (!nome || !email || !senha || !confirmarSenha) {
            return res.status(400).json({ success: false, message: 'Por favor, preencha todos os campos' });
        }

        if (senha !== confirmarSenha) {
            return res.status(400).json({ success: false, message: 'As senhas não correspondem' });
        }

        let usuario = await User.findOne({ email });
        if (usuario) {
            return res.status(400).json({ success: false, message: 'Este email já está registrado' });
        }

        usuario = await User.create({ nome, email, senha });
        const token = gerarToken(usuario._id);

        res.status(201).json({
            success: true,
            message: 'Usuário registrado com sucesso!',
            token,
            usuario: { id: usuario._id, nome: usuario.nome, email: usuario.email, tipo: usuario.tipo }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ success: false, message: 'Por favor, forneça email e senha' });
        }

        let usuario = await User.findOne({ email }).select('+senha');
        if (!usuario) {
            return res.status(401).json({ success: false, message: 'Email ou senha incorretos' });
        }

        const senhaValida = await usuario.compararSenha(senha);
        if (!senhaValida) {
            return res.status(401).json({ success: false, message: 'Email ou senha incorretos' });
        }

        const token = gerarToken(usuario._id);
        res.json({
            success: true,
            message: 'Login realizado com sucesso!',
            token,
            usuario: { id: usuario._id, nome: usuario.nome, email: usuario.email, tipo: usuario.tipo }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const verificarToken = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ success: false, message: 'Token não fornecido' });
        }

        const decodificado = jwt.verify(token, process.env.JWT_SECRET);
        const usuario = await User.findById(decodificado.id);

        if (!usuario) {
            return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
        }

        res.json({ success: true, usuario: { id: usuario._id, nome: usuario.nome, email: usuario.email, tipo: usuario.tipo } });
    } catch (error) {
        res.status(401).json({ success: false, message: 'Token inválido' });
    }
};

module.exports = { registro, login, verificarToken };