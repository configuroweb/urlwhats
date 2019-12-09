
function tickets() {
    pais = document.getElementById("pais").value;
    telefono = document.getElementById("telefono").value; 
    descripcion = document.getElementById("descripcion").value; 

    
    document.write("<center><textarea id=textarea rows=20 cols=40>" + "https://wa.me/"+ pais + telefono + "?text="+ descripcion + "</textarea></center>" + "</br></br>" +

    "<center><button id=copyBlock>"+"Click para copiar"+"</button></center>" +"<span id=copyAnswer></span>"
    )

    var textarea = document.getElementById("textarea");
    var answer = document.getElementById("copyAnswer");
    var copy   = document.getElementById("copyBlock");
    copy.addEventListener('click', function(e) {
       // Seleccionando el texto
       textarea.select(); 
       try {
           // Copiando el texto seleccionado
           var successful = document.execCommand('copy');
     
           if(successful) answer.innerHTML = "<font face=verdana>"+"<center>"+"</br>"+"Se ha copiado la url con éxito, ahora pulsa el Botón a continuación," + "<font color=blue>"+ " Nueva Ventana" +"</font>"+ ". Posteriormente, presiona" + "<font color=red>"+ " CTRL + V "+ "</font>" + "en Windows "+ "o " + "<font color=green>"+ "CMD + V" + "</font>" +  " en MAC, por último Enter y ya está!"+"</center>"+"</font>"+ "</br>"+ "<center>"+ "<button onclick=myFunction()>"+"Nueva ventana"+"</button>" + "</center>";
           else answer.innerHTML = 'Incapaz de copiar!';
       } catch (err) {
           answer.innerHTML = 'Browser no soportado!';
       }

       
       
    });


    
};

function myFunction() {
    window.open("ventananueva.html");
  }   

   

    

