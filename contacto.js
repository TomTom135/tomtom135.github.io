//ERRORES
function mostrarError(campo, mensaje) {
    const errorElemento = document.getElementById("error" + campo.charAt(0).toUpperCase() + campo.slice(1));
    errorElemento.textContent = mensaje;
    errorElemento.style.display = "block"; 
  }
  
  
  function ocultarError(campo) {
    const errorElemento = document.getElementById("error" + campo.charAt(0).toUpperCase() + campo.slice(1));
    errorElemento.style.display = "none"; 
  }
  
  
  function validarFormulario() {
    let esValido = true;
  
    
    document.getElementById("mensajes").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
  
    
    const nombre = document.getElementById("nombre").value.trim();
    const regexNombre = /^[^\d]*$/;  
    if (!nombre) {
      mostrarError("Nombre", "Ingrese un nombre");
      esValido = false;
    } else if (!regexNombre.test(nombre)) {
      mostrarError("Nombre", "El nombre no debe contener números");
      esValido = false;
    } else {
      ocultarError("Nombre");
    }
  
    
    const apellido = document.getElementById("apellido").value.trim();
    if (!apellido) {
      mostrarError("Apellido", "Ingrese un apellido");
      esValido = false;
    } else {
      ocultarError("Apellido");
    }
  
    
    const correo = document.getElementById("correo").value.trim();
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!correo) {
      mostrarError("Correo", "Ingrese un correo electrónico");
      esValido = false;
    } else if (!regexCorreo.test(correo)) {
      mostrarError("Correo", "Por favor, ingrese un correo electrónico válido");
      esValido = false;
    } else {
      ocultarError("Correo");
    }
  
    
    const comentarios = document.getElementById("comentarios").value.trim();
    if (comentarios.length > 500) {
      mostrarError("Comentarios", "Los comentarios no deben superar los 500 caracteres");
      esValido = false;
    } else {
      ocultarError("Comentarios");
    }
  
   
    if (esValido) {
      mostrarDatos(nombre, apellido, correo, comentarios);
    }
  
    
    return false;
  }
  
  //MOSTRAR DATOS
  function mostrarDatos(nombre, apellido, correo, comentarios) {
    const resultadoDiv = document.getElementById("resultado");
  
    
    const datosContainer = document.createElement("div");
    datosContainer.style.marginTop = "20px";
    
    
    const titulo = document.createElement("h2");
    titulo.textContent = "Datos del Formulario:";
    datosContainer.appendChild(titulo);
  
    
    const datosList = document.createElement("ul");
  
    const liNombre = document.createElement("li");
    liNombre.textContent = "Nombre: " + nombre;
    datosList.appendChild(liNombre);
  
    const liApellido = document.createElement("li");
    liApellido.textContent = "Apellido: " + apellido;
    datosList.appendChild(liApellido);
  
    const liCorreo = document.createElement("li");
    liCorreo.textContent = "Correo: " + correo;
    datosList.appendChild(liCorreo);
  
    const liComentarios = document.createElement("li");
    liComentarios.textContent = "Comentarios: " + comentarios;
    datosList.appendChild(liComentarios);
  
   
    datosContainer.appendChild(datosList);
  
    
    resultadoDiv.appendChild(datosContainer);
  }
  