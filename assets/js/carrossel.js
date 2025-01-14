const swiper = new Swiper('.swiper', {
    slidesPerView: 1, // Exibe apenas 1 slide por vez
    spaceBetween: 10, // Espaço entre os slides
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

const swiperContainer = document.querySelector('.swiper-wrapper-container');

swiperContainer.addEventListener('click', (event) => {
    // Verifica se o clique ocorreu fora dos cards
    if (!event.target.closest('.feedback-container')) {
        swiper.slideNext(); // Avança para o próximo slide
    }
});






