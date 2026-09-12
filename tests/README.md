# 📋 Guia de Testes Automatizados

## 🚀 Sobre os Testes

Este projeto inclui **2 suites de testes automatizados** para validar todo o funcionamento da ANIFA VESTUÁRIOS:

### 1. **Testes de UI (Interface do Usuário)**
- **Arquivo**: `tests/automated-tests.js`
- **Ferramenta**: Puppeteer (simula navegador real)
- **O que testa**:
  - ✅ Carregamento da página
  - ✅ Visibilidade da navbar
  - ✅ Sistema de login e registro
  - ✅ Carregamento de 20 produtos
  - ✅ Filtros por categoria
  - ✅ Modal de produtos
  - ✅ Adicionar/remover do carrinho
  - ✅ Finalizar compra
  - ✅ Seções da página (home, categorias, produtos, pagamentos, contato)
  - ✅ Footer
  - ✅ Responsividade (mobile, tablet, desktop)
  - ✅ Validação de formulários

**Total: 15 testes de UI**

### 2. **Testes de API (Backend)**
- **Arquivo**: `tests/api-tests.js`
- **Ferramenta**: Axios (chamadas HTTP)
- **O que testa**:
  - ✅ Registro de usuário
  - ✅ Login de usuário
  - ✅ Obtenção de produtos
  - ✅ Obtenção de produto por ID
  - ✅ Criação de pedido
  - ✅ Obtenção de pedidos
  - ✅ Intenção de pagamento
  - ✅ Processamento de pagamento
  - ✅ Upload de arquivo
  - ✅ Perfil de usuário

**Total: 10 testes de API**

---

## 📦 Instalação

### Pré-requisitos
- Node.js >= 16.0.0
- npm >= 8.0.0

### Passos

```bash
# Navegar para o diretório de testes
cd tests

# Instalar dependências
npm install
```

---

## 🧪 Executar os Testes

### Executar todos os testes
```bash
npm test
# ou
npm run test:all
```

### Executar apenas testes de UI
```bash
npm run test:ui
```

### Executar apenas testes de API
```bash
npm run test:api
```

### Executar testes com watch (reinicia ao salvar)
```bash
npm run test:watch
```

---

## 📊 Interpretando os Resultados

Ao executar os testes, você verá um relatório como:

```
╔════════════════════════════════════════════════════════════╗
║        TESTES AUTOMATIZADOS - ANIFA VESTUÁRIOS v2           ║
╚════════════════════════════════════════════════════════════╝

[14:30:45] ✅ PASSOU: Carregamento da página
[14:30:46] ✅ PASSOU: Navbar visível
[14:30:47] ✅ PASSOU: Produtos carregam
...

╔════════════════════════════════════════════════════════════╗
║                    RELATÓRIO FINAL                         ║
╚════════════════════════════════════════════════════════════╝

Total de testes: 15
✅ Passou: 14
❌ Falhou: 1
📊 Taxa de sucesso: 93.33%
```

---

## 🔍 O que cada teste valida

### UI Tests

| # | Teste | Descrição |
|---|-------|----------|
| 1 | Carregamento da página | Valida se a página HTML carrega corretamente |
| 2 | Navbar visível | Verifica se navbar e logo estão presentes |
| 3 | Sistema de login | Testa o fluxo completo de login |
| 4 | Sistema de registro | Testa criação de nova conta |
| 5 | Produtos carregam | Valida se 20 produtos aparecem |
| 6 | Sistema de filtros | Testa filtros por categoria |
| 7 | Modal de produto | Verifica se modal abre ao clicar em produto |
| 8 | Adicionar ao carrinho | Testa adição de items ao carrinho |
| 9 | Ver carrinho | Valida visualização do carrinho |
| 10 | Remover do carrinho | Testa remoção de items |
| 11 | Finalizar compra | Testa checkout completo |
| 12 | Seções da página | Valida presença de todas as seções |
| 13 | Footer visível | Verifica footer e redes sociais |
| 14 | Responsividade | Testa em mobile (375px), tablet (768px), desktop (1920px) |
| 15 | Validação de formulário | Testa presença de formulários |

### API Tests

| # | Teste | Descrição |
|---|-------|----------|
| 1 | Registro via API | Testa criação de novo usuário |
| 2 | Login via API | Testa autenticação |
| 3 | Obtenção de produtos | GET /products |
| 4 | Obtenção de produto | GET /products/:id |
| 5 | Criação de pedido | POST /orders com autenticação |
| 6 | Obtenção de pedidos | GET /orders com autenticação |
| 7 | Intenção de pagamento | GET /payments/intencao |
| 8 | Processamento de pagamento | POST /payments/processar |
| 9 | Upload de arquivo | POST /upload |
| 10 | Perfil de usuário | GET /users/:id |

---

## ⚙️ Configuração

### Para testes de UI

Edite `tests/automated-tests.js`:
```javascript
const TEST_URL = 'file://' + __dirname + '/../public/index-v2.html';
const TEST_EMAIL = 'teste@anifa.com';
const TEST_NOME = 'Testador ANIFA';
const TEST_SENHA = '12345678';
```

### Para testes de API

Edite `tests/api-tests.js`:
```javascript
const API_URL = 'http://localhost:5000/api';
```

---

## 🐛 Troubleshooting

### Erro: "Puppeteer timeout"
**Solução**: Aumentar timeout em `automated-tests.js`:
```javascript
await page.waitForSelector('...', { timeout: 5000 }); // 5 segundos
```

### Erro: "ECONNREFUSED" (API tests)
**Solução**: Certifique-se de que o backend está rodando:
```bash
npm start  # no diretório principal
```

### Erro: "Module not found"
**Solução**: Reinstalar dependências:
```bash
cd tests
rm -rf node_modules package-lock.json
npm install
```

---

## 📈 Relatórios Customizados

### Gerar relatório em JSON
```bash
node tests/automated-tests.js > resultados.json
```

### Gerar relatório em HTML (opcional)
Modifique os testes para exportar HTML:
```javascript
fs.writeFileSync('report.html', generateHTMLReport(testResults));
```

---

## 🔄 Integração com CI/CD

### GitHub Actions
Crie `.github/workflows/tests.yml`:
```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: cd tests && npm install
      - run: npm test
```

---

## 📝 Adicionando Novos Testes

### Template para novo teste
```javascript
async function testNewFeature() {
    try {
        log('Testando nova feature...');
        
        // Seu código de teste aqui
        const result = await page.$('.seletor');
        assert(result !== null, 'Elemento deve existir');
        
        recordTest('Nome do teste', true);
    } catch (error) {
        recordTest('Nome do teste', false, error.message);
    }
}
```

Depois adicione à função `runAllTests()`:
```javascript
await testNewFeature();
```

---

## 📞 Suporte

Para problemas com os testes:
1. Verifique os logs detalhados
2. Aumente o timeout
3. Verifique se todas as dependências estão instaladas
4. Rode `npm test` novamente

---

## ✅ Checklist de Qualidade

- [ ] Todos os testes de UI passam
- [ ] Todos os testes de API passam
- [ ] Taxa de sucesso >= 90%
- [ ] Não há erros de console
- [ ] Responsividade funciona
- [ ] Login/Registro funcionam
- [ ] Carrinho funciona
- [ ] Checkout funciona

---

**Desenvolvido com ❤️ para ANIFA VESTUÁRIOS**