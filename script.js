// Seleciona os elementos
const sidebarToggle = document.getElementById('sidebar-toggle'); // botão para abrir o menu
const sidebarMenu = document.getElementById('sidebar-menu'); // menu lateral
const overlay = document.getElementById('overlay'); // o overlay

// Adiciona evento de clique no botão para abrir o menu
sidebarToggle.addEventListener('click', () => {
    sidebarMenu.classList.add('open');
    overlay.classList.add('active');
});

// Adiciona evento de clique no overlay para fechar o menu
overlay.addEventListener('click', () => {
    sidebarMenu.classList.remove('open');
    overlay.classList.remove('active');
});
