document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inicializar AOS
AOS.init();

// Código para el Modal
const modal = document.getElementById("modal");
const span = document.getElementsByClassName("close")[0];

document.querySelectorAll('.proyectos__contenedor').forEach(item => {
    item.addEventListener('click', event => {
        const title = item.querySelector('.proyectos__nombre').innerText;
        const description = item.querySelector('.proyectos__descripcion').innerText;

        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-description').innerText = description;

        modal.style.display = "block";
    });
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
