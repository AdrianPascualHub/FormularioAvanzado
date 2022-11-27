document.querySelector('.card-number-input').oninput = () => {
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () => {
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}
function validarForm() {

    var expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;    
    var expRegtarjeta = /^(?:(\d{4}\s?){4}|(\d{4,6}\s?){3})$/;
    var expRegCvv = /^[0-9]{3}$/;
    var nombre = document.getElementById("nombre");
    var numero = document.getElementById("numero");
    var cvv = document.getElementById("cvv");
    

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
    if (!numero.value) {
        alert("El Numero es requerido");
        numero.focus();
        return false;
    }
    if (!expRegtarjeta.exec(numero.value)) {
        alert("Formato incorrecto, usa una visa por favor.")
        numero.focus();
        return false;
    }
    if (!cvv.value) {
        alert("El cvv es requerido");
        cvv.focus();
        return false;
    }
    if (!expRegCvv.exec(cvv.value)) {
        alert("Formato incorrecto")
        cvv.focus();
        return false;
    }
    
    return true;
}

// asociacion del boton enviar con el formulario en html//
window.onload = function () {
    var formulario = document.getElementById("fpago");
    formulario.onsubmit = validarForm;
}

document.getElementById('submit').addEventListener("click", function(){
    var nombre = document.getElementById("nombre").value;    
    localStorage.setItem("nomc", nombre).value;
    
});
document.getElementById('submit').addEventListener("click", function(){    
    var numero = document.getElementById("numero").value;    
    localStorage.setItem("nc", numero).value;
});
document.getElementById('submit').addEventListener("click", function(){    
    var cvv = document.getElementById("cvv").value;    
    localStorage.setItem("cvv", cvv).value;
});