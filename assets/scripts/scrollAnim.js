window.addEventListener('scroll', () => {
    const proyectosTitle = document.getElementById('proyectosTitle');
    const scrollPosition = window.scrollY;
    const triggerPoint = proyectosTitle.offsetTop - window.innerHeight / 1;

    if (scrollPosition > triggerPoint) {
        proyectosTitle.classList.add('scroll-arranged');
    } else {
        proyectosTitle.classList.remove('scroll-arranged');
    }
});
