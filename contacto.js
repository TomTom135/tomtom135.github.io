function validarFormulario() {
    //recibe lo ingresado en el formulario
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const comentarios = document.getElementById('comentarios').value.trim(); 
    const mensaje = document.getElementById('mensaje');

    //para limpiar el mensaje anterior
    mensaje.textContent = '';

    //validar que nada este vacio
    if (!nombre || !apellido || !correo) {
        mensaje.textContent = 'Por favor, completa todos los campos obligatorios.';
        return false; 
    }

    //validar nombre
    const nombreApellidoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!nombreApellidoRegex.test(nombre) || !nombreApellidoRegex.test(apellido)) {
        mensaje.textContent = 'El nombre y el apellido solo pueden contener letras.';
        return false; 
    }

    //validar correo
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        mensaje.textContent = 'Por favor, ingresa un correo electrónico válido.';
        return false; 
    }

    //validar comentario (cuido que no pasen los 500 caracteres, es comentario no novela)
    if (comentarios.length > 500) { 
        mensaje.textContent = 'Los comentarios no pueden exceder los 500 caracteres.';
        return false;
    }

    //solo sale una alerta confirmando que se realizo correctamente el formulario y se enviaron los datos
    alert('Formulario enviado correctamente.');
    return true; //recien aca deja que envies el formulario, solo si cumple las demas validaciones
}