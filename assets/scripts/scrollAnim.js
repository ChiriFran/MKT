window.addEventListener('scroll', () => {
    const proyectos = document.getElementById('proyectos');
    const proyectosTitle = document.getElementById('proyectosTitle');
    const proyectosRect = proyectos.getBoundingClientRect();
    const scrollPosition = window.scrollY;
    const triggerPoint = proyectosTitle.offsetTop - window.innerHeight / 1;

    // Verificamos si #proyectos está visible en el viewport
    const isProyectosVisible = proyectosRect.top < window.innerHeight && proyectosRect.bottom > 1;

    if (isProyectosVisible) {
        // Calcula la rotación basada en la posición de scroll
        const scrollOffset = window.scrollY - proyectosRect.top;
        const rotationAngle = scrollOffset * 0.1; // Ajusta la velocidad de rotación multiplicando

        // Aplicar la rotación solo si está visible
        proyectos.style.setProperty('--after-rotation', `rotate(${rotationAngle}deg)`);
    } else {
        // Resetea la rotación si el contenedor no está visible
        proyectos.style.setProperty('--after-rotation', 'rotate(0deg)');
    }

    // Añadir o quitar clase para #proyectosTitle
    if (scrollPosition > triggerPoint) {
        proyectosTitle.classList.add('scroll-arranged');
    } else {
        proyectosTitle.classList.remove('scroll-arranged');
    }
});
