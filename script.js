// Seleciona os elementos
const sidebarToggle = document.getElementById('sidebar-toggle'); // botão para abrir o menu
const sidebarMenu = document.getElementById('sidebar-menu'); // menu lateral
const overlay = document.getElementById('overlay'); // o overlay
const menuSection = document.querySelectorAll('.menu-section');  // lista com os 4 <li> do menu lateral

// para abrir o menu lateral
sidebarToggle.addEventListener('click', () => {
    sidebarMenu.classList.add('open');
    overlay.classList.add('active');
});

// para fechar o menu lateral
function fecharMenu() {
    sidebarMenu.classList.remove('open');
    overlay.classList.remove('active');
}

overlay.addEventListener('click', fecharMenu); // para quando o usuário clicar fora do menu lateral

menuSection.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); // Impede a rolagem imediata
            setTimeout(() => {
                fecharMenu();
                window.location.href = item.getAttribute("href"); // procura a section correspondente
            }, 100); // atraso de 1s pra tirar o menu
    });
});

// Pra remover alguns itens do html (section tecnologia)
// Nem precisava disso tudo, mas fiz assim pra caso testem pelo devtools do google
let elementoRemovido = false;
window.addEventListener("resize", function () {
    if (window.innerWidth > 600 && elementoRemovido == true) {
        window.location.reload();
    } else if (window.innerWidth <= 600) {
        document.querySelectorAll(".duplicado").forEach(i => i.remove());
        elementoRemovido = true;
    }
});

// Pro formulário não carregar o php, mas mostrar um aviso no topo da tela como se tivesse dado certo
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário
    window.alert("Formulário enviado com sucesso!"); 
    this.reset(); // reseta o formulário
});

