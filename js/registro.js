/*function validarForm() {

    var expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegApellidos = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegCorreo = /^\w+@(\w+\.)+\w{2,4}$/;
    var expRegTelefono = /^(?:(?:\+?[0-9]{2,4})?[ ]?[6789][0-9 ]{8,13})$/;
    var expRegDni = /^\d{8}[a-zA-Z]$/;

    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var correo = document.getElementById("email");
    var telefono = document.getElementById("tlf");
    var dni = document.getElementById("dni");
    var fnac = document.getElementById("fecnac");
    var dir = document.getElementById("dir");


    //Campo nombre
    if (!nombre.value) {
        alert("El campo nombre es requerido");
        nombre.focus();
        return false;
    }
    if (!expRegNombre.exec(nombre.value)) {
        alert("El campo nombre admite letras y espacios.")
        nombre.focus();
        return false;
    }
    //Campo apellido
    if (!apellidos.value) {
        alert("El campo apellidos es requerido");
        apellidos.focus();
        return false;
    }
    if (!expRegApellidos.exec(apellidos.value)) {
        alert("El campo apellidos admite letras y espacios.")
        apellidos.focus();
        return false;
    }

    //campo email
    if (!correo.value) {
        alert("El campo correo es requerido");
        correo.focus();
        return false;
    }
    if (!expRegCorreo.exec(correo.value)) {
        alert("El campo correo no tiene el formato correcto.")
        correo.focus();
        return false;
    }
    //campo Telefono
    if (!telefono.value) {
        alert("El campo telefono es requerido");
        telefono.focus();
        return false;
    }
    if (!expRegTelefono.exec(telefono.value)) {
        alert("El campo telefono no tiene el formato correcto.")
        telefono.focus();
        return false;
    }
    //campo DNI
    if (!dni.value) {
        alert("El campo DNI es requerido");
        dni.focus();
        return false;
    }
    if (!expRegDni.exec(dni.value)) {
        alert("El campo dni no tiene el formato correcto.")
        dni.focus();
        return false;
    }
    //campo Fecha
    if (!fnac.value) {
        alert("La Fecha de nacimiento es requerido");
        fnac.focus();
        return false;
    }
    //campo Direccion
    if (!dir.value) {
        alert("La Direccion es requerido");
        dir.focus();
        return false;
    }
    return true;
}

// asociacion del boton enviar con el formulario en html//
window.onload = function () {
    var formulario = document.getElementById("favanzado");
    formulario.onsubmit = validarForm;
}
function passvalues(){
    var nombre=document.getElementById("nombre").value;
    localStorage.setItem("text",nombre);
    return false;
}*/
var expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
var expRegApellidos = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
var expRegCorreo = /^\w+@(\w+\.)+\w{2,4}$/;
var expRegTelefono = /^(?:(?:\+?[0-9]{2,4})?[ ]?[6789][0-9 ]{8,13})$/;
var expRegDni = /^\d{8}[a-zA-Z]$/;

var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var correo = document.getElementById("email");
var telefono = document.getElementById("tlf");
var dni = document.getElementById("dni");
var fnac = document.getElementById("fecnac");
var dir = document.getElementById("dir");
let semaforo = false;
$("#nombre").change(function () {

    if (!$("#nombre").val()) {
        $("#errornom").show();
        semaforo = false;
    } else if (!expRegNombre.exec(nombre.value)) {
        $("#errornom").show();
        nombre.focus();    
        semaforo = false;    
    } else {
        $("#errornom").hide();
        semaforo = true;
    }
});
$("#apellidos").change(function () {

    if (!$("#apellidos").val()) {
        $("#errorap").show();
        semaforo = false; 
    } else if(!expRegApellidos.exec(apellidos.value)){
        $("#errorap").show();
        semaforo = false; 
        apellidos.focus(); 
    } else {
        $("#errorap").hide();
        semaforo = true;        
    }
});
$("#dni").change(function () {

    if (!$("#dni").val()) {
        $("#errordni").show();
        semaforo = false; 
    } else if (!expRegDni.exec(dni.value)){
        $("#errordni").show();
        semaforo = false; 
        dni.focus();
    } else {
        $("#errordni").hide();
        semaforo = true;    
    }
});
$("#dir").change(function () {

    if (!$("#dir").val()) {
        $("#errordir").show();
        semaforo = false; 
    } else {
        $("#errordir").hide();
        semaforo = true;    
    }
});
$("#email").change(function () {

    if (!$("#email").val()) {
        $("#errorem").show();
        semaforo = false; 
    } else if(!expRegCorreo.exec(correo.value)) {
        $("#errorem").show();
        correo.focus();
        semaforo = false; 
    } else {
        $("#errorem").hide();
        semaforo = true;    
    }
});
$("#tlf").change(function () {

    if (!$("#tlf").val()) {
        $("#errortlf").show();
        semaforo = false; 
    } else if(!expRegTelefono.exec(telefono.value)) {
        $("#errortlf").show();
        telefono.focus();
        semaforo = false; 
    } else {
        $("#errortlf").hide();   
        semaforo = true;         
    }
});
function passvalues(){
    var nombre=document.getElementById("nombre").value;
    localStorage.setItem("text",nombre);
    return false;
}
if(semaforo==true){
    $("#submit").prop('disabled', false)
}
