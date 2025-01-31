// Transição entre slides
document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');
    const minWidthForContentScroll = 1024;

    function handleScroll(element) {
        var courses = document.querySelectorAll('.course');
        courses.forEach(function(course) {
            var rect = course.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                course.classList.add('visible');
            }
        });
    }

    function addScrollListener() {
        if (window.innerWidth >= minWidthForContentScroll) {
            // Para telas de desktop, escuta o scroll no conteúdo específico
            content.addEventListener('scroll', function() {
                handleScroll(content);
            });
            // Remove listener de scroll global, se existir
            window.removeEventListener('scroll', function() {
                handleScroll(window);
            });
        } else {
            // Para telas menores, escuta o scroll global
            window.addEventListener('scroll', function() {
                handleScroll(window);
            });
            // Remove listener de scroll no conteúdo, se existir
            content.removeEventListener('scroll', function() {
                handleScroll(content);
            });
        }
    }

    // Adiciona listener inicialmente
    addScrollListener();

    // Adicionar event listener para redimensionamento da tela
    window.addEventListener('resize', addScrollListener);
});

//Botão do WhatsApp
document.addEventListener('DOMContentLoaded', function () {
    const whatsappButton = document.querySelector('.whatsapp-button');
    const whatsappTooltip = document.querySelector('.whatsapp-tooltip');
    let tooltipShown = false; // Variável para controlar a exibição do tooltip

    function toggleWhatsAppButton() {
        if (window.scrollY > 100) { // Mostra o botão após rolar 100px
            whatsappButton.classList.add('visible');
            whatsappButton.classList.remove('hidden');

            // Exibe a tooltip somente na primeira vez
            if (!tooltipShown) {
                whatsappTooltip.classList.add('visible');
                tooltipShown = true; // Marca que a tooltip já foi exibida

                // Adiciona animação de saída após 2 segundos
                setTimeout(() => {
                    whatsappTooltip.classList.add('fade-out'); // Adiciona classe para saída

                    // Remove a classe de visibilidade após a animação
                    setTimeout(() => {
                        whatsappTooltip.classList.remove('visible', 'fade-out');
                    }, 500); // Tempo da animação de saída
                }, 2000);
            }
        }
    }

    // Adiciona o evento de rolagem
    window.addEventListener('scroll', toggleWhatsAppButton);

    // Define o estado inicial
    toggleWhatsAppButton();
});

// Baixar arquivos
document.addEventListener('DOMContentLoaded', function() {
    const downloadLinks = document.querySelectorAll('.download-link');

    downloadLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Evita o comportamento padrão do link (evita navegação)
            event.preventDefault();
            
            // Recupera o caminho do PDF do atributo 'data-pdf' do link
            const pdfPath = link.getAttribute('data-pdf');

            // Criação de um link temporário para o download
            const a = document.createElement('a');
            a.href = pdfPath;  // Define o caminho do arquivo PDF
            a.download = pdfPath.split('/').pop();  // Extrai o nome do arquivo (exemplo: 'documento1.pdf')

            // Simula o clique para iniciar o download
            document.body.appendChild(a); // Adiciona o link ao DOM temporariamente
            a.click();  // Simula o clique para download

            // Remove o link temporário após o clique
            document.body.removeChild(a);
        });
    });
});

// Carrossel
const swiper = new Swiper('.swiper', {
    slidesPerView: 1, // Exibe apenas 1 slide por vez
    spaceBetween: 40, // Espaço entre os slides
    loop: true, // Faz o carrossel continuar indefinidamente
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },  
    autoplay: {
        delay: 3000, // Tempo em milissegundos (5 segundos)
        disableOnInteraction: false, // Continua mesmo após interação do usuário
    },
});

document.addEventListener("scroll", () => {
    const socialBar = document.getElementById("socialBar");

    if (window.scrollY > 100) {
      // Adiciona a classe para exibir a barra ao rolar
        socialBar.classList.add("visible");
    }
});