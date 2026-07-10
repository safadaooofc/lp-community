/* ==============================================
   LOCAL DATABASE - PRODUCTS & PACKAGES
   ============================================== */
const packagesData = [
    {
        id: 'pkg-eco',
        name: 'Módulo Eco',
        image: 'imagens/fotopacotes/pacoteeco.png',
        desc: 'Injeção básica estável. Contém: $5 Milhões + Rank 120 + Arsenal Completo Liberado.',
        price: 6.00,
        glowColor: '#39ff14',
        glowColorRgb: '57, 255, 20',
        inStock: true
    },
    {
        id: 'pkg-bronze',
        name: 'Módulo Bronze',
        image: 'imagens/fotopacotes/pcotebronze.png',
        desc: 'Injeção nível básico avançado. Contém: $10 Milhões + Rank 120 + 2 Veículos Otimizados.',
        price: 10.00,
        glowColor: '#c5c6c7',
        glowColorRgb: '197, 198, 199',
        inStock: true
    },
    {
        id: 'pkg-prata',
        name: 'Módulo Prata',
        image: 'imagens/fotopacotes/pacoteprata.png',
        desc: 'Recovery nível intermediário estável. Contém: $50 Milhões + Rank 250 + 5 Veículos + 2 Trajes.',
        price: 20.00,
        glowColor: '#c5c6c7',
        glowColorRgb: '197, 198, 199',
        inStock: true
    },
    {
        id: 'pkg-ouro',
        name: 'Módulo Ouro',
        image: 'imagens/fotopacotes/pacoteouro.png',
        desc: 'Recovery corporativo de alto saldo. Contém: $150 Milhões + Rank 500 + 10 Veículos + 5 Trajes.',
        price: 35.00,
        glowColor: '#39ff14',
        glowColorRgb: '57, 255, 20',
        inStock: true
    },
    {
        id: 'pkg-esmeralda',
        name: 'Módulo Esmeralda',
        image: 'imagens/fotopacotes/pacoteesmeralda.png',
        desc: 'Recovery avançado de alta segurança. Contém: $300 Milhões + Rank 1000 + 20 Veículos + 10 Trajes.',
        price: 50.00,
        glowColor: '#39ff14',
        glowColorRgb: '57, 255, 20',
        inStock: true
    },
    {
        id: 'pkg-diamante',
        name: 'Módulo Diamante',
        image: 'imagens/fotopacotes/pacotediamante.png',
        desc: 'Recuperação e otimização total de dados. Contém: $1 Bilhão + Rank 8000 + Unlock All Plus + 30 Veículos + 15 Trajes.',
        price: 80.00,
        glowColor: '#39ff14',
        glowColorRgb: '57, 255, 20',
        inStock: true
    }
];

const itemsData = [
    {
        id: 'item-dinheiro',
        name: 'Injeção de Capital Ativo (GTA$)',
        desc: 'Injeção direta de saldo estável. R$ 0,50 a cada Milhão contratado. Arraste para definir a carga.',
        price: 5.00,
        inStock: true,
        type: 'calculator-money',
        minQty: 10,
        maxQty: 1000,
        currentQty: 10,
        pricePerMillion: 0.50
    },
    {
        id: 'item-level-low',
        name: 'Rank Estável (0 - 120)',
        desc: 'Modificação de nível para 120. Libera todas as customizações de tunagem, motorizações e armas.',
        price: 4.00,
        inStock: true,
        type: 'standard'
    },
    {
        id: 'item-level-high',
        name: 'Rank Avançado (120 - 8000)',
        desc: 'Modificação de nível personalizada até 8000. Parâmetro configurado sob controle de integridade.',
        price: 8.00,
        inStock: true,
        type: 'standard'
    },
    {
        id: 'item-carro',
        name: 'Veículo Otimizado (Modded)',
        desc: 'Unidade modded com pintura de textura mesclada, pneus especiais e placas personalizadas.',
        price: 1.00,
        inStock: true,
        type: 'calculator-qty',
        currentQty: 1,
        pricePerUnit: 1.00
    },
    {
        id: 'item-traje',
        name: 'Traje Técnico Otimizado (Modded)',
        desc: 'Unidade modded com slots invisíveis, logos raras da Rockstar ou acessórios mesclados.',
        price: 1.00,
        inStock: true,
        type: 'calculator-qty',
        currentQty: 1,
        pricePerUnit: 1.00
    },
    {
        id: 'item-unlock-all',
        name: 'Desbloqueio Integral de Ativos',
        desc: 'Unlock All. Libera arsenais, conquistas, tatuagens estéticas, pinturas cromadas e itens sazonais.',
        price: 5.00,
        inStock: true,
        type: 'standard'
    },
    {
        id: 'item-unlock-all-plus',
        name: 'Desbloqueio Integral & Bypass Estendido',
        desc: 'Unlock All + Estatísticas Maximizadas + Limpeza de logs de auditoria interna da sessão pública.',
        price: 8.00,
        inStock: true,
        type: 'standard'
    },
    {
        id: 'item-express-delivery',
        name: 'Entrega Expressa Estabilizada (5 Min)',
        desc: 'Canal de dados prioritário. Injeção executada imediatamente na fila de processamento principal.',
        price: 5.00,
        inStock: false,
        type: 'standard'
    }
];

const defaultFeedbacks = [
    {
        username: 'GamerPro99',
        date: 'Hoje às 14:35',
        content: 'Mano, a entrega foi muito rápida! Comprei o pacote diamante e em menos de 15 minutos já tava na minha conta do PC. Super seguro, recomendo demais!',
        stars: 5,
        avatarBg: '#7289da'
    },
    {
        username: 'Lucas_GTA',
        date: 'Ontem às 19:12',
        content: 'Comprei level 120 e mais 100M. O atendimento do suporte foi excelente, tiraram todas as minhas dúvidas sobre ban e fizeram tudo certinho. Nota 10!',
        stars: 5,
        avatarBg: '#ff5722'
    },
    {
        username: 'BeatrizS',
        date: '08/07/2026 às 21:04',
        content: 'Os trajes modz são incríveis! Meu personagem ficou top demais no PS5. A equipe da LP Modz tá de parabéns pelo serviço e pelos preços justos.',
        stars: 5,
        avatarBg: '#4caf50'
    }
];

// App State
let activeFilters = {
    search: '',
    sort: 'relevancia',
    priceMin: 0,
    priceMax: 100,
    showOutOfStock: false
};

let currentUser = null;
let temporaryUser = null;
let currentFeedbackRating = 5;
let currentPurchaseItem = null;

/* ==============================================
   BACKGROUND SLIDESHOW
   ============================================== */
function initSlideshow() {
    const slides = document.querySelectorAll('.gta-background-slideshow .slide');
    if (slides.length === 0) return;
    let currentSlide = 0;
    
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 6000);
}

/* ==============================================
   SCROLL EFFECTS & PARALLAX
   ============================================== */
function initScrollEffects() {
    const header = document.getElementById('header');
    const heroContent = document.querySelector('.hero-content');
    const backgroundSlides = document.querySelectorAll('.gta-background-slideshow .slide');
    const scrollArrow = document.getElementById('scroll-arrow');
    
    if (scrollArrow) {
        scrollArrow.addEventListener('click', () => {
            const contentArea = document.getElementById('content-area');
            contentArea.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (window.scrollY === 0 && header) {
        header.classList.add('at-top');
    }
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        if (header) {
            if (scrollY > 50) {
                header.classList.remove('at-top');
            } else {
                header.classList.add('at-top');
            }
        }
        
        backgroundSlides.forEach(slide => {
            if (slide.classList.contains('active')) {
                slide.style.transform = `scale(${1.1 + (scrollY * 0.0002)})`;
            }
        });
        
        if (heroContent && scrollY < windowHeight) {
            const opacity = 1 - (scrollY / (windowHeight * 0.7));
            heroContent.style.opacity = Math.max(opacity, 0);
            heroContent.style.transform = `translateY(${scrollY * 0.1}px)`;
        }
    });
}

/* ==============================================
   SPA ROUTER
   ============================================== */
function handleRoute() {
    const hash = window.location.hash || '#/produtos';
    const tabName = hash.replace('#/', '');
    
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        if (link.getAttribute('data-tab') === tabName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    const pageViews = document.querySelectorAll('.page-view');
    let viewFound = false;
    
    pageViews.forEach(view => {
        if (view.id === `view-${tabName}`) {
            view.classList.add('active');
            viewFound = true;
        } else {
            view.classList.remove('active');
        }
    });
    
    if (!viewFound) {
        document.getElementById('view-produtos').classList.add('active');
    }
    
    if (window.scrollY < window.innerHeight * 0.7 && window.location.hash && tabName !== 'login') {
        const contentArea = document.getElementById('content-area');
        contentArea.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (tabName === 'login') {
        document.getElementById('content-area').scrollIntoView({ behavior: 'smooth' });
    }
}

function initRouter() {
    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('load', handleRoute);
}

/* ==============================================
   AUTHENTICATION LOGIC
   ============================================== */
function loadUserSession() {
    const storedUser = localStorage.getItem('lp_user');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
    }
    updateAuthUI();
}

function updateAuthUI() {
    const panel = document.getElementById('user-auth-panel');
    if (!panel) return;
    
    if (currentUser) {
        const initial = currentUser.username.charAt(0).toUpperCase();
        const providerClass = currentUser.provider || 'email';
        
        panel.innerHTML = `
            <div class="user-profile-menu">
                <div class="user-avatar-header ${providerClass}">
                    ${initial}
                </div>
                <span class="user-name-header">${currentUser.username}</span>
                <button class="btn-logout" id="btn-logout" title="Sair da Conta">
                    <i class="fa-solid fa-right-from-bracket"></i>
                </button>
            </div>
        `;
        
        document.getElementById('btn-logout').addEventListener('click', logoutUser);
    } else {
        panel.innerHTML = `
            <a href="#/login" class="btn-login-header">
                <i class="fa-solid fa-user"></i> Acessar Painel
            </a>
        `;
    }
    
    renderFeedbackForm();
}

function loginUser(username, provider) {
    currentUser = {
        username: username,
        provider: provider,
        loggedInAt: new Date().toISOString()
    };
    
    localStorage.setItem('lp_user', JSON.stringify(currentUser));
    updateAuthUI();
    
    sendDiscordWebhook('login', {
        username: username,
        provider: provider
    });
    
    window.location.hash = '#/produtos';
}

window.logoutUser = function() {
    if (currentUser) {
        sendDiscordWebhook('logout', {
            username: currentUser.username
        });
    }
    currentUser = null;
    localStorage.removeItem('lp_user');
    updateAuthUI();
    window.location.hash = '#/produtos';
};

function initAuthForms() {
    const btnTabLogin = document.getElementById('btn-tab-login');
    const btnTabRegister = document.getElementById('btn-tab-register');
    const formLoginPane = document.getElementById('form-login-pane');
    const formRegisterPane = document.getElementById('form-register-pane');
    
    if (btnTabLogin && btnTabRegister) {
        btnTabLogin.addEventListener('click', () => {
            btnTabLogin.classList.add('active');
            btnTabRegister.classList.remove('active');
            formLoginPane.classList.add('active');
            formRegisterPane.classList.remove('active');
        });
        
        btnTabRegister.addEventListener('click', () => {
            btnTabRegister.classList.add('active');
            btnTabLogin.classList.remove('active');
            formRegisterPane.classList.add('active');
            formLoginPane.classList.remove('active');
        });
    }
    
    const loginForm = document.getElementById('email-login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const username = email.split('@')[0];
            loginUser(username, 'email');
            loginForm.reset();
        });
    }
    
    const registerForm = document.getElementById('email-register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('reg-username').value;
            const email = document.getElementById('reg-email').value;
            
            temporaryUser = { username, email };
            openVerificationModal();
            registerForm.reset();
        });
    }
    
    const googleLoginBtn = document.getElementById('btn-google-login');
    const googleRegBtn = document.getElementById('btn-google-reg');
    const discordLoginBtn = document.getElementById('btn-discord-login');
    const discordRegBtn = document.getElementById('btn-discord-reg');
    
    const triggerOAuth = (provider) => {
        const title = provider === 'google' ? 'Google SSO' : 'Discord Auth';
        const loaderColor = provider === 'google' ? '#ea4335' : '#5865F2';
        
        const oauthWindow = window.open('', 'OAuth', 'width=500,height=600,top=100,left=100');
        if (!oauthWindow) {
            alert('Por favor, libere popups no seu navegador para conectar!');
            return;
        }
        
        oauthWindow.document.write(`
            <html>
            <head>
                <title>Autenticando via ${title}...</title>
                <style>
                    body { background: #0c0e12; color: #c5c6c7; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; text-align: center; padding-top: 130px; }
                    .loader { border: 4px solid #15181f; border-top: 4px solid ${loaderColor}; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 25px auto; }
                    .logo-sim { font-size: 2.5rem; margin-bottom: 15px; }
                    h2 { color: white; font-size: 1.3rem; }
                    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                </style>
            </head>
            <body>
                <div class="logo-sim">${provider === 'google' ? '🗝️' : '🛸'}</div>
                <h2>Autenticando via ${title}...</h2>
                <div class="loader"></div>
                <p>Processando integração de credenciais...</p>
            </body>
            </html>
        `);
        
        setTimeout(() => {
            oauthWindow.close();
            const randomId = Math.floor(1000 + Math.random() * 9000);
            const userNickname = provider === 'google' ? `GoogleUser_${randomId}` : `DiscordUser#${randomId}`;
            loginUser(userNickname, provider);
        }, 1500);
    };
    
    if (googleLoginBtn) googleLoginBtn.addEventListener('click', () => triggerOAuth('google'));
    if (googleRegBtn) googleRegBtn.addEventListener('click', () => triggerOAuth('google'));
    if (discordLoginBtn) discordLoginBtn.addEventListener('click', () => triggerOAuth('discord'));
    if (discordRegBtn) discordRegBtn.addEventListener('click', () => triggerOAuth('discord'));
}

/* ==============================================
   EMAIL VERIFICATION MODAL
   ============================================== */
const verificationModal = document.getElementById('email-verification-modal');
const codeInputs = document.querySelectorAll('.verify-code-input');
const btnCancelVerification = document.getElementById('btn-cancel-verification');
const btnConfirmVerification = document.getElementById('btn-confirm-verification');

function openVerificationModal() {
    if (verificationModal) {
        verificationModal.classList.add('active');
        codeInputs.forEach(i => { i.value = ''; i.disabled = true; });
        codeInputs[0].disabled = false;
        codeInputs[0].focus();
        btnConfirmVerification.disabled = true;
    }
}

function closeVerificationModal() {
    if (verificationModal) {
        verificationModal.classList.remove('active');
        temporaryUser = null;
    }
}

if (btnCancelVerification) {
    btnCancelVerification.addEventListener('click', closeVerificationModal);
}

codeInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        const val = e.target.value;
        if (val.length === 1 && index < 3) {
            codeInputs[index + 1].disabled = false;
            codeInputs[index + 1].focus();
        }
        const allFilled = Array.from(codeInputs).every(i => i.value.length === 1);
        if (allFilled) {
            btnConfirmVerification.disabled = false;
        } else {
            btnConfirmVerification.disabled = true;
        }
    });
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index > 0 && input.value.length === 0) {
            codeInputs[index - 1].focus();
            codeInputs[index].disabled = true;
        }
    });
});

if (btnConfirmVerification) {
    btnConfirmVerification.addEventListener('click', () => {
        const code = Array.from(codeInputs).map(i => i.value).join('');
        if (code === '1234') {
            closeVerificationModal();
            if (temporaryUser) {
                loginUser(temporaryUser.username, 'email');
            }
        } else {
            alert('Código incorreto! Chave de verificação simulada é "1234".');
            codeInputs.forEach(i => i.value = '');
            codeInputs[0].focus();
            btnConfirmVerification.disabled = true;
        }
    });
}

/* ==============================================
   PRODUCTS VIEW & FILTERING
   ============================================== */
function renderPackages(packages) {
    const container = document.getElementById('packages-container');
    if (!container) return;
    
    if (packages.length === 0) {
        container.innerHTML = `<div class="no-results-msg">Nenhum pacote encontrado para estes filtros.</div>`;
        return;
    }
    
    container.innerHTML = packages.map(pkg => `
        <div class="package-card" style="--card-glow-color: ${pkg.glowColor}; --card-glow-color-glow: rgba(${pkg.glowColorRgb}, 0.2);">
            <div class="package-img-container">
                <img src="${pkg.image}" alt="${pkg.name}" class="package-img" onerror="this.src='imagens/fotosgta/gtalogo.jpg'">
            </div>
            <div class="package-name">${pkg.name}</div>
            <div class="package-desc">${pkg.desc}</div>
            <div class="package-footer">
                <span class="package-price">R$ ${pkg.price.toFixed(2).replace('.', ',')}</span>
                <button class="btn-buy" onclick="buyProduct('${pkg.id}', '${pkg.name}', ${pkg.price})">Contratar Módulo</button>
            </div>
        </div>
    `).join('');
}

function renderItems(items) {
    const container = document.getElementById('items-container');
    if (!container) return;
    
    if (items.length === 0) {
        container.innerHTML = `<div class="no-results-msg">Nenhum serviço avulso encontrado para estes filtros.</div>`;
        return;
    }
    
    container.innerHTML = items.map(item => {
        let interactionHtml = '';
        let currentPrice = item.price;
        
        if (item.type === 'calculator-money') {
            currentPrice = item.currentQty * item.pricePerMillion;
            interactionHtml = `
                <div class="money-selector-wrapper">
                    <div class="money-selector-header">
                        <span>Carga: <span id="money-qty-val-${item.id}">${item.currentQty}</span> M (Milhões)</span>
                    </div>
                    <input type="range" class="money-range" 
                           min="${item.minQty}" max="${item.maxQty}" step="10" 
                           value="${item.currentQty}" 
                           oninput="updateMoneyCard(this, '${item.id}')">
                </div>
            `;
        } else if (item.type === 'calculator-qty') {
            currentPrice = item.currentQty * item.pricePerUnit;
            interactionHtml = `
                <div class="quantity-selector">
                    <span class="qty-label">Unidades:</span>
                    <div class="qty-controls">
                        <button class="btn-qty" onclick="changeItemQty('${item.id}', -1)">-</button>
                        <span class="qty-val" id="qty-val-${item.id}">${item.currentQty}</span>
                        <button class="btn-qty" onclick="changeItemQty('${item.id}', 1)">+</button>
                    </div>
                </div>
            `;
        }
        
        const badgeClass = item.inStock ? '' : 'out-of-stock';
        const badgeText = item.inStock ? 'Ativo' : 'Inativo';
        const buyButtonDisabled = item.inStock ? '' : 'disabled style="background: var(--text-muted); cursor: not-allowed; color: var(--bg-main)"';
        
        return `
            <div class="item-card">
                <span class="item-badge ${badgeClass}">${badgeText}</span>
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-desc">${item.desc}</div>
                    ${interactionHtml}
                </div>
                <div class="item-footer">
                    <span class="item-price" id="price-display-${item.id}">R$ ${currentPrice.toFixed(2).replace('.', ',')}</span>
                    <button class="btn-buy" ${buyButtonDisabled} onclick="buyProduct('${item.id}', '${item.name}', ${currentPrice})">Adquirir Licença</button>
                </div>
            </div>
        `;
    }).join('');
}

window.changeItemQty = function(itemId, direction) {
    const item = itemsData.find(i => i.id === itemId);
    if (!item) return;
    
    item.currentQty = Math.max(1, item.currentQty + direction);
    
    const qtyVal = document.getElementById(`qty-val-${itemId}`);
    const priceDisplay = document.getElementById(`price-display-${itemId}`);
    
    if (qtyVal) qtyVal.innerText = item.currentQty;
    if (priceDisplay) {
        const total = item.currentQty * item.pricePerUnit;
        priceDisplay.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
};

window.updateMoneyCard = function(slider, itemId) {
    const item = itemsData.find(i => i.id === itemId);
    if (!item) return;
    
    item.currentQty = parseInt(slider.value);
    
    const qtyText = document.getElementById(`money-qty-val-${itemId}`);
    const priceDisplay = document.getElementById(`price-display-${itemId}`);
    
    if (qtyText) qtyText.innerText = item.currentQty;
    if (priceDisplay) {
        const total = item.currentQty * item.pricePerMillion;
        priceDisplay.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
};

/* ==============================================
   PURCHASE MODAL & REDIRECTION CONTROLLER
   ============================================== */
const purchaseModal = document.getElementById('purchase-modal');
const summaryProdName = document.getElementById('summary-prod-name');
const summaryProdPrice = document.getElementById('summary-prod-price');
const btnClosePurchaseModal = document.getElementById('btn-close-purchase-modal');
const btnConfirmPurchase = document.getElementById('btn-confirm-purchase');

// Global purchase interceptor
window.buyProduct = function(id, name, price) {
    if (!currentUser) {
        alert('🔒 Acesso Restrito\n\nAutentique sua conta de operador para contratar módulos ou injeções de ativos.');
        window.location.hash = '#/login';
        return;
    }
    
    currentPurchaseItem = { id, name, price };
    
    if (purchaseModal) {
        summaryProdName.innerText = name;
        summaryProdPrice.innerText = `R$ ${price.toFixed(2).replace('.', ',')}`;
        purchaseModal.classList.add('active');
    }
};

window.buyAccountDirect = function(name, price) {
    window.buyProduct('gta-account', name, price);
};

if (btnClosePurchaseModal) {
    btnClosePurchaseModal.addEventListener('click', () => {
        if (purchaseModal) purchaseModal.classList.remove('active');
        currentPurchaseItem = null;
    });
}

// Redirect confirm button to open local Sandbox payment gateway
if (btnConfirmPurchase) {
    btnConfirmPurchase.addEventListener('click', () => {
        if (purchaseModal) purchaseModal.classList.remove('active');
        
        if (currentPurchaseItem) {
            openPaymentGateway();
        }
    });
}

/* ==============================================
   PAYMENT GATEWAY (LP PAY - SANDBOX)
   ============================================= */
const payGatewayModal = document.getElementById('payment-gateway-modal');
const payGateProdName = document.getElementById('pay-gate-prod-name');
const payGateProdPrice = document.getElementById('pay-gate-prod-price');

const payMethodPix = document.getElementById('pay-method-pix');
const payMethodCard = document.getElementById('pay-method-card');
const payPanePix = document.getElementById('pay-pane-pix');
const payPaneCard = document.getElementById('pay-pane-card');

const btnCopyPix = document.getElementById('btn-copy-pix');
const btnSimulatePixSuccess = document.getElementById('btn-simulate-pix-success');
const payCardForm = document.getElementById('pay-card-form');
const cardProcessingLoader = document.getElementById('card-processing-loader');
const btnAuthCardSubmit = document.getElementById('btn-auth-card-submit');

const btnClosePayGateway = document.getElementById('btn-cancel-pay-gateway');
const btnClosePayGatewayX = document.getElementById('btn-close-pay-gateway');
const btnDiscordPayGateway = document.getElementById('btn-discord-pay-gateway');

function openPaymentGateway() {
    if (!payGatewayModal || !currentPurchaseItem) return;
    
    // Reset modal state
    payGatewayModal.classList.remove('approved');
    payGateProdName.innerText = currentPurchaseItem.name;
    payGateProdPrice.innerText = `R$ ${currentPurchaseItem.price.toFixed(2).replace('.', ',')}`;
    
    // Reset panes (set PIX as default)
    payMethodPix.classList.add('active');
    payMethodCard.classList.remove('active');
    payPanePix.classList.add('active');
    payPaneCard.classList.remove('active');
    
    // Hide loader
    if (cardProcessingLoader) cardProcessingLoader.style.display = 'none';
    if (btnAuthCardSubmit) btnAuthCardSubmit.disabled = false;
    
    payGatewayModal.classList.add('active');
}

function closePaymentGateway() {
    if (payGatewayModal) {
        payGatewayModal.classList.remove('active');
        payGatewayModal.classList.remove('approved');
    }
    currentPurchaseItem = null;
}

// Tab Switching
if (payMethodPix && payMethodCard) {
    payMethodPix.addEventListener('click', () => {
        payMethodPix.classList.add('active');
        payMethodCard.classList.remove('active');
        payPanePix.classList.add('active');
        payPaneCard.classList.remove('active');
    });
    
    payMethodCard.addEventListener('click', () => {
        payMethodCard.classList.add('active');
        payMethodPix.classList.remove('active');
        payPaneCard.classList.add('active');
        payPanePix.classList.remove('active');
    });
}

// Copy PIX Code
if (btnCopyPix) {
    btnCopyPix.addEventListener('click', () => {
        const copyText = document.getElementById('pix-copy-input');
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        
        const originalText = btnCopyPix.innerHTML;
        btnCopyPix.innerHTML = `<i class="fa-solid fa-circle-check"></i> Copiado!`;
        setTimeout(() => {
            btnCopyPix.innerHTML = originalText;
        }, 1500);
    });
}

// Simulate Pix confirmation success click
if (btnSimulatePixSuccess) {
    btnSimulatePixSuccess.addEventListener('click', () => {
        const txId = 'LP-' + Math.floor(100000 + Math.random() * 900000);
        approveTransaction(txId, 'PIX');
    });
}

// Credit Card submit handler
if (payCardForm) {
    payCardForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show SSL processing spinner
        if (cardProcessingLoader) cardProcessingLoader.style.display = 'flex';
        if (btnAuthCardSubmit) btnAuthCardSubmit.disabled = true;
        
        setTimeout(() => {
            const txId = 'LP-' + Math.floor(100000 + Math.random() * 900000);
            approveTransaction(txId, 'Cartão de Crédito');
        }, 2200); // Simulate SSL handshake and auth
    });
}

function approveTransaction(txId, method) {
    if (!currentPurchaseItem) return;
    
    // Switch modal class to success screen
    payGatewayModal.classList.add('approved');
    
    // Fill receipt details
    document.getElementById('receipt-tx-id').innerText = '#' + txId;
    document.getElementById('receipt-prod-name').innerText = currentPurchaseItem.name;
    
    // Discord webhook simulation log
    sendDiscordWebhook('purchase_approved', {
        username: currentUser.username,
        provider: currentUser.provider,
        product: currentPurchaseItem.name,
        price: currentPurchaseItem.price,
        txId: txId,
        method: method
    });
    
    // Reset loaders
    if (cardProcessingLoader) cardProcessingLoader.style.display = 'none';
    if (btnAuthCardSubmit) btnAuthCardSubmit.disabled = false;
    payCardForm.reset();
}

// Modal closing actions
if (btnClosePayGateway) btnClosePayGateway.addEventListener('click', closePaymentGateway);
if (btnClosePayGatewayX) btnClosePayGatewayX.addEventListener('click', closePaymentGateway);
if (btnDiscordPayGateway) {
    btnDiscordPayGateway.addEventListener('click', () => {
        window.open('https://discord.gg/lp-community', '_blank');
        closePaymentGateway();
    });
}

/* ==============================================
   FILTERS IMPLEMENTATION
   ============================================== */
function applyFilters() {
    let filteredPackages = packagesData.filter(pkg => {
        const matchesSearch = pkg.name.toLowerCase().includes(activeFilters.search.toLowerCase()) || 
                             pkg.desc.toLowerCase().includes(activeFilters.search.toLowerCase());
        const matchesPrice = pkg.price >= activeFilters.priceMin && pkg.price <= activeFilters.priceMax;
        const matchesStock = activeFilters.showOutOfStock ? true : pkg.inStock;
        return matchesSearch && matchesPrice && matchesStock;
    });

    let filteredItems = itemsData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(activeFilters.search.toLowerCase()) || 
                             item.desc.toLowerCase().includes(activeFilters.search.toLowerCase());
        
        let basePrice = item.price;
        if (item.type === 'calculator-money') {
            basePrice = item.currentQty * item.pricePerMillion;
        } else if (item.type === 'calculator-qty') {
            basePrice = item.currentQty * item.pricePerUnit;
        }
        
        const matchesPrice = basePrice >= activeFilters.priceMin && basePrice <= activeFilters.priceMax;
        const matchesStock = activeFilters.showOutOfStock ? true : item.inStock;
        
        return matchesSearch && matchesPrice && matchesStock;
    });

    const sortFunction = (a, b) => {
        const getPrice = (item) => {
            if (item.type === 'calculator-money') return item.currentQty * item.pricePerMillion;
            if (item.type === 'calculator-qty') return item.currentQty * item.pricePerUnit;
            return item.price;
        };

        if (activeFilters.sort === 'preco-menor') {
            return getPrice(a) - getPrice(b);
        } else if (activeFilters.sort === 'preco-maior') {
            return getPrice(b) - getPrice(a);
        } else if (activeFilters.sort === 'nome-az') {
            return a.name.localeCompare(b.name);
        } else if (activeFilters.sort === 'nome-za') {
            return b.name.localeCompare(a.name);
        }
        return 0;
    };
    
    filteredPackages.sort(sortFunction);
    filteredItems.sort(sortFunction);
    
    renderPackages(filteredPackages);
    renderItems(filteredItems);
}

function updateSliderColorAndGlow(slider) {
    const value = parseFloat(slider.value);
    const max = parseFloat(slider.max);
    const percent = value / max;
    const hue = 120 * (1 - percent); 
    
    const sliderColor = `hsl(${hue}, 100%, 50%)`;
    slider.style.setProperty('--thumb-color', sliderColor);
}

function initFilters() {
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const priceSlider = document.getElementById('price-slider');
    const priceMinInput = document.getElementById('price-min');
    const priceMaxInput = document.getElementById('price-max');
    const showOutOfStockCheckbox = document.getElementById('show-out-of-stock');
    const btnClearFilters = document.getElementById('btn-clear-filters');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            activeFilters.search = e.target.value;
            applyFilters();
        });
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            activeFilters.sort = e.target.value;
            applyFilters();
        });
    }
    
    if (priceSlider) {
        priceSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            activeFilters.priceMax = val;
            if (priceMaxInput) priceMaxInput.value = val;
            updateSliderColorAndGlow(priceSlider);
            applyFilters();
        });
        updateSliderColorAndGlow(priceSlider);
    }
    
    if (priceMinInput) {
        priceMinInput.addEventListener('input', (e) => {
            const val = parseInt(e.target.value) || 0;
            activeFilters.priceMin = val;
            applyFilters();
        });
    }
    
    if (priceMaxInput) {
        priceMaxInput.addEventListener('input', (e) => {
            const val = parseInt(e.target.value) || 0;
            activeFilters.priceMax = val;
            if (priceSlider) {
                priceSlider.value = val;
                updateSliderColorAndGlow(priceSlider);
            }
            applyFilters();
        });
    }
    
    if (showOutOfStockCheckbox) {
        showOutOfStockCheckbox.addEventListener('change', (e) => {
            activeFilters.showOutOfStock = e.target.checked;
            applyFilters();
        });
    }
    
    if (btnClearFilters) {
        btnClearFilters.addEventListener('click', () => {
            activeFilters = {
                search: '',
                sort: 'relevancia',
                priceMin: 0,
                priceMax: 100,
                showOutOfStock: false
            };
            
            if (searchInput) searchInput.value = '';
            if (sortSelect) sortSelect.value = 'relevancia';
            if (priceSlider) {
                priceSlider.value = 100;
                updateSliderColorAndGlow(priceSlider);
            }
            if (priceMinInput) priceMinInput.value = 0;
            if (priceMaxInput) priceMaxInput.value = 100;
            if (showOutOfStockCheckbox) showOutOfStockCheckbox.checked = false;
            
            applyFilters();
        });
    }
    
    applyFilters();
}

/* ==============================================
   DYNAMIC FEEDBACKS MANAGEMENT
   ============================================== */
function getStoredFeedbacks() {
    const list = localStorage.getItem('lp_feedbacks');
    if (list) {
        return JSON.parse(list);
    }
    return defaultFeedbacks;
}

function renderFeedbacks() {
    const grid = document.getElementById('feedbacks-display-grid');
    if (!grid) return;
    
    const list = getStoredFeedbacks();
    
    grid.innerHTML = list.map(fb => {
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            starsHtml += `<i class="fa-${i <= fb.stars ? 'solid' : 'regular'} fa-star"></i>`;
        }
        
        return `
            <div class="feedback-card">
                <div class="feedback-header">
                    <div class="user-avatar" style="background-color: ${fb.avatarBg || '#7289da'}">
                        ${fb.username.charAt(0).toUpperCase()}
                    </div>
                    <div class="user-info">
                        <h4>${fb.username}</h4>
                        <span class="feedback-date">${fb.date}</span>
                    </div>
                    <div class="delivery-badge"><i class="fa-solid fa-bolt"></i> Entregue</div>
                </div>
                <div class="feedback-content">
                    <p>"${fb.content}"</p>
                </div>
                <div class="feedback-stars">
                    ${starsHtml}
                </div>
            </div>
        `;
    }).join('');
}

function renderFeedbackForm() {
    const container = document.getElementById('feedback-form-block');
    if (!container) return;
    
    if (currentUser) {
        container.innerHTML = `
            <h3>Deixar Relatório de Satisfação</h3>
            <form id="feedback-form-submit">
                <div class="rating-selector">
                    <span>Avaliação:</span>
                    <div class="stars-interactive" id="stars-container">
                        <button type="button" class="star-btn active" data-star="1"><i class="fa-solid fa-star"></i></button>
                        <button type="button" class="star-btn active" data-star="2"><i class="fa-solid fa-star"></i></button>
                        <button type="button" class="star-btn active" data-star="3"><i class="fa-solid fa-star"></i></button>
                        <button type="button" class="star-btn active" data-star="4"><i class="fa-solid fa-star"></i></button>
                        <button type="button" class="star-btn active" data-star="5"><i class="fa-solid fa-star"></i></button>
                    </div>
                </div>
                <div class="feedback-form-group">
                    <textarea id="feedback-text" rows="3" placeholder="Insira seu relato técnico referente à estabilidade e velocidade de entrega do recovery..." required></textarea>
                </div>
                <button type="submit" class="btn-submit-feedback">Publicar Relatório</button>
            </form>
        `;
        
        const stars = container.querySelectorAll('.star-btn');
        stars.forEach(btn => {
            btn.addEventListener('click', () => {
                const rating = parseInt(btn.getAttribute('data-star'));
                currentFeedbackRating = rating;
                
                stars.forEach((s, idx) => {
                    if (idx < rating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });
        });
        
        const fbForm = document.getElementById('feedback-form-submit');
        fbForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = document.getElementById('feedback-text').value;
            
            const newFeedback = {
                username: currentUser.username,
                date: 'Hoje às ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
                content: text,
                stars: currentFeedbackRating,
                avatarBg: currentUser.provider === 'discord' ? '#7289da' : currentUser.provider === 'google' ? '#0b0c10' : '#626773'
            };
            
            const existing = getStoredFeedbacks();
            existing.unshift(newFeedback);
            
            localStorage.setItem('lp_feedbacks', JSON.stringify(existing));
            
            sendDiscordWebhook('feedback', {
                username: currentUser.username,
                stars: currentFeedbackRating,
                content: text
            });
            
            fbForm.reset();
            currentFeedbackRating = 5;
            
            renderFeedbackForm();
            renderFeedbacks();
        });
        
    } else {
        container.innerHTML = `
            <div class="feedback-warning-banner">
                <i class="fa-solid fa-circle-info"></i> Você precisa <a href="#/login">conectar sua conta de operador</a> para poder registrar depoimentos públicos de auditoria.
            </div>
        `;
    }
}

/* ==============================================
   DISCORD AUDIT SYSTEM (WEBHOOK SIMULATOR)
   ============================================== */
const toast = document.getElementById('discord-audit-toast');
const toastContent = document.getElementById('discord-audit-content');
let toastTimer = null;

function sendDiscordWebhook(type, data) {
    if (!toast || !toastContent) return;
    
    let embedColor = '#39ff14'; // green
    let embedTitle = '';
    let embedFields = [];
    
    if (type === 'login') {
        embedColor = '#39ff14';
        embedTitle = '🔑 Sessão Iniciada';
        embedFields = [
            { name: 'Identificador', value: data.username, inline: true },
            { name: 'Protocolo SSO', value: data.provider.toUpperCase(), inline: true }
        ];
    } else if (type === 'logout') {
        embedColor = '#ff3333';
        embedTitle = '🔒 Sessão Encerrada';
        embedFields = [
            { name: 'Identificador', value: data.username, inline: false }
        ];
    } else if (type === 'purchase_approved') {
        embedColor = '#39ff14'; // Solid green for approved payment
        embedTitle = '✅ FATURA LIQUIDADA (LP PAY)';
        embedFields = [
            { name: 'ID Transação', value: `\`#${data.txId}\``, inline: true },
            { name: 'Gateway Metodo', value: data.method, inline: true },
            { name: 'Operador', value: `${data.username} (${data.provider.toUpperCase()})`, inline: false },
            { name: 'Módulo Contratado', value: data.product, inline: true },
            { name: 'Custo Total', value: `R$ ${data.price.toFixed(2).replace('.', ',')}`, inline: true }
        ];
    } else if (type === 'feedback') {
        embedColor = '#7289da';
        embedTitle = '📝 Relatório de Auditoria Enviado';
        embedFields = [
            { name: 'Operador', value: data.username, inline: true },
            { name: 'Score', value: '★'.repeat(data.stars) + '☆'.repeat(5 - data.stars), inline: true },
            { name: 'Resumo Técnico', value: `"${data.content}"`, inline: false }
        ];
    }
    
    const embedFieldsHtml = embedFields.map(f => `
        <div style="margin-top: 8px;">
            <strong style="color: #8e9297; font-size: 0.7rem; text-transform: uppercase;">${f.name}</strong>
            <div style="color: #dcddde; font-size: 0.8rem; margin-top: 2px;">${f.value}</div>
        </div>
    `).join('');

    const embedHtml = `
        <div style="background: #202225; border-left: 4px solid ${embedColor}; border-radius: 4px; padding: 12px; margin-top: 6px;">
            <div style="color: #ffffff; font-weight: 700; font-size: 0.85rem;">${embedTitle}</div>
            <div style="margin-top: 4px; color: #b9bbbe; font-size: 0.7rem;">LP Webhook Auditor • Hoje às ${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</div>
            ${embedFieldsHtml}
        </div>
    `;
    
    toastContent.innerHTML = `
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 4px;">
            <div style="width: 24px; height: 24px; border-radius: 50%; background: #7289da; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.65rem;">LP</div>
            <strong style="color: #ffffff; font-size: 0.75rem;">LP Webhook Audit</strong>
            <span style="background: #5865f2; color: white; font-size: 0.55rem; font-weight: 700; padding: 1px 3px; border-radius: 2px; text-transform: uppercase;">BOT</span>
        </div>
        ${embedHtml}
    `;
    
    toast.classList.add('active');
    
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        closeAuditToast();
    }, 8500);
}

window.closeAuditToast = function() {
    if (toast) toast.classList.remove('active');
};

/* ==============================================
   PARTNER FORM SUBMIT
   ============================================== */
function initPartnerForm() {
    const form = document.getElementById('partner-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('partner-name').value;
        const discord = document.getElementById('partner-discord').value;
        
        alert(`🎉 Solicitação Enviada!\n\nObrigado, ${name} (${discord})! Recebemos sua proposta de parceria. Nossa equipe de marketing irá analisar seus canais e entrará em contato via Discord dentro de 48 horas.`);
        form.reset();
    });
}

/* ==============================================
   INITIALIZATION
   ============================================== */
document.addEventListener('DOMContentLoaded', () => {
    initSlideshow();
    initScrollEffects();
    initRouter();
    loadUserSession();
    initAuthForms();
    initFilters();
    renderFeedbacks();
    initPartnerForm();
});
