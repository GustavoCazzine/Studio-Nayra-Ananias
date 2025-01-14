// Efeito de transição entre slides
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