// ============================================
// CONFIGURAÇÃO SEO OTIMIZADA
// ============================================

/**
 * Função otimizada para gerenciar e melhorar o SEO do site
 * Inclui Schema.org, meta tags dinâmicas e otimizações de performance
 */
function initSEO() {
    // Configurações SEO base
    const seoConfig = {
        siteName: 'Auto Escola Isis',
        siteUrl: 'https://autoescolaisis.com.br',
        defaultTitle: 'Auto Escola Isis | Habilitação Rápida em Salvador | CNH em 30 Dias',
        defaultDescription: 'Auto Escola Isis em Salvador - Habilitação em até 30 dias! ✓ Aulas práticas e teóricas ✓ Preços acessíveis ✓ Instrutores credenciados ✓ Agende sua aula experimental agora mesmo!',
        defaultImage: 'https://autoescolaisis.com.br/logo-og.jpg',
        keywords: 'auto escola Salvador, tirar CNH rápido, primeira habilitação, renovação CNH, aulas de direção Salvador, preço CNH, Detran BA, CNH em 30 dias, habilitação rápida',
        locale: 'pt_BR',
        business: {
            name: 'Auto Escola Isis',
            address: {
                street: 'Rua Doutor José Peroba, 275',
                city: 'Salvador',
                state: 'BA',
                postalCode: '41770-235',
                country: 'BR'
            },
            phone: '+557130173555',
            email: 'contato@autoescolaisis.com.br',
            foundingDate: '2017-10-10',
            priceRange: '$$'
        }
    };

    // Adiciona Schema.org JSON-LD para melhor indexação
    function addSchemaMarkup() {
        // Remove schema existente se houver
        const existingSchema = document.querySelector('script[type="application/ld+json"]');
        if (existingSchema) {
            existingSchema.remove();
        }

        // Schema.org - LocalBusiness
        const localBusinessSchema = {
            '@context': 'https://schema.org',
            '@type': 'DrivingSchool',
            'name': seoConfig.business.name,
            'image': seoConfig.defaultImage,
            'url': seoConfig.siteUrl,
            'telephone': seoConfig.business.phone,
            'email': seoConfig.business.email,
            'address': {
                '@type': 'PostalAddress',
                'streetAddress': seoConfig.business.address.street,
                'addressLocality': seoConfig.business.address.city,
                'addressRegion': seoConfig.business.address.state,
                'postalCode': seoConfig.business.address.postalCode,
                'addressCountry': seoConfig.business.address.country
            },
            'geo': {
                '@type': 'GeoCoordinates',
                'latitude': -12.984938660074306,
                'longitude': -38.4530012265195
            },
            'openingHours': 'Mo-Sa 08:00-18:00',
            'priceRange': seoConfig.business.priceRange,
            'foundingDate': seoConfig.business.foundingDate,
            'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': '5',
                'reviewCount': '1000',
                'bestRating': '5',
                'worstRating': '1'
            },
            'sameAs': [
                'https://www.facebook.com/autoescolaisisoficial',
                'https://www.instagram.com/auto_escola_isis'
            ],
            'hasOfferCatalog': {
                '@type': 'OfferCatalog',
                'name': 'Cursos de Habilitação',
                'itemListElement': [
                    {
                        '@type': 'Offer',
                        'itemOffered': {
                            '@type': 'Course',
                            'name': 'Categoria B (Carro)',
                            'description': 'Habilitação para dirigir veículos de passeio'
                        }
                    },
                    {
                        '@type': 'Offer',
                        'itemOffered': {
                            '@type': 'Course',
                            'name': 'Categoria A (Moto)',
                            'description': 'Habilitação para dirigir motocicletas e ciclomotores'
                        }
                    },
                    {
                        '@type': 'Offer',
                        'itemOffered': {
                            '@type': 'Course',
                            'name': 'Categoria AB (Carro + Moto)',
                            'description': 'Habilitação completa para carros e motos'
                        }
                    }
                ]
            }
        };

        // Schema.org - Organization
        const organizationSchema = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': seoConfig.business.name,
            'url': seoConfig.siteUrl,
            'logo': seoConfig.defaultImage,
            'contactPoint': {
                '@type': 'ContactPoint',
                'telephone': seoConfig.business.phone,
                'contactType': 'customer service',
                'areaServed': 'BR',
                'availableLanguage': 'pt-BR'
            },
            'sameAs': [
                'https://www.facebook.com/autoescolaisisoficial',
                'https://www.instagram.com/auto_escola_isis'
            ]
        };

        // Schema.org - BreadcrumbList
        const breadcrumbSchema = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                {
                    '@type': 'ListItem',
                    'position': 1,
                    'name': 'Início',
                    'item': seoConfig.siteUrl
                },
                {
                    '@type': 'ListItem',
                    'position': 2,
                    'name': 'Cursos',
                    'item': `${seoConfig.siteUrl}/#cursos`
                },
                {
                    '@type': 'ListItem',
                    'position': 3,
                    'name': 'Contato',
                    'item': `${seoConfig.siteUrl}/#contato`
                }
            ]
        };

        // Adiciona os schemas ao head
        [localBusinessSchema, organizationSchema, breadcrumbSchema].forEach(schema => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(schema);
            document.head.appendChild(script);
        });
    }

    // Otimiza meta tags dinamicamente
    function optimizeMetaTags() {
        const head = document.head;
        
        // Atualiza ou cria meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', seoConfig.defaultDescription);

        // Atualiza ou cria meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', seoConfig.keywords);

        // Adiciona meta tag de autor
        let metaAuthor = document.querySelector('meta[name="author"]');
        if (!metaAuthor) {
            metaAuthor = document.createElement('meta');
            metaAuthor.setAttribute('name', 'author');
            head.appendChild(metaAuthor);
        }
        metaAuthor.setAttribute('content', seoConfig.business.name);

        // Adiciona meta tag de language
        let metaLanguage = document.querySelector('meta[http-equiv="content-language"]');
        if (!metaLanguage) {
            metaLanguage = document.createElement('meta');
            metaLanguage.setAttribute('http-equiv', 'content-language');
            head.appendChild(metaLanguage);
        }
        metaLanguage.setAttribute('content', 'pt-BR');

        // Adiciona meta tag de revisão
        let metaRevisit = document.querySelector('meta[name="revisit-after"]');
        if (!metaRevisit) {
            metaRevisit = document.createElement('meta');
            metaRevisit.setAttribute('name', 'revisit-after');
            head.appendChild(metaRevisit);
        }
        metaRevisit.setAttribute('content', '7 days');

        // Adiciona meta tag de distribuição
        let metaDistribution = document.querySelector('meta[name="distribution"]');
        if (!metaDistribution) {
            metaDistribution = document.createElement('meta');
            metaDistribution.setAttribute('name', 'distribution');
            head.appendChild(metaDistribution);
        }
        metaDistribution.setAttribute('content', 'global');

        // Adiciona meta tag de rating
        let metaRating = document.querySelector('meta[name="rating"]');
        if (!metaRating) {
            metaRating = document.createElement('meta');
            metaRating.setAttribute('name', 'rating');
            head.appendChild(metaRating);
        }
        metaRating.setAttribute('content', 'general');
    }

    // Otimiza imagens para SEO
    function optimizeImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Garante que todas as imagens tenham alt text
            if (!img.alt || img.alt.trim() === '') {
                const parentSection = img.closest('section') || img.closest('.hero') || img.closest('.curso-card');
                if (parentSection) {
                    const heading = parentSection.querySelector('h1, h2, h3');
                    if (heading) {
                        img.alt = `${seoConfig.business.name} - ${heading.textContent.trim()}`;
                    } else {
                        img.alt = `${seoConfig.business.name} - Imagem`;
                    }
                } else {
                    img.alt = `${seoConfig.business.name} - Imagem`;
                }
            }

            // Adiciona loading="lazy" se não tiver
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }

            // Adiciona width e height se não tiver (para evitar layout shift)
            if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
                img.addEventListener('load', function() {
                    if (!this.hasAttribute('width')) {
                        this.setAttribute('width', this.naturalWidth);
                        this.setAttribute('height', this.naturalHeight);
                    }
                });
            }
        });
    }

    // Adiciona meta tags para redes sociais se não existirem
    function optimizeSocialMetaTags() {
        const head = document.head;
        const siteUrl = seoConfig.siteUrl;
        const title = seoConfig.defaultTitle;
        const description = seoConfig.defaultDescription;
        const image = seoConfig.defaultImage;

        // Open Graph
        const ogTags = [
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: siteUrl },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: image },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            { property: 'og:locale', content: seoConfig.locale },
            { property: 'og:site_name', content: seoConfig.siteName }
        ];

        ogTags.forEach(tag => {
            let meta = document.querySelector(`meta[property="${tag.property}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('property', tag.property);
                head.appendChild(meta);
            }
            meta.setAttribute('content', tag.content);
        });

        // Twitter Card
        const twitterTags = [
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:url', content: siteUrl },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: image }
        ];

        twitterTags.forEach(tag => {
            let meta = document.querySelector(`meta[name="${tag.name}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('name', tag.name);
                head.appendChild(meta);
            }
            meta.setAttribute('content', tag.content);
        });
    }

    // Executa todas as otimizações
    addSchemaMarkup();
    optimizeMetaTags();
    optimizeSocialMetaTags();
    optimizeImages();

    // Log para debug (remover em produção se necessário)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('✅ SEO otimizado com sucesso!');
    }

    // Retorna configuração para uso externo
    return seoConfig;
}

/**
 * Função para rastrear eventos de conversão (útil para SEO e Analytics)
 */
function trackConversion(eventName, eventData = {}) {
    // Google Analytics 4 (se configurado)
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Facebook Pixel (se configurado)
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
    
    // Log local para debug
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log(`📊 Conversão rastreada: ${eventName}`, eventData);
    }
}

/**
 * Função para melhorar tempo de permanência na página (fator de SEO)
 * Adiciona interatividade que mantém usuários engajados
 */
function improveUserEngagement() {
    // Rastreia tempo na página
    let timeOnPage = 0;
    const startTime = Date.now();
    
    setInterval(() => {
        timeOnPage = Math.floor((Date.now() - startTime) / 1000);
        
        // Após 30 segundos, considera engajamento
        if (timeOnPage === 30) {
            trackConversion('time_on_page_30s', { time: timeOnPage });
        }
        
        // Após 2 minutos, considera alto engajamento
        if (timeOnPage === 120) {
            trackConversion('time_on_page_2min', { time: timeOnPage });
        }
    }, 1000);
    
    // Rastreia scroll depth (quanto o usuário rola a página)
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            // Rastreia quando usuário rola 50% e 100%
            if (maxScroll >= 50 && maxScroll < 51) {
                trackConversion('scroll_depth_50', { depth: maxScroll });
            }
            if (maxScroll >= 100) {
                trackConversion('scroll_depth_100', { depth: maxScroll });
            }
        }
    });
    
    // Rastreia cliques em CTAs principais
    document.querySelectorAll('a[href="#inscricao"], .btn-primary').forEach(btn => {
        btn.addEventListener('click', () => {
            trackConversion('cta_click', { 
                element: btn.textContent.trim(),
                location: btn.closest('section')?.id || 'unknown'
            });
        });
    });
}

// Configuração dos números do WhatsApp
const whatsappNumbers = [
    { number: '5571986309647', label: 'WhatsApp 01: (71) 98630-9647' },
    { number: '5571992277650', label: 'WhatsApp 02: (71) 99227-7650' }
];
let currentWhatsAppIndex = 0;

// Função para obter o próximo número do WhatsApp
function getNextWhatsAppNumber() {
    currentWhatsAppIndex = (currentWhatsAppIndex + 1) % whatsappNumbers.length;
    return whatsappNumbers[currentWhatsAppIndex];
}

// Função para atualizar todos os links do WhatsApp
function updateWhatsAppLinks() {
    const currentNumber = getNextWhatsAppNumber();
    
    // Atualiza o botão flutuante
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        whatsappFloat.href = `https://wa.me/${currentNumber.number}?text=Olá! Gostaria de saber mais sobre os cursos da Auto Escola Isis`;
    }
    
    // Atualiza os links de contato
    const whatsappContacts = document.querySelectorAll('.whatsapp-contact');
    whatsappContacts.forEach((contact, index) => {
        if (index < whatsappNumbers.length) {
            contact.href = `https://wa.me/${whatsappNumbers[index].number}`;
            contact.textContent = whatsappNumbers[index].label;
        }
    });
    
    return currentNumber;
}

// Função para reiniciar as animações
function resetAnimations() {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image img');
    
    // Reset das animações
    heroContent.style.animation = 'none';
    heroImage.style.animation = 'none';
    
    // Forçar reflow/repaint
    void heroContent.offsetWidth;
    void heroImage.offsetWidth;
    
    // Reaplicar as animações
    heroContent.style.animation = 'fadeInLeft 0.8s ease-out 1.5s forwards';
    heroImage.style.animation = 'carEntrance 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards';
}

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa otimizações SEO
    const seoConfig = initSEO();
    
    // Melhora engajamento do usuário (fator de SEO)
    improveUserEngagement();
    
    const themeToggle = document.getElementById('theme-toggle');
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    const form = document.getElementById('inscricao-form');
    const formMessage = document.getElementById('form-message');
    
    // Inicializa os links do WhatsApp
    updateWhatsAppLinks();
    
    // Garante que as animações funcionem ao navegar de volta para a página
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            resetAnimations();
        }
    });


    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    const whatsappInput = document.getElementById('whatsapp');
    whatsappInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length <= 11) {
            if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d*)/, '($1');
            }
        }

        e.target.value = value;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            whatsapp: document.getElementById('whatsapp').value,
            curso: document.getElementById('curso').value
        };

        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Redirecionando...';
        submitButton.disabled = true;

        // Função para formatar nome do curso
        function formatCursoName(cursoValue) {
            const cursoNames = {
                'categoria-b': 'Categoria B (Carro)',
                'categoria-a': 'Categoria A (Moto)',
                'categoria-ab': 'Categoria AB (Carro + Moto)',
                'aulas-habilitados': 'Aulas para Habilitados',
                'mototaxi': 'Mototaxi/Moto Frete EAD',
                'reciclagem': 'Reciclagem de CNH EAD',
                'teorico-1a': 'Curso Teórico para 1ª Habilitação',
                'ead-veiculos-emergencia': 'EAD Veículos de Emergência',
                'ead-produtos-perigosos': 'EAD Transporte de Produtos Perigosos',
                'ead-transporte-escolares': 'EAD Transporte de Escolares',
                'ead-transporte-coletivo': 'EAD Transporte Coletivo de Passageiros',
                'ead-renovacao': 'EAD Renovação',
                'ead-carga-indivisivel': 'EAD Carga Indivisível',
                'ead-atualizacao-mototaxi': 'EAD Atualização Mototáxi',
                'ead-atualizacao-motofrete': 'EAD Atualização Motofrete',
                'ead-atualizacao-veiculos-emergencia': 'EAD Atualização Veículos de Emergência',
                'ead-atualizacao-cargas-rochas': 'EAD Atualização Veículo de Cargas com Blocos de Rochas',
                'ead-atualizacao-produtos-perigosos': 'EAD Atualização Transporte Produtos Perigosos',
                'ead-atualizacao-transporte-escolares': 'EAD Atualização Transporte de Escolares',
                'ead-atualizacao-transporte-coletivo': 'EAD Atualização Transporte Coletivo de Passageiros',
                'outros': 'Outros'
            };
            
            return cursoNames[cursoValue] || cursoValue.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        }

        // Criar mensagem formatada para WhatsApp
        const cursoFormatado = formatCursoName(formData.curso);
        const mensagem = `*🚗 NOVA INSCRIÇÃO - AUTO ESCOLA ISIS*%0A%0A` +
        `👤 *NOME:* ${formData.nome.toUpperCase()}%0A` +
        `📱 *WHATSAPP:* ${formData.whatsapp}%0A` +
        `📧 *E-MAIL:* ${formData.email.toLowerCase()}%0A` +
        `📚 *CURSO:* ${cursoFormatado}%0A` +
        `📅 *DATA:* ${new Date().toLocaleDateString('pt-BR')}%0A` +
        `⏰ *HORÁRIO:* ${new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})}%0A%0A` +
        `_Formulário preenchido no site oficial_`;
        
        // Usar o próximo número do WhatsApp disponível
        const currentNumber = getNextWhatsAppNumber();
        
        // Criar link do WhatsApp
        const linkWhatsApp = `https://wa.me/${currentNumber.number}?text=${mensagem}`;
        
        // Mostrar mensagem de sucesso
        formMessage.textContent = 'Redirecionando para WhatsApp...';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';

        // Limpar formulário
        form.reset();

        // Rastrear conversão (formulário enviado)
        trackConversion('form_submission', {
            curso: formData.curso,
            source: 'website_form'
        });
        
        // Redirecionar para WhatsApp após 1 segundo
        setTimeout(() => {
            window.open(linkWhatsApp, '_blank');
            
            // Rastrear clique no WhatsApp
            trackConversion('whatsapp_redirect', {
                curso: formData.curso
            });
            
            // Atualizar mensagem
            formMessage.textContent = 'Formulário enviado! Verifique o WhatsApp.';
            
            // Esconder mensagem após 5 segundos
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 1000);

        // Restaurar botão
        setTimeout(() => {
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }, 2000);
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.card, .diferencial-item, .depoimento-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sistema de Abas para Cursos EAD
    const eadTabs = document.querySelectorAll('.ead-tab');
    const eadTabContents = document.querySelectorAll('.ead-tab-content');

    eadTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');

            // Remove active de todas as abas e conteúdos
            eadTabs.forEach(t => t.classList.remove('active'));
            eadTabContents.forEach(content => content.classList.remove('active'));

            // Adiciona active na aba clicada e no conteúdo correspondente
            tab.classList.add('active');
            const targetContent = document.getElementById(`tab-${targetTab}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // Scroll suave para a seção de cursos EAD
            const cursosEadSection = document.getElementById('cursos-ead');
            if (cursosEadSection) {
                const headerOffset = 80;
                const elementPosition = cursosEadSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
