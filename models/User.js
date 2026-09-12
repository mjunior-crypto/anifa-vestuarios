const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Por favor, forneça um nome'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Por favor, forneça um email'],
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Por favor, forneça um email válido']
    },
    senha: {
        type: String,
        required: [true, 'Por favor, forneça uma senha'],
        minlength: 6,
        select: false
    },
    telefone: String,
    endereco: {
        rua: String,
        numero: String,
        bairro: String,
        cidade: String,
        estado: String,
        cep: String
    },
    avatar: {
        type: String,
        default: 'https://via.placeholder.com/150?text=Avatar'
    },
    tipo: {
        type: String,
        enum: ['cliente', 'admin', 'vendedor'],
        default: 'cliente'
    },
    ativo: {
        type: Boolean,
        default: true
    },
    criadoEm: {
        type: Date,
        default: Date.now
    },
    ultimoAcesso: Date
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('senha')) return next();
    const salt = await bcrypt.genSalt(10);
    this.senha = await bcrypt.hash(this.senha, salt);
    next();
});

userSchema.methods.compararSenha = async function(senhaInformada) {
    return await bcrypt.compare(senhaInformada, this.senha);
};

module.exports = mongoose.model('User', userSchema);