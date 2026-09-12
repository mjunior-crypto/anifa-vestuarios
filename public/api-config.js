// Configuração da API
const API_URL = 'http://localhost:5000/api';

let usuarioAutenticado = localStorage.getItem('usuarioAutenticado') ? JSON.parse(localStorage.getItem('usuarioAutenticado')) : null;
let token = localStorage.getItem('token') || null;

function atualizarNavbar() {
    const btnLogin = document.getElementById('btnLogin');
    if (usuarioAutenticado) {
        btnLogin.innerHTML = `<i class="fas fa-user"></i> ${usuarioAutenticado.nome}`;
        btnLogin.onclick = () => logout();
    } else {
        btnLogin.innerHTML = '<i class="fas fa-user"></i> Login';
        btnLogin.onclick = () => abrirModalLogin();
    }
}

async function realizarLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;

    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        });

        const data = await response.json();
        if (data.success) {
            token = data.token;
            usuarioAutenticado = data.usuario;
            localStorage.setItem('token', token);
            localStorage.setItem('usuarioAutenticado', JSON.stringify(usuarioAutenticado));
            alert('Login realizado com sucesso!');
            fecharModalLogin();
            atualizarNavbar();
        } else {
            alert('Erro: ' + data.message);
        }
    } catch (error) {
        alert('Erro ao fazer login: ' + error.message);
    }
}

async function realizarRegistro(event) {
    event.preventDefault();
    const nome = document.getElementById('regNome').value;
    const email = document.getElementById('regEmail').value;
    const senha = document.getElementById('regSenha').value;
    const confirmarSenha = document.getElementById('regConfirmarSenha').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não correspondem!');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/auth/registro`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, senha, confirmarSenha })
        });

        const data = await response.json();
        if (data.success) {
            token = data.token;
            usuarioAutenticado = data.usuario;
            localStorage.setItem('token', token);
            localStorage.setItem('usuarioAutenticado', JSON.stringify(usuarioAutenticado));
            alert('Conta criada com sucesso!');
            fecharModalLogin();
            atualizarNavbar();
        } else {
            alert('Erro: ' + data.message);
        }
    } catch (error) {
        alert('Erro ao registrar: ' + error.message);
    }
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuarioAutenticado');
    usuarioAutenticado = null;
    token = null;
    atualizarNavbar();
    alert('Logout realizado com sucesso!');
}

function abrirModalLogin() {
    if (usuarioAutenticado) {
        alert('Você já está autenticado como ' + usuarioAutenticado.nome);
        return;
    }
    document.getElementById('auth-modal').classList.add('show');
}

function fecharModalLogin() {
    document.getElementById('auth-modal').classList.remove('show');
}

function abaLoginReg(aba) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(aba + '-tab').classList.add('active');
    event.target.classList.add('active');
}

window.addEventListener('load', () => {
    atualizarNavbar();
});