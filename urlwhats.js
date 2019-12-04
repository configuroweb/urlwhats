


function tickets() {
    pais = document.getElementById("pais").value;
    telefono = document.getElementById("telefono").value; 
    descripcion = document.getElementById("descripcion").value; 

    
   document.write("https://wa.me/"+ pais + telefono + "?text="+ descripcion)   
        

    
}