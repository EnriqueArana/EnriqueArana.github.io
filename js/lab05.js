let okButton=document.getElementById("btnextraer");
okButton.onclick=okayClick;

/*let botonColorear=document.getElementById("btncolorear");
botonColorear.addEventListener('click',cambiarColores);*/

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

function cambiarColores(){
    caja1.style.background = "#b54818";
}

(function() {
    let boton = document.getElementById("btncolorear");
    boton.addEventListener("click", myf1);


    let contador = 0;

    function myf1() {
      if (contador % 2 ==0) {
          caja1.style.background= "#b54818";
          caja2.style.background= "#b54818";
          caja3.style.background= "#b54818";
          caja4.style.background= "#b54818";
          caja5.style.background= "#b54818";
          longitudapellido.style.background= "#296da3";
          edad.style.background= "#296da3";
          mesletras.style.background= "#296da3";
      } else {
          caja1.style.backgroundColor = "#296da3";
          caja2.style.background= "#296da3";
          caja3.style.background= "#296da3";
          caja4.style.background= "#296da3";
          caja5.style.background= "#296da3";
          longitudapellido.style.background= "#b54818";
          edad.style.background= "#b54818";
          mesletras.style.background= "#b54818";
      }
      contador += 1;
    }
})();