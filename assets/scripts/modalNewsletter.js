// Obtener elementos del DOM
const dialog = document.getElementById("myDialog");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalContent = document.querySelector(".modal-content"); // Asumiendo que tienes una clase para el contenido del modal

// Función para deshabilitar el scroll
function disableScroll() {
    document.body.style.overflow = 'hidden'; // Deshabilitar el scroll
}

// Función para habilitar el scroll
function enableScroll() {
    document.body.style.overflow = ''; // Habilitar el scroll
}

// Abrir el modal cuando se hace clic en el botón
openModalBtn.onclick = function () {
    disableScroll(); // Deshabilitar el scroll
    dialog.showModal(); // Muestra el modal
    setTimeout(() => {
        dialog.classList.remove('close'); // Asegurarse de que la clase de cierre no esté presente
        dialog.classList.add('open'); // Añadir clase para activar animación de entrada
    }, 10); // Agregar un pequeño retraso para permitir la transición
}

// Cerrar el modal cuando se hace clic en el botón de cerrar
closeModalBtn.onclick = function () {
    closeModal();
}

// Acción del botón de acción
document.getElementById("actionBtn").onclick = function () {
    alert("Acción ejecutada!");
    closeModal();
}

// Función para cerrar el modal
function closeModal() {
    dialog.classList.remove('open'); // Remover clase para desactivar animación
    dialog.classList.add('close'); // Añadir clase de cierre para la animación de salida
    setTimeout(() => {
        dialog.close(); // Cierra el modal después de la animación
        enableScroll(); // Habilitar el scroll
    }, 300); // Debe coincidir con la duración de la transición CSS
}

// Cerrar el modal al hacer clic fuera del contenido
dialog.addEventListener('click', function (event) {
    // Verifica si el clic fue fuera del contenido del modal
    if (!modalContent.contains(event.target)) {
        closeModal();
    }
});