// correo.js

// Inicialización de EmailJS
emailjs.init("QCyBVbXIsq9hBEthp");

// Función para enviar el formulario
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            from_cell: document.getElementById('cell').value,
            message: document.getElementById('message').value
        };

        // Envío del formulario utilizando EmailJS
        emailjs.send('service_lj704tg', 'template_9idaai9', formData)
            .then(function(response) {
                console.log('Correo enviado con éxito', response);
                document.getElementById('response-message').textContent = '¡El mensaje se envió correctamente!';
                document.getElementById('contact-form').reset(); // Limpiar el formulario después del envío
            }, function(error) {
                console.log('Error al enviar el correo', error);
                document.getElementById('response-message').textContent = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
            });
    });
});
