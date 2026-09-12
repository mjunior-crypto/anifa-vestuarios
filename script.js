// Base de dados de produtos
const produtos = [
    // Infantil
    {
        id: 1,
        nome: "Camiseta Infantil Colorida",
        categoria: "infantil",
        preco: 49.90,
        descricao: "Camiseta confortável em algodão 100%",
        tamanhos: ["2-4 anos", "4-6 anos", "6-8 anos"],
        cores: ["Azul", "Rosa", "Verde"],
        imagem: "https://via.placeholder.com/300x300?text=Camiseta+Infantil"
    },
    {
        id: 2,
        nome: "Bermuda Jeans Infantil",
        categoria: "infantil",
        preco: 79.90,
        descricao: "Bermuda jeans durável para crianças ativas",
        tamanhos: ["2-4 anos", "4-6 anos", "6-8 anos", "8-10 anos"],
        cores: ["Azul Claro", "Azul Escuro"],
        imagem: "https://via.placeholder.com/300x300?text=Bermuda+Infantil"
    },
    {
        id: 3,
        nome: "Vestido Infantil Floral",
        categoria: "infantil",
        preco: 99.90,
        descricao: "Vestido fofo perfeito para ocasiões especiais",
        tamanhos: ["2-4 anos", "4-6 anos", "6-8 anos"],
        cores: ["Rosa", "Lilás", "Amarelo"],
        imagem: "https://via.placeholder.com/300x300?text=Vestido+Infantil"
    },
    {
        id: 4,
        nome: "Conjunto Infantil Esportivo",
        categoria: "infantil",
        preco: 129.90,
        descricao: "Conjunto esportivo confortável e prático",
        tamanhos: ["4-6 anos", "6-8 anos", "8-10 anos"],
        cores: ["Preto com Azul", "Cinza com Rosa"],
        imagem: "https://via.placeholder.com/300x300?text=Conjunto+Infantil"
    },

    // Adolescentes
    {
        id: 5,
        nome: "Calça Jeans Adolescente",
        categoria: "adolescente",
        preco: 119.90,
        descricao: "Calça jeans moderna com design atual",
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Azul Claro", "Azul Escuro", "Preto"],
        imagem: "https://via.placeholder.com/300x300?text=Calca+Jeans"
    },
    {
        id: 6,
        nome: "Camiseta Adolescente Estampada",
        categoria: "adolescente",
        preco: 59.90,
        descricao: "Camiseta com estampas legais e coloridas",
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Branco", "Preto", "Cinza"],
        imagem: "https://via.placeholder.com/300x300?text=Camiseta+Estampada"
    },
    {
        id: 7,
        nome: "Tênis Adolescente Esportivo",
        categoria: "adolescente",
        preco: 199.90,
        descricao: "Tênis confortável para esportes e lazer",
        tamanhos: ["33", "34", "35", "36", "37"],
        cores: ["Branco", "Preto", "Cinza", "Vermelho"],
        imagem: "https://via.placeholder.com/300x300?text=Tenis+Esportivo"
    },
    {
        id: 8,
        nome: "Moleton Adolescente",
        categoria: "adolescente",
        preco: 149.90,
        descricao: "Moleton quentinho para dias frios",
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Cinza", "Preto", "Azul Marinho"],
        imagem: "https://via.placeholder.com/300x300?text=Moleton"
    },

    // Adultos
    {
        id: 9,
        nome: "Calça Social Adulta",
        categoria: "adulto",
        preco: 159.90,
        descricao: "Calça social elegante para trabalho",
        tamanhos: ["P", "M", "G", "GG", "XG"],
        cores: ["Preto", "Cinza", "Azul Marinho"],
        imagem: "https://via.placeholder.com/300x300?text=Calca+Social"
    },
    {
        id: 10,
        nome: "Blusa Feminina Elegante",
        categoria: "adulto",
        preco: 129.90,
        descricao: "Blusa sofisticada para ocasiões especiais",
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Preto", "Branco", "Vinho"],
        imagem: "https://via.placeholder.com/300x300?text=Blusa+Feminina"
    },
    {
        id: 11,
        nome: "Camiseta Masculina Premium",
        categoria: "adulto",
        preco: 89.90,
        descricao: "Camiseta de qualidade superior em algodão",
        tamanhos: ["P", "M", "G", "GG", "XG"],
        cores: ["Branco", "Preto", "Cinza", "Azul"],
        imagem: "https://via.placeholder.com/300x300?text=Camiseta+Premium"
    },
    {
        id: 12,
        nome: "Jaqueta Adulta Inverno",
        categoria: "adulto",
        preco: 249.90,
        descricao: "Jaqueta quente e confortável para o inverno",
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Preto", "Cinza", "Marrom"],
        imagem: "https://via.placeholder.com/300x300?text=Jaqueta+Inverno"
    },

    // Senior
    {
        id: 13,
        nome: "Blusa Confortável Senior",
        categoria: "senior",
        preco: 109.90,
        descricao: "Blusa suave com ajuste confortável",
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Branco", "Bege", "Rosa Claro"],
        imagem: "https://via.placeholder.com/300x300?text=Blusa+Senior"
    },
    {
        id: 14,
        nome: "Calça de Malha Senior",
        categoria: "senior",
        preco: 139.90,
        descricao: "Calça macia e elástica para conforto máximo",
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Preto", "Cinza", "Marrom"],
        imagem: "https://via.placeholder.com/300x300?text=Calca+Malha"
    },
    {
        id: 15,
        nome: "Cardigan Senior",
        categoria: "senior",
        preco: 169.90,
        descricao: "Cardigan elegante e aconchegante",
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Azul Marinho", "Vinho", "Preto"],
        imagem: "https://via.placeholder.com/300x300?text=Cardigan"
    },
    {
        id: 16,
        nome: "Vestido Social Senior",
        categoria: "senior",
        preco: 199.90,
        descricao: "Vestido elegante para eventos especiais",
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Preto", "Azul Marinho", "Cinza"],
        imagem: "https://via.placeholder.com/300x300?text=Vestido+Social"
    }
];

// Variáveis globais
let carrinho = [];
let categoriaAtiva = "todos";
let produtoSelecionado = null;

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    document.querySelector('.cart-icon').addEventListener('click', abrirCarrinho);
});

// Carregar e exibir produtos
function carregarProdutos() {
    const grid = document.getElementById('produtos-grid');
    grid.innerHTML = '';

    const produtosFiltrados = categoriaAtiva === 'todos'
        ? produtos
        : produtos.filter(p => p.categoria === categoriaAtiva);

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

// Filtrar por categoria
function filtrarPorCategoria(categoria) {
    categoriaAtiva = categoria;
    atualizarFiltros();
    carregarProdutos();
}

// Mostrar todos os produtos
function mostrarTodos() {
    categoriaAtiva = 'todos';
    atualizarFiltros();
    carregarProdutos();
}

// Atualizar botões de filtro
function atualizarFiltros() {
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    event?.target?.classList.add('active');
}

// Abrir modal de produto
function abrirModal(id) {
    produtoSelecionado = produtos.find(p => p.id === id);
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

// Fechar modal de produto
function fecharModal() {
    document.getElementById('product-modal').classList.remove('show');
}

// Adicionar ao carrinho
function adicionarAoCarrinho() {
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

// Atualizar carrinho
function atualizarCarrinho() {
    document.getElementById('cart-count').textContent = carrinho.reduce((total, item) => total + item.quantidade, 0);
}

// Abrir carrinho
function abrirCarrinho() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (carrinho.length === 0) {
        cartItems.innerHTML = '<p>Seu carrinho está vazio</p>';
    } else {
        carrinho.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <div>
                    <h4>${item.nome}</h4>
                    <p>Quantidade: ${item.quantidade}</p>
                </div>
                <div>
                    <p>R$ ${(item.preco * item.quantidade).toFixed(2)}</p>
                    <button onclick="removerDoCarrinho(${index})" style="background-color: #FF6B6B; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">Remover</button>
                </div>
            `;
            cartItems.appendChild(itemDiv);
        });
    }

    const total = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    document.getElementById('total-price').textContent = total.toFixed(2);
    document.getElementById('cart-modal').classList.add('show');
}

// Remover do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
    abrirCarrinho();
}

// Fechar carrinho
function fecharCarrinho() {
    document.getElementById('cart-modal').classList.remove('show');
}

// Finalizar compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    const total = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);

    alert(`\n✅ COMPRA REALIZADA COM SUCESSO!\n\nTotal: R$ ${total.toFixed(2)}\n\nObrigado por comprar na ANIFA VESTUÁRIOS!\n\nVocê receberá um email de confirmação em breve.\n\nDúvidas? Contacte-nos!`);

    carrinho = [];
    atualizarCarrinho();
    fecharCarrinho();
}

// Fechar modais ao clicar fora
window.onclick = (event) => {
    const productModal = document.getElementById('product-modal');
    const cartModal = document.getElementById('cart-modal');

    if (event.target === productModal) {
        fecharModal();
    }
    if (event.target === cartModal) {
        fecharCarrinho();
    }
};

// Suavizar scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});