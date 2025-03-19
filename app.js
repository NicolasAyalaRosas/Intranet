document.querySelectorAll('.enlace h3').forEach(h3 => {
    h3.addEventListener('click', () => {
        const ul = h3.nextElementSibling; // Selecciona el ul correspondiente

        // Si ya está visible, ocúltalo
        if (ul.style.display === 'block') {
            ul.style.display = 'none';
        } else {
            // Oculta todos los ul
            document.querySelectorAll('.enlace ul').forEach(otherUl => {
                otherUl.style.display = 'none';
            });

            // Muestra solo el ul correspondiente
            ul.style.display = 'block';
        }
    });
});