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

        // Criar mensagem formatada para WhatsApp
        const mensagem = `*🚗 NOVA INSCRIÇÃO - AUTO ESCOLA ISIS*%0A%0A` +
        `👤 *NOME:* ${formData.nome.toUpperCase()}%0A` +
        `📱 *WHATSAPP:* ${formData.whatsapp}%0A` +
        `📧 *E-MAIL:* ${formData.email.toLowerCase()}%0A` +
        `📚 *CURSO:* ${formData.curso.replace('categoria-', 'Categoria ').toUpperCase()}%0A` +
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

        // Redirecionar para WhatsApp após 1 segundo
        setTimeout(() => {
            window.open(linkWhatsApp, '_blank');
            
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
});
