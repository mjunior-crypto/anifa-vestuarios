const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    nome: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    senha: { type: String, required: true, minlength: 6, select: false },
    telefone: String,
    endereco: {
        rua: String,
        numero: String,
        bairro: String,
        cidade: String,
        estado: String,
        cep: String
    },
    avatar: { type: String, default: 'https://via.placeholder.com/150?text=Avatar' },
    tipo: { type: String, enum: ['cliente', 'admin', 'vendedor'], default: 'cliente' },
    ativo: { type: Boolean, default: true },
    criadoEm: { type: Date, default: Date.now }
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