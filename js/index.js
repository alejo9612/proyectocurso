
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
         suma = document.getElementById('suma-total');

         //extras
         let camisas = document.getElementById('camisa_evento');
         etiqueta = document.getElementById ('etiquetas');

        //funcion de calcular como primer boton
        calcular.addEventListener('click', calcularMontos);

        paseDia.addEventListener('blur', mostrarDias);
        paseDosDia.addEventListener('blur', mostrarDias);
        paseCompleto.addEventListener('blur', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apelliddo.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarEmail);
        
        function validarCampos () {
            if (this.value == "") {
                (errorDiv).style.display= 'block';
                errorDiv.innerHTML="este campo es obligatorio";
                this.style.border = '1px solid red';
(errorDiv).style.border = '1px solid red';
            }else{
                (errorDiv).style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
        }

        function validarEmail() {
            if (this.value.indexOf('@' > -1)) {
                (errorDiv).style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }else{
                (errorDiv).style.display = 'block';
                errorDiv.innerHTML = "Debe de tener al menos una @";
                this.style.border = '1px solid red';
                (errorDiv).style.border = '1px solid red';
            }
        }

        function calcularMontos(event) {
            event.preventDefault();
            
            if (regalo.value ==='') {
                alert("Debes de elegir algún regalo");
                regalo.focus();
            }
            else{
                let boletoDia =parseInt(paseDia.value,10)||0,
                    boletoDia2 = parseInt(paseDosDia.value, 10) || 0,
                    boletoCompleto = parseInt(paseCompleto.value, 10 )|| 0,
                    cantCamisas = parseInt(camisas.value, 10) || 0,
                    cantEtiqueta = parseInt(etiqueta.value, 10) || 0;

                let totalPagar= (boletoDia * 30) + (boletoDia2 * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiqueta * 2);
                listadoProductos = [];

                if (boletoDia >= 1) {
                listadoProductos.push(boletoDia + 'Pases por día');
                }
                if (boletoDia2 >= 1) {
                    listadoProductos.push(boletoDia2 + 'Pases por 2 días');
                }
                if (boletoCompleto >= 1) {
                    listadoProductos.push(boletoCompleto + 'Pases Completos');
                }
                if (cantCamisas >= 1) {
                    listadoProductos.push(cantCamisas + 'camisas');
                }
                if (etiqueta >= 1) {
                    cantEtiqueta.push(cantEtiqueta + 'etiquetas');
                }

                (resultado).style.display = "block";
                resultado.innerHTML = '';
                for (let i = 0; i < resultado.length; i++) {
                    resultado.innerHTML += resultado[i] + '<br>';
                }
                suma.innerHTML = '$' + totalPagar.toFixed(2);
            }
        }

        function mostrarDias() {
            let boletoDia = parseInt(paseDia.value, 10) || 0,
                boletoDia2 = parseInt(paseDosDia.value, 10) || 0,
                boletoCompleto = parseInt(paseCompleto.value, 10) || 0,

             diasElegidos = [];

            if (boletoDia > 0 ) {
                diasElegidos.push('viernes');
            }
            if (boletoDia2 > 0) {
                diasElegidos.push('viernes', 'sabado');
            }
            if (boletoCompleto > 0) {
                diasElegidos.push('viernes', 'sabado', 'domingo');
            }
            for (let i = 0; i < diasElegidos.length; i++) {
                document.getElementById(diasElegidos[i]).style.display = 'block';
                
            }
        }

    });//DOMContentLoaded
});