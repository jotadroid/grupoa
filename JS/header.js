// Función para cargar el header desde un archivo externo
function load_header() {
    fetch('../HTML/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            initScrollListener();  // Inicia el listener después de cargar el header
        })
        .catch(error => console.error('Error al cargar el header:', error));
}

// Función para manejar el comportamiento del header al hacer scroll
function initScrollListener() {
    let lastScrollTop = 0;
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll hacia abajo
            header.classList.add('hidden');
        } else {
            // Scroll hacia arriba
            header.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    });
}

// Llamada a la función para cargar el header cuando se carga la página
document.addEventListener('DOMContentLoaded', load_header);