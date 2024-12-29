// Drops

function toggleDropdown(button) {
    // Fechar todos os outros dropdowns
    document.querySelectorAll('.dropmenus').forEach(menu => {
        if (menu !== button.nextElementSibling) {
            menu.style.display = 'none';
        }
    });

    // Alternar o dropdown clicado
    button.nextElementSibling.style.display = button.nextElementSibling.style.display === 'block' ? 'none' : 'block';
}

// Fechar o dropdown ao clicar fora
document.addEventListener('click', function (event) {
    if (!event.target.closest('.item')) {
        document.querySelectorAll('.dropmenus').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});

// Trocar entre TABS

document.addEventListener("DOMContentLoaded", () => {
    // Inicializar as tabs
    const tabs = document.querySelectorAll(".tabs li");
    const contents = document.querySelectorAll(".container-voos > div");

    // Definir o estado inicial
    tabs.forEach((tab, index) => {
        if (index === 0) {
            tab.classList.add("active");
            contents[index].style.display = "block";
        } else {
            contents[index].style.display = "none";
        }
    });

    // Adicionar os eventos de clique nas abas
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabs.forEach(item => item.classList.remove("active"));
            tab.classList.add("active");

            contents.forEach(content => content.style.display = "none");
            contents[index].style.display = "block";
        });
    });
});







// Alterar entre + e - 

document.querySelectorAll('.item button').forEach(button => {
    button.addEventListener('click', function () {
        const plus = this.querySelector('.plus');
        if (plus) {
            // Alterna entre "+" e "-"
            plus.textContent = plus.textContent === '+' ? '-' : '+';
        }
    });
});




//Dropmenus1

const label = document.getElementById("voo-label");

// Mostrar label

document.getElementById("voo").addEventListener("focus", () => {
    if (label) label.style.display = "block"; 
});

// Esconder label

document.getElementById("voo").addEventListener("blur", () => {
    if (label) label.style.display = "none"; // Oculta o label
});





//Dropmenus 2.1

const label2 = document.getElementById("codigo-label");

// Mostrar label

document.getElementById("codigo").addEventListener("focus", () => {
    if (label2) label2.style.display = "block"; 
});

// Esconder label

document.getElementById("codigo").addEventListener("blur", () => {
    if (label2) label2.style.display = "none";
});

//Dropmenus 2.2

const label3 = document.getElementById("sobrenome-label");

// Mostrar label

document.getElementById("sobrenome").addEventListener("focus", () => {
    if (label3) label3.style.display = "block"; 
});

// Esconder label

document.getElementById("sobrenome").addEventListener("blur", () => {
    if (label3) label3.style.display = "none";
});



// Alerta condiçoes

const alerta = document.getElementById('alerta');
const openalertaButton = document.getElementById('open');
const closealertaButton = document.querySelector('.close');

// Abre a janela ao clicar no botão
openalertaButton.addEventListener('click', () => {
alerta.style.display = 'flex';
});

        // Fecha a janela ao clicar no "x"
closealertaButton.addEventListener('click', () => {
    alerta.style.display = 'none';
});

        // Fecha a janela ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === alerta) {
        alerta.style.display = 'none';
    }
});