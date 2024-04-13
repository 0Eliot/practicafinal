// Importar la función o módulo que queremos probar
const mostrarMensaje = require('./index');

// Describir la suite de pruebas
describe('Prueba de la Página Web', () => {
    // Prueba unitaria para verificar que la página muestra "Hola Mundo"
    test('La página muestra correctamente "Hola Mundo"', () => {
        // Simular el entorno de la página web
        document.body.innerHTML = '<div id="mensaje"></div>';
        
        // Llamar a la función que muestra el mensaje
        mostrarMensaje();

        // Verificar si el mensaje se muestra correctamente
        expect(document.getElementById('mensaje').innerText).toBe('¡Hola Mundo!');
    });
});
