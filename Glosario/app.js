    // Función para realizar la búsqueda en tiempo real
    function searchGlossary() {
        // Obtén el valor del campo de búsqueda y lo convierte a minúsculas
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();

        // Obtén todos los términos (dt) y definiciones (dd) del glosario
        const terms = document.querySelectorAll('dt');
        const definitions = document.querySelectorAll('dd');

        // Recorre todos los términos y definiciones
        terms.forEach((term, index) => {
            const termText = term.textContent.toLowerCase();
            const definitionText = definitions[index].textContent.toLowerCase();

            // Si el término o la definición coinciden con la búsqueda, muestra el elemento
            if (termText.includes(searchTerm) || definitionText.includes(searchTerm)) {
                term.style.display = 'block';
                definitions[index].style.display = 'block';
            } else {
                // Si no coincide, oculta el término y la definición
                term.style.display = 'none';
                definitions[index].style.display = 'none';
            }
        });
    }

    // Escucha el evento 'input' en el campo de búsqueda para realizar la búsqueda en tiempo real
    document.getElementById('searchInput').addEventListener('input', function() {
        searchGlossary();
    });