// Menu mobile
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fechar menu ao clicar em um link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Atualizar ano atual no rodapé
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Efeito de rolagem para o cabeçalho
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        header.style.padding = '10px 0';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.padding = '15px 0';
    }
});

// Animação para elementos quando entram na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.service-card, .feature, .info-item').forEach(el => {
    observer.observe(el);
});

// Adicionar classe de animação após um delay para os cards de serviço
setTimeout(() => {
    document.querySelectorAll('.service-card').forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate');
        }, index * 100);
    });
}, 300);

// Ajustar o botão do WhatsApp para dispositivos móveis
function adjustWhatsAppButton() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (window.innerWidth <= 576) {
        whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    } else {
        whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i><span>Fale conosco</span>';
    }
}

// Executar ao carregar e ao redimensionar a janela
window.addEventListener('load', adjustWhatsAppButton);
window.addEventListener('resize', adjustWhatsAppButton);

// Adicionar efeito de hover nos botões
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Mensagem de confirmação para links externos (opcional)
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Para links do WhatsApp, não mostrar mensagem
        if (!this.href.includes('wa.me') && !this.href.includes('whatsapp.com')) {
            const confirmLeave = confirm('Você está saindo do site da AutoMaster. Deseja continuar?');
            if (!confirmLeave) {
                e.preventDefault();
            }
        }
    });
});