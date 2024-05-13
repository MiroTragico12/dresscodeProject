document.getElementById('open-btn-menu').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var logoText = document.getElementById('logo-text');
    
    sidebar.classList.toggle('open-sidebar');
    
    if (sidebar.classList.contains('open-sidebar')) {
        setTimeout(function() {
            logoText.classList.remove('hide-text');
        }, 200); // Adicionando um pequeno atraso (500ms) para garantir que o texto do logo seja exibido após a transição
    } else {
        logoText.classList.add('hide-text');
    }
});
