const produtosExpandidos = [
    { id: 1, nome: 'Camiseta Infantil Azul', categoria: 'infantil', preco: 49.90, descricao: 'Confortável em algodão 100%', tamanhos: ['2-4 anos', '4-6 anos', '6-8 anos'], cores: ['Azul', 'Rosa', 'Verde'], imagem: 'https://via.placeholder.com/300x300?text=Camiseta+Infantil+Azul' },
    { id: 2, nome: 'Bermuda Jeans Infantil', categoria: 'infantil', preco: 79.90, descricao: 'Bermuda durável para crianças ativas', tamanhos: ['2-4 anos', '4-6 anos', '6-8 anos', '8-10 anos'], cores: ['Azul Claro', 'Azul Escuro'], imagem: 'https://via.placeholder.com/300x300?text=Bermuda+Infantil' },
    { id: 3, nome: 'Vestido Infantil Floral', categoria: 'infantil', preco: 99.90, descricao: 'Vestido fofo perfeito para ocasiões', tamanhos: ['2-4 anos', '4-6 anos', '6-8 anos'], cores: ['Rosa', 'Lilás', 'Amarelo'], imagem: 'https://via.placeholder.com/300x300?text=Vestido+Infantil' },
    { id: 4, nome: 'Conjunto Esportivo Infantil', categoria: 'infantil', preco: 129.90, descricao: 'Conjunto esportivo confortável', tamanhos: ['4-6 anos', '6-8 anos', '8-10 anos'], cores: ['Preto com Azul', 'Cinza com Rosa'], imagem: 'https://via.placeholder.com/300x300?text=Conjunto+Infantil' },
    { id: 5, nome: 'Jaqueta Infantil Inverno', categoria: 'infantil', preco: 159.90, descricao: 'Jaqueta quentinha para o frio', tamanhos: ['4-6 anos', '6-8 anos', '8-10 anos'], cores: ['Preto', 'Azul', 'Vermelho'], imagem: 'https://via.placeholder.com/300x300?text=Jaqueta+Infantil' },
    { id: 6, nome: 'Calça Jeans Adolescente', categoria: 'adolescente', preco: 119.90, descricao: 'Calça jeans moderna', tamanhos: ['P', 'M', 'G', 'GG'], cores: ['Azul Claro', 'Azul Escuro', 'Preto'], imagem: 'https://via.placeholder.com/300x300?text=Calca+Jeans' },
    { id: 7, nome: 'Camiseta Estampada Adolescente', categoria: 'adolescente', preco: 59.90, descricao: 'Camiseta com estampas legais', tamanhos: ['P', 'M', 'G', 'GG'], cores: ['Branco', 'Preto', 'Cinza'], imagem: 'https://via.placeholder.com/300x300?text=Camiseta+Estampada' },
    { id: 8, nome: 'Moleton Adolescente', categoria: 'adolescente', preco: 149.90, descricao: 'Moleton quentinho para dias frios', tamanhos: ['P', 'M', 'G', 'GG'], cores: ['Cinza', 'Preto', 'Azul Marinho'], imagem: 'https://via.placeholder.com/300x300?text=Moleton' },
    { id: 9, nome: 'Tênis Esportivo Adolescente', categoria: 'adolescente', preco: 199.90, descricao: 'Tênis confortável para esportes', tamanhos: ['33', '34', '35', '36', '37'], cores: ['Branco', 'Preto', 'Cinza', 'Vermelho'], imagem: 'https://via.placeholder.com/300x300?text=Tenis+Esportivo' },
    { id: 10, nome: 'Jaqueta Jeans Adolescente', categoria: 'adolescente', preco: 189.90, descricao: 'Jaqueta jeans clássica', tamanhos: ['P', 'M', 'G', 'GG'], cores: ['Azul Claro', 'Azul Escuro'], imagem: 'https://via.placeholder.com/300x300?text=Jaqueta+Jeans' },
    { id: 11, nome: 'Calça Social Adulta', categoria: 'adulto', preco: 159.90, descricao: 'Calça social elegante', tamanhos: ['P', 'M', 'G', 'GG', 'XG'], cores: ['Preto', 'Cinza', 'Azul Marinho'], imagem: 'https://via.placeholder.com/300x300?text=Calca+Social' },
    { id: 12, nome: 'Blusa Feminina Elegante', categoria: 'adulto', preco: 129.90, descricao: 'Blusa sofisticada', tamanhos: ['P', 'M', 'G', 'GG'], cores: ['Preto', 'Branco', 'Vinho'], imagem: 'https://via.placeholder.com/300x300?text=Blusa+Feminina' },
    { id: 13, nome: 'Camiseta Masculina Premium', categoria: 'adulto', preco: 89.90, descricao: 'Camiseta de qualidade superior', tamanhos: ['P', 'M', 'G', 'GG', 'XG'], cores: ['Branco', 'Preto', 'Cinza', 'Azul'], imagem: 'https://via.placeholder.com/300x300?text=Camiseta+Premium' },
    { id: 14, nome: 'Jaqueta Inverno Adulta', categoria: 'adulto', preco: 249.90, descricao: 'Jaqueta quente e confortável', tamanhos: ['P', 'M', 'G', 'GG'], cores: ['Preto', 'Cinza', 'Marrom'], imagem: 'https://via.placeholder.com/300x300?text=Jaqueta+Inverno' },
    { id: 15, nome: 'Calado Social Adulto', categoria: 'adulto', preco: 179.90, descricao: 'Calçado social premium', tamanhos: ['36', '37', '38', '39', '40', '41', '42'], cores: ['Preto', 'Marrom'], imagem: 'https://via.placeholder.com/300x300?text=Calcado+Social' },
    { id: 16, nome: 'Blusa Confortável Senior', categoria: 'senior', preco: 109.90, descricao: 'Blusa suave com ajuste confortável', tamanhos: ['P', 'M', 'G', 'GG'], cores: ['Branco', 'Bege', 'Rosa Claro'], imagem: 'https://via.placeholder.com/300x300?text=Blusa+Senior' },
    { id: 17, nome: 'Calça de Malha Senior', categoria: 'senior', preco: 139.90, descricao: 'Calça macia e elástica', tamanhos: ['P', 'M', 'G', 'GG'], cores: ['Preto', 'Cinza', 'Marrom'], imagem: 'https://via.placeholder.com/300x300?text=Calca+Malha' },
    { id: 18, nome: 'Cardigan Senior', categoria: 'senior', preco: 169.90, descricao: 'Cardigan elegante e aconchegante', tamanhos: ['P', 'M', 'G', 'GG'], cores: ['Azul Marinho', 'Vinho', 'Preto'], imagem: 'https://via.placeholder.com/300x300?text=Cardigan' },
    { id: 19, nome: 'Vestido Social Senior', categoria: 'senior', preco: 199.90, descricao: 'Vestido elegante para eventos', tamanhos: ['P', 'M', 'G', 'GG'], cores: ['Preto', 'Azul Marinho', 'Cinza'], imagem: 'https://via.placeholder.com/300x300?text=Vestido+Social' },
    { id: 20, nome: 'Jaqueta Elegante Senior', categoria: 'senior', preco: 219.90, descricao: 'Jaqueta com elegancia', tamanhos: ['P', 'M', 'G', 'GG'], cores: ['Cinza', 'Preto', 'Marrom'], imagem: 'https://via.placeholder.com/300x300?text=Jaqueta+Senior' }
];

let carrinho = [];
let categoriaAtiva = 'todos';
let produtoSelecionado = null;
let usuarioAutenticado = localStorage.getItem('usuarioAutenticado') ? JSON.parse(localStorage.getItem('usuarioAutenticado')) : null;
let token = localStorage.getItem('token') || null;

document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    atualizarNavbar();
});

function carregarProdutos() {
    const grid = document.getElementById('produtos-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const produtosFiltrados = categoriaAtiva === 'todos'
        ? produtosExpandidos
        : produtosExpandidos.filter(p => p.categoria === categoriaAtiva);

    produtosFiltrados.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-img">
            <div class="produto-info">
                <p class="produto-categoria">${produto.categoria}</p>
                <h3 class="produto-nome">${produto.nome}</h3>
                <p class="produto-descricao">${produto.descricao}</p>
                <div class="produto-footer">
                    <span class="produto-preco">R$ ${produto.preco.toFixed(2)}</span>
                    <button class="produto-btn" onclick="abrirModal(${produto.id})">Ver Detalhes</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filtrarPorCategoria(categoria) {
    categoriaAtiva = categoria;
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    event?.target?.classList.add('active');
    carregarProdutos();
}

function mostrarTodos() {
    categoriaAtiva = 'todos';
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    event?.target?.classList.add('active');
    carregarProdutos();
}

function abrirModal(id) {
    produtoSelecionado = produtosExpandidos.find(p => p.id === id);
    if (produtoSelecionado) {
        document.getElementById('modal-img').src = produtoSelecionado.imagem;
        document.getElementById('modal-nome').textContent = produtoSelecionado.nome;
        document.getElementById('modal-descricao').textContent = produtoSelecionado.descricao;
        document.getElementById('modal-tamanhos').textContent = produtoSelecionado.tamanhos.join(', ');
        document.getElementById('modal-cores').textContent = produtoSelecionado.cores.join(', ');
        document.getElementById('modal-preco').textContent = produtoSelecionado.preco.toFixed(2);
        document.getElementById('quantidade').value = 1;
        document.getElementById('product-modal').classList.add('show');
    }
}

function fecharModal() {
    document.getElementById('product-modal').classList.remove('show');
}

function adicionarAoCarrinho() {
    if (!usuarioAutenticado) {
        alert('Por favor, faça login primeiro!');
        abrirModalLogin();
        return;
    }

    if (!produtoSelecionado) return;

    const quantidade = parseInt(document.getElementById('quantidade').value);
    const itemCarrinho = carrinho.find(item => item.id === produtoSelecionado.id);

    if (itemCarrinho) {
        itemCarrinho.quantidade += quantidade;
    } else {
        carrinho.push({
            ...produtoSelecionado,
            quantidade: quantidade
        });
    }

    atualizarCarrinho();
    fecharModal();
    alert('Produto adicionado ao carrinho!');
}

function atualizarCarrinho() {
    document.getElementById('cart-count').textContent = carrinho.reduce((total, item) => total + item.quantidade, 0);
}

function abrirCarrinho() {
    if (!usuarioAutenticado) {
        alert('Por favor, faça login primeiro!');
        abrirModalLogin();
        return;
    }

    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (carrinho.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 20px;">Seu carrinho está vazio</p>';
    } else {
        carrinho.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <div>
                    <h4>${item.nome}</h4>
                    <p>Quantidade: ${item.quantidade}</p>
                    <p>Preço unitário: R$ ${item.preco.toFixed(2)}</p>
                </div>
                <div>
                    <p><strong>R$ ${(item.preco * item.quantidade).toFixed(2)}</strong></p>
                    <button onclick="removerDoCarrinho(${index})" style="background-color: #FF6B6B; color: white; border: none; padding: 8px 15px; border-radius: 3px; cursor: pointer; font-size: 12px;">Remover</button>
                </div>
            `;
            cartItems.appendChild(itemDiv);
        });
    }

    const total = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    document.getElementById('total-price').textContent = total.toFixed(2);
    document.getElementById('cart-modal').classList.add('show');
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
    abrirCarrinho();
}

function fecharCarrinho() {
    document.getElementById('cart-modal').classList.remove('show');
}

function finalizarCompra() {
    if (!usuarioAutenticado) {
        alert('Por favor, faça login primeiro!');
        return;
    }

    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    const total = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    const metodo = document.getElementById('metodo-pagamento').value;

    alert(`
✅ COMPRA REALIZADA COM SUCESSO!

Total: R$ ${total.toFixed(2)}
Forma de Pagamento: ${metodo.toUpperCase()}
Cliente: ${usuarioAutenticado.nome}

Obrigado por comprar na ANIFA VESTUÁRIOS!
Você receberá um email de confirmação em breve.

Número do Pedido: ORD-${Date.now()}
    `);

    carrinho = [];
    atualizarCarrinho();
    fecharCarrinho();
}

function atualizarNavbar() {
    const btnLogin = document.getElementById('btnLogin');
    if (!btnLogin) return;

    usuarioAutenticado = localStorage.getItem('usuarioAutenticado') ? JSON.parse(localStorage.getItem('usuarioAutenticado')) : null;

    if (usuarioAutenticado) {
        btnLogin.innerHTML = `<i class="fas fa-user"></i> ${usuarioAutenticado.nome}`;
        btnLogin.onclick = () => logout();
    }
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
        alert('Usando modo demonstração. Login simulado!');
        usuarioAutenticado = { id: 'demo', nome: email.split('@')[0], email: email };
        localStorage.setItem('usuarioAutenticado', JSON.stringify(usuarioAutenticado));
        token = 'demo-token';
        localStorage.setItem('token', token);
        fecharModalLogin();
        atualizarNavbar();
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
        alert('Usando modo demonstração. Registro simulado!');
        usuarioAutenticado = { id: 'demo-' + Date.now(), nome: nome, email: email };
        localStorage.setItem('usuarioAutenticado', JSON.stringify(usuarioAutenticado));
        token = 'demo-token-' + Date.now();
        localStorage.setItem('token', token);
        fecharModalLogin();
        atualizarNavbar();
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

function enviarContato(event) {
    event.preventDefault();
    alert('Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!');
    event.target.reset();
}

window.onclick = (event) => {
    const productModal = document.getElementById('product-modal');
    const cartModal = document.getElementById('cart-modal');
    const authModal = document.getElementById('auth-modal');

    if (event.target === productModal) {
        fecharModal();
    }
    if (event.target === cartModal) {
        fecharCarrinho();
    }
    if (event.target === authModal) {
        fecharModalLogin();
    }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});