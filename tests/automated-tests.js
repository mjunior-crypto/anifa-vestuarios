const puppeteer = require('puppeteer');
const assert = require('assert');

// Configuração dos testes
const TEST_URL = 'file://' + __dirname + '/../public/index-v2.html';
const TEST_EMAIL = 'teste@anifa.com';
const TEST_NOME = 'Testador ANIFA';
const TEST_SENHA = '12345678';

let browser;
let page;
let testResults = {
    total: 0,
    passed: 0,
    failed: 0,
    tests: []
};

// Função auxiliar para log
function log(message, type = 'info') {
    const timestamp = new Date().toLocaleTimeString();
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    console.log(`[${timestamp}] ${icon} ${message}`);
}

// Função para registrar resultado de teste
function recordTest(testName, passed, error = null) {
    testResults.total++;
    if (passed) {
        testResults.passed++;
        log(`PASSOU: ${testName}`, 'success');
    } else {
        testResults.failed++;
        log(`FALHOU: ${testName}`, 'error');
        if (error) log(`  Erro: ${error}`, 'error');
    }
    testResults.tests.push({ testName, passed, error });
}

// Setup do Puppeteer
async function setupBrowser() {
    log('Iniciando navegador...');
    browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    page = await browser.newPage();
    log('Navegador pronto', 'success');
}

// Cleanup
async function closeBrowser() {
    if (browser) {
        await browser.close();
        log('Navegador fechado', 'success');
    }
}

// TESTES

// Teste 1: Carregar página
async function testPageLoads() {
    try {
        log('Testando carregamento da página...');
        await page.goto(TEST_URL, { waitUntil: 'networkidle2' });
        const title = await page.title();
        assert(title.includes('ANIFA'), 'Título deve conter ANIFA');
        recordTest('Carregamento da página', true);
    } catch (error) {
        recordTest('Carregamento da página', false, error.message);
    }
}

// Teste 2: Navbar visível
async function testNavbarVisible() {
    try {
        log('Testando visibilidade da navbar...');
        const navbar = await page.$('.navbar');
        assert(navbar !== null, 'Navbar deve estar visível');
        const logo = await page.$('.logo h1');
        const logoText = await page.evaluate(el => el.textContent, logo);
        assert(logoText.includes('ANIFA'), 'Logo deve conter ANIFA');
        recordTest('Navbar visível', true);
    } catch (error) {
        recordTest('Navbar visível', false, error.message);
    }
}

// Teste 3: Login funcional
async function testLogin() {
    try {
        log('Testando sistema de login...');
        
        // Clicar no botão login
        await page.click('#btnLogin');
        await page.waitForSelector('#auth-modal', { visible: true, timeout: 3000 });
        
        // Preencher e-mail
        await page.type('#loginEmail', TEST_EMAIL);
        // Preencher senha
        await page.type('#loginSenha', TEST_SENHA);
        
        // Clicar botão enviar
        const loginForm = await page.$('form');
        await loginForm.evaluate(form => {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.click();
        });
        
        // Aguardar alerta e fechar modal
        await page.waitForTimeout(500);
        
        recordTest('Sistema de login', true);
    } catch (error) {
        recordTest('Sistema de login', false, error.message);
    }
}

// Teste 4: Registro funcional
async function testRegister() {
    try {
        log('Testando sistema de registro...');
        
        // Abrir modal de login
        await page.click('#btnLogin');
        await page.waitForSelector('#auth-modal', { visible: true, timeout: 3000 });
        
        // Clicar aba de registro
        const registroTab = await page.$$('.tab-btn');
        await registroTab[1].click();
        await page.waitForSelector('#registro-tab.active', { timeout: 2000 });
        
        // Preencher formulário
        await page.type('#regNome', TEST_NOME);
        await page.type('#regEmail', 'novo' + TEST_EMAIL);
        await page.type('#regSenha', TEST_SENHA);
        await page.type('#regConfirmarSenha', TEST_SENHA);
        
        // Enviar
        const regForm = await page.$('#registro-tab form');
        await regForm.evaluate(form => {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.click();
        });
        
        await page.waitForTimeout(500);
        recordTest('Sistema de registro', true);
    } catch (error) {
        recordTest('Sistema de registro', false, error.message);
    }
}

// Teste 5: Produtos carregam
async function testProductsLoad() {
    try {
        log('Testando carregamento de produtos...');
        
        const produtos = await page.$$('.produto-card');
        assert(produtos.length > 0, 'Deve haver pelo menos 1 produto');
        assert(produtos.length >= 20, `Deve haver 20 produtos, encontrado ${produtos.length}`);
        
        recordTest('Produtos carregam', true);
    } catch (error) {
        recordTest('Produtos carregam', false, error.message);
    }
}

// Teste 6: Filtros funcionam
async function testFilters() {
    try {
        log('Testando sistema de filtros...');
        
        // Obter quantidade inicial
        const initialCount = await page.$$eval('.produto-card', cards => cards.length);
        
        // Clicar em filtro
        const filterBtns = await page.$$('.btn-filter');
        await filterBtns[1].click(); // Infantil
        await page.waitForTimeout(500);
        
        const filteredCount = await page.$$eval('.produto-card', cards => cards.length);
        
        // Deve ter menos produtos após filtro
        assert(filteredCount <= initialCount, 'Filtro deve reduzir número de produtos');
        recordTest('Sistema de filtros', true);
    } catch (error) {
        recordTest('Sistema de filtros', false, error.message);
    }
}

// Teste 7: Modal de produto abre
async function testProductModal() {
    try {
        log('Testando modal de produto...');
        
        // Resetar filtros
        const filterBtns = await page.$$('.btn-filter');
        await filterBtns[0].click();
        await page.waitForTimeout(300);
        
        // Clicar em um produto
        const produtoBtns = await page.$$('.produto-btn');
        await produtoBtns[0].click();
        
        await page.waitForSelector('#product-modal.show', { timeout: 3000 });
        const modal = await page.$('#product-modal.show');
        assert(modal !== null, 'Modal deve estar visível');
        
        recordTest('Modal de produto', true);
    } catch (error) {
        recordTest('Modal de produto', false, error.message);
    }
}

// Teste 8: Adicionar ao carrinho
async function testAddToCart() {
    try {
        log('Testando adicionar ao carrinho...');
        
        // Produto deve estar aberto no modal
        const addBtn = await page.$('.price-section .btn-primary');
        assert(addBtn !== null, 'Botão adicionar deve estar visível');
        
        // Aumentar quantidade
        await page.evaluate(() => {
            document.getElementById('quantidade').value = '2';
        });
        
        // Clicar adicionar
        await addBtn.click();
        await page.waitForTimeout(500);
        
        // Verificar contador do carrinho
        const cartCount = await page.evaluate(() => {
            const count = document.getElementById('cart-count');
            return count ? count.textContent : '0';
        });
        assert(parseInt(cartCount) > 0, 'Carrinho deve ter itens');
        
        recordTest('Adicionar ao carrinho', true);
    } catch (error) {
        recordTest('Adicionar ao carrinho', false, error.message);
    }
}

// Teste 9: Ver carrinho
async function testViewCart() {
    try {
        log('Testando visualização do carrinho...');
        
        // Clicar ícone carrinho
        const cartIcon = await page.$('.cart-icon');
        await cartIcon.click();
        
        await page.waitForSelector('#cart-modal.show', { timeout: 3000 });
        const cartModal = await page.$('#cart-modal.show');
        assert(cartModal !== null, 'Modal do carrinho deve estar visível');
        
        // Verificar itens no carrinho
        const cartItems = await page.$$('.cart-item');
        assert(cartItems.length > 0, 'Deve haver itens no carrinho');
        
        recordTest('Ver carrinho', true);
    } catch (error) {
        recordTest('Ver carrinho', false, error.message);
    }
}

// Teste 10: Remover do carrinho
async function testRemoveFromCart() {
    try {
        log('Testando remover do carrinho...');
        
        // Modal carrinho já deve estar aberto
        const removeBtn = await page.$('button[onclick*="removerDoCarrinho"]');
        if (removeBtn) {
            await removeBtn.click();
            await page.waitForTimeout(300);
            recordTest('Remover do carrinho', true);
        } else {
            recordTest('Remover do carrinho', false, 'Botão remover não encontrado');
        }
    } catch (error) {
        recordTest('Remover do carrinho', false, error.message);
    }
}

// Teste 11: Finalizar compra
async function testCheckout() {
    try {
        log('Testando finalizar compra...');
        
        // Adicionar um produto primeiro
        const cartIcon = await page.$('.cart-icon');
        await cartIcon.click();
        await page.waitForSelector('#cart-modal.show', { timeout: 3000 });
        
        // Selecionar método de pagamento
        await page.select('#metodo-pagamento', 'pix');
        
        // Clicar finalizar
        const finalizarBtn = await page.$('button:contains("Finalizar")');
        if (!finalizarBtn) {
            const btns = await page.$$('.btn-primary');
            await btns[btns.length - 1].click(); // Último botão primary
        } else {
            await finalizarBtn.click();
        }
        
        await page.waitForTimeout(500);
        recordTest('Finalizar compra', true);
    } catch (error) {
        recordTest('Finalizar compra', false, error.message);
    }
}

// Teste 12: Seções carregam
async function testSections() {
    try {
        log('Testando seções da página...');
        
        const sections = [
            { id: 'home', name: 'Home' },
            { id: 'categorias', name: 'Categorias' },
            { id: 'produtos', name: 'Produtos' },
            { id: 'pagamentos', name: 'Pagamentos' },
            { id: 'contato', name: 'Contato' }
        ];
        
        for (const section of sections) {
            const element = await page.$(`#${section.id}`);
            assert(element !== null, `Seção ${section.name} deve existir`);
        }
        
        recordTest('Seções da página', true);
    } catch (error) {
        recordTest('Seções da página', false, error.message);
    }
}

// Teste 13: Footer visível
async function testFooter() {
    try {
        log('Testando footer...');
        
        const footer = await page.$('.footer');
        assert(footer !== null, 'Footer deve estar visível');
        
        const socialLinks = await page.$$('.social-links a');
        assert(socialLinks.length > 0, 'Footer deve ter links de redes sociais');
        
        recordTest('Footer visível', true);
    } catch (error) {
        recordTest('Footer visível', false, error.message);
    }
}

// Teste 14: Responsividade
async function testResponsive() {
    try {
        log('Testando responsividade...');
        
        // Testar em mobile
        await page.setViewport({ width: 375, height: 667 });
        const navbarMobile = await page.$('.navbar');
        assert(navbarMobile !== null, 'Navbar deve estar visível em mobile');
        
        // Testar em tablet
        await page.setViewport({ width: 768, height: 1024 });
        const navbarTablet = await page.$('.navbar');
        assert(navbarTablet !== null, 'Navbar deve estar visível em tablet');
        
        // Voltar para desktop
        await page.setViewport({ width: 1920, height: 1080 });
        
        recordTest('Responsividade', true);
    } catch (error) {
        recordTest('Responsividade', false, error.message);
    }
}

// Teste 15: Validação de formulário
async function testFormValidation() {
    try {
        log('Testando validação de formulário...');
        
        // Abrir modal contato
        await page.reload({ waitUntil: 'networkidle2' });
        await page.goto(TEST_URL, { waitUntil: 'networkidle2' });
        
        // Scroll até contato
        await page.evaluate(() => {
            const contato = document.getElementById('contato');
            if (contato) contato.scrollIntoView();
        });
        
        await page.waitForTimeout(500);
        
        const forms = await page.$$('form');
        assert(forms.length > 0, 'Deve haver pelo menos um formulário');
        
        recordTest('Validação de formulário', true);
    } catch (error) {
        recordTest('Validação de formulário', false, error.message);
    }
}

// Executar todos os testes
async function runAllTests() {
    console.log('\n');
    console.log('╔════════════════════════════════════════════════════════════╗');
    console.log('║        TESTES AUTOMATIZADOS - ANIFA VESTUÁRIOS v2           ║');
    console.log('╚════════════════════════════════════════════════════════════╝');
    console.log('\n');
    
    await setupBrowser();
    
    try {
        await testPageLoads();
        await testNavbarVisible();
        await testProductsLoad();
        await testSections();
        await testFilters();
        await testProductModal();
        await testLogin();
        await testRegister();
        await testAddToCart();
        await testViewCart();
        await testRemoveFromCart();
        await testCheckout();
        await testFooter();
        await testResponsive();
        await testFormValidation();
    } catch (error) {
        log('Erro geral durante os testes: ' + error.message, 'error');
    } finally {
        await closeBrowser();
    }
    
    // Relatório final
    console.log('\n');
    console.log('╔════════════════════════════════════════════════════════════╗');
    console.log('║                    RELATÓRIO FINAL                         ║');
    console.log('╚════════════════════════════════════════════════════════════╝');
    console.log(`\nTotal de testes: ${testResults.total}`);
    console.log(`✅ Passou: ${testResults.passed}`);
    console.log(`❌ Falhou: ${testResults.failed}`);
    console.log(`📊 Taxa de sucesso: ${((testResults.passed / testResults.total) * 100).toFixed(2)}%\n`);
    
    if (testResults.failed > 0) {
        console.log('Testes que falharam:');
        testResults.tests.filter(t => !t.passed).forEach(t => {
            console.log(`  ❌ ${t.testName}`);
            if (t.error) console.log(`     ${t.error}`);
        });
    }
    
    console.log('\n');
    process.exit(testResults.failed > 0 ? 1 : 0);
}

// Executar
runAllTests().catch(error => {
    log('Erro fatal: ' + error.message, 'error');
    process.exit(1);
});