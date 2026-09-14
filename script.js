/**
 * Redirige al usuario al chat de WhatsApp con un mensaje predeterminado.
 * 
 * @function abrirWhatsApp
 * @param {string} telefono - El número de teléfono con el código de país.
 * @param {string} mensaje - El texto precargado que aparecerá en el chat del cliente.
 * @returns {void} No retorna ningún valor.
 */
function abrirWhatsApp(telefono, mensaje) {
    const mensajeCodificado = encodeURIComponent(mensaje);
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensajeCodificado}`;
    window.open(url, '_blank');
}

/**
 * Inicializa todos los carruseles de la página, permitiendo navegar entre
 * las imágenes usando los botones de "anterior" y "siguiente".
 * Funciona dinámicamente sin importar cuántos carruseles pongas.
 * 
 * @function iniciarCarruseles
 * @returns {void} No retorna ningún valor.
 */
function iniciarCarruseles() {
    // Busca todos los contenedores que tengan la clase 'carousel'
    const carruseles = document.querySelectorAll('.carousel');

    carruseles.forEach(carrusel => {
        const imagenes = carrusel.querySelectorAll('.carousel-images img');
        const btnAnterior = carrusel.querySelector('.prev');
        const btnSiguiente = carrusel.querySelector('.next');
        let indiceActual = 0; // Controla qué imagen se está mostrando en ESTE carrusel

        // Si el contenedor no tiene imágenes o botones, lo ignoramos para evitar errores
        if (imagenes.length === 0 || !btnAnterior || !btnSiguiente) return;

        /**
         * Función interna para cambiar la imagen activa.
         * @param {number} nuevoIndice - La posición de la nueva imagen a mostrar.
         */
        const mostrarImagen = (nuevoIndice) => {
            // Quitamos la clase 'active' de la imagen actual para ocultarla
            imagenes[indiceActual].classList.remove('active');
            
            // Calculamos el nuevo índice. El módulo (%) permite que si llegamos 
            // al final, regrese a la primera imagen de forma cíclica.
            indiceActual = (nuevoIndice + imagenes.length) % imagenes.length;
            
            // Le agregamos la clase 'active' a la nueva imagen para mostrarla
            imagenes[indiceActual].classList.add('active');
        };

        // Eventos de click para los botones
        btnAnterior.addEventListener('click', () => mostrarImagen(indiceActual - 1));
        btnSiguiente.addEventListener('click', () => mostrarImagen(indiceActual + 1));
    });
}

/**
 * Event Listener principal. Espera a que el HTML cargue para asignar funcionalidades.
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Iniciar botón de WhatsApp
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener('click', () => {
            const miNumero = "525534941157"; 
            const miMensaje = "Hola quiero una cotización";
            abrirWhatsApp(miNumero, miMensaje);
        });
    }

    // 2. Iniciar todos los carruseles de la página
    iniciarCarruseles();
});