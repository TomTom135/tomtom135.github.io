function mostrarError(campo, mensaje) {
    const errorElemento = document.getElementById("error" + campo.charAt(0).toUpperCase() + campo.slice(1));
    errorElemento.textContent = mensaje;
    errorElemento.style.display = "block"; // Mostrar el mensaje de error
}

function ocultarError(campo) {
    const errorElemento = document.getElementById("error" + campo.charAt(0).toUpperCase() + campo.slice(1));
    errorElemento.style.display = "none"; // Ocultar el mensaje de error
}

function validarFormulario() {
    let esValido = true;

    // Validar "nombre"
    const nombre = document.getElementById("nombre").value.trim();
    if (!nombre) {
        mostrarError("Nombre", "Este campo es obligatorio.");
        esValido = false;
    } else {
        ocultarError("Nombre");
    }

    // Validar "apellido"
    const apellido = document.getElementById("apellido").value.trim();
    if (!apellido) {
        mostrarError("Apellido", "Este campo es obligatorio.");
        esValido = false;
    } else {
        ocultarError("Apellido");
    }

    // Validar "correo"
    const correo = document.getElementById("correo").value.trim();
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!correo) {
        mostrarError("Correo", "Este campo es obligatorio.");
        esValido = false;
    } else if (!regexCorreo.test(correo)) {
        mostrarError("Correo", "Por favor, ingresa un correo electrónico válido.");
        esValido = false;
    } else {
        ocultarError("Correo");
    }

    // Validar "comentarios"
    const comentarios = document.getElementById("comentarios").value.trim();
    if (comentarios.length > 500) {
        mostrarError("Comentarios", "Los comentarios no deben superar los 500 caracteres.");
        esValido = false;
    } else {
        ocultarError("Comentarios");
    }

    // Si algún campo es inválido, evitamos el envío del formulario
    return esValido;
}