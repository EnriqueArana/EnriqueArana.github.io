let okButton=document.getElementById("btnextraer");
okButton.onclick=okayClick;

function okayClick(){
    const texto = document.getElementById("fname").value;
    if (texto == ""){
        document.getElementById("fname").focus();
    }
    
    const palabra = texto.split(' ');
    
    if(palabra.length == 4){
        document.getElementById("fpat").value=palabra[0];
        document.getElementById("fmat").value=palabra[1];
        document.getElementById("fnom").value=palabra[2]+" "+palabra[3];
        let longitud=palabra[0].length+palabra[1].length;
        document.getElementById("flon").value=longitud+" letras";
    }
    else{
        document.getElementById("fpat").value=palabra[0];
        document.getElementById("fmat").value=palabra[1];
        document.getElementById("fnom").value=palabra[2];
    }

    const fecha = document.getElementById("fdate").value;
    const anio = fecha.split('-');
    let edad = 2021 - anio[0];
    let meses = ['Enero', "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    document.getElementById("fage").value = edad+" años";
    document.getElementById("fletter").value = meses[parseInt(anio[1]-1)];
}