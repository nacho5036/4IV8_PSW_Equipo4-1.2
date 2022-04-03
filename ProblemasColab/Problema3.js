// JavaScript source code
function Problema3() {

    var horas = parseInt(document.formulario3.num1.value);
    var pago = parseInt(document.formulario3.sueldoH.value);

    document.formulario3.horasN.value = pago * horas;

    if (horas > 48) {
        horasExt = horas - 48
        document.formulario3.horasT.value = horasExt * 3;
    } else {
        document.formulario3.horasT.value = 0;
    }

    if (horas > 40) {
        horasE = horas - 40;
        document.formulario3.horasD.value = horasE * pago * 2
    } else {
        document.formulario3.horasD.value = 0;
    }


    horasN = parseInt(document.formulario3.horasN.value);

    horasD = parseInt(document.formulario3.horasT.value);

    horasT = parseInt(document.formulario3.horasD.value);
  
    document.formulario3.sueldo.value = horasN+ horasD+ horasT;
;


}