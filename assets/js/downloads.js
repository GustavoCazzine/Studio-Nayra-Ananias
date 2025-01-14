//Funcionalidade para baixar arquivos
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