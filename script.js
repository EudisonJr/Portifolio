document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Adiciona um ouvinte de evento de clique ao botão do hambúrguer
    hamburger.addEventListener('click', function() {
        // Alterna a classe 'active' no hambúrguer para animá-lo
        hamburger.classList.toggle('active');
        // Alterna a classe 'active' no menu de navegação para mostrá-lo/ocultá-lo
        navMenu.classList.toggle('active');
    });

    // Opcional: Fechar o menu quando um item é clicado (útil em single-page applications)
    const navLinks = document.querySelectorAll('.nav-list li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
});
