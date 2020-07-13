(function () {
    "use strict"

    let registro = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function () {
        
        //datos usuario
        let nombre = document.getElementById('nombre');
         apelliddo = document.getElementById('apellido');
         email = document.getElementById('email');

        //campos de los pases por día
        let paseDia = document.getElementById('pase_dia');
         paseDosDia = document.getElementById('pase_dos');
         paseCompleto = document.getElementById('pase_completo');

        //botones y divs
        let calcular = document.getElementById('calcular');
         errorDiv = document.getElementById('error');
         botonRegistro = document.getElementById('btnRegistro');
         resultado = document.getElementById('resultado');

         //extras
         let camisas = document.getElementById('camisa_evento');
         etiqueta = document.getElementById ('etiquetas');

        //funcion de calcular como primer boton
        calcular.addEventListener('click', calcularMontos);

        paseDia.addEventListener('blur' mostrarDias);
        paseDosDia.addEventListener('blur' mostrarDias);
        paseCompleto.addEventListener('blur'mostrarDias);

        function calcularMontos(event) {
            event.preventDefault();
            
            if (regalo.value === '') {
                alert("Debes de elegir algún regalo");
                regalo.focus();
            }
            else{
                console.log(paseDia.value);
                console.log(paseDosDia.value);
                console.log(paseCompleto.value);
            }
        }

    });//DOMContentLoaded
});