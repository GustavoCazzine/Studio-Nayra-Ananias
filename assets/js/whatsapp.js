//Funcionalidade para o botão do WhatsApp
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
