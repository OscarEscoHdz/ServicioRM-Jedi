/**
 * Redirige al usuario al chat de WhatsApp con un mensaje predeterminado.
 * 
 * @function abrirWhatsApp
 * @param {string} telefono - El número de teléfono con el código de país (Ej. 525534941157).
 * @param {string} mensaje - El texto precargado que aparecerá en el chat del cliente.
 * @returns {void} No retorna ningún valor. Abre una nueva pestaña en el navegador.
 */
function abrirWhatsApp(telefono, mensaje) {
    // Codificamos el mensaje para que los espacios y caracteres especiales se envíen bien en la URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Construimos la URL de la API de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensajeCodificado}`;
    
    // Abrimos la URL en una nueva pestaña
    window.open(url, '_blank');
}

/**
 * Event Listener principal que espera a que el documento HTML esté completamente cargado.
 * Busca el botón por su ID y le asigna la funcionalidad de la función abrirWhatsApp.
 */
document.addEventListener('DOMContentLoaded', () => {
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener('click', () => {
            // Número basado en el flyer (con prefijo 52 de México)
            const miNumero = "525534941157"; 
            const miMensaje = "Hola quiero una cotización";
            
            // Llamamos a la función con los parámetros necesarios
            abrirWhatsApp(miNumero, miMensaje);
        });
    }
});