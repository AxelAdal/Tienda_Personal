// Función para mostrar la ventana emergente
function mostrarVentanaEmergente() {
    var ventanaEmergente = document.getElementById('ventanaEmergente');
    ventanaEmergente.style.display = 'block';
}

// Función para cerrar la ventana emergente
function cerrarVentanaEmergente() {
    var ventanaEmergente = document.getElementById('ventanaEmergente');
    ventanaEmergente.style.display = 'none';
}

// Agregar evento de clic al enlace de contacto
var enlaceContacto = document.getElementById('contactoEnlace');
enlaceContacto.addEventListener('click', mostrarVentanaEmergente);
