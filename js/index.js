(function () {
    "use strict"

    let registro = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function () {
        
        //datos usuario
        let nombre = document.getElementById('nombre');
        let apelliddo = document.getElementById('apellido');
        let email = document.getElementById('email');

        //campos de los pases por día
        let paseDia = document.getElementById('pase_dia');
        let paseDosDia = document.getElementById('pase_dos');
        let paseCompleto = document.getElementById('pase_completo');

        //botones y divs
        let calcular = document.getElementById('calcular');
        let errorDiv = document.getElementById('error');
        let botonRegistro = document.getElementById('btnRegistro');
        let resultado = document.getElementById('lista-productos');

        //funcion de calcular como primer boton
        calcular.addEventListener('click', calcularMontos);

        function calcularMontos(event) {
            event.preventDefault();
            
            if (regalo.value === '') {
                alert("Debes de elegir algún regalo");
                regalo.focus();
            }
            else{
                console.log("ya eegiste regalo");
            }
        }

    });//DOMContentLoaded
});