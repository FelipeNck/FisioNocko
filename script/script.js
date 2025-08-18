document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Altera o ícone do botão
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio tradicional do formulário
    
    // Captura os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Mapeia os serviços para nomes mais amigáveis
    const serviceNames = {
        'dor-cronica': 'Tratamento para Dor Crônica',
        'traumato': 'Traumato-ortopedia',
        'esportiva': 'Fisioterapia Esportiva',
        'escoliose': 'Tratamento para Escoliose',
        'outro': 'Outro'
    };
    
    // Cria a mensagem para o WhatsApp
    const whatsappMessage = `
        *Nova mensagem do site FisioNocko*
        
        *Nome:* ${name}
        *E-mail:* ${email}
        *Telefone:* ${phone || 'Não informado'}
        *Serviço de interesse:* ${serviceNames[service] || service}
        
        *Mensagem:*
        ${message}
    `;
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Número de telefone (substitua pelo número correto)
    const phoneNumber = '5521997530137'; // Número com código do país e DDD
    
    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
});