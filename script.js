// Seleciona os elementos
const sidebarToggle = document.getElementById('sidebar-toggle'); // botão para abrir o menu
const sidebarMenu = document.getElementById('sidebar-menu'); // menu lateral
const overlay = document.getElementById('overlay'); // o overlay
const menuSection = document.querySelectorAll('.menu-section'); // 

// para abrir o menu
sidebarToggle.addEventListener('click', () => {
    sidebarMenu.classList.add('open');
    overlay.classList.add('active');
});

// para fechar o menu
function fecharMenu() {
    sidebarMenu.classList.remove('open');
    overlay.classList.remove('active');
}

overlay.addEventListener('click', fecharMenu); // quando o usuário clicar fora do menu lateral

menuSection.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); // Impede a rolagem imediata
            setTimeout(() => {
                fecharMenu();
                window.location.href = item.getAttribute("href"); // procura a section correspondente
            }, 100); // atraso de 1s
    });
});
