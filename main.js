

/*
// la funcion para introducir los datos en el objeto pedido
    tomarDatos: function() {
        var pan = document.getElementsByName('pan');                                                                                     // se recoren los elementos pan para encontrar el checkeado
        for (var i = 0; i < pan.length; i++) { 
          if (pan[i].checked) {
              pedido.pan = pan[i].value;                                              //se introduce el value de pan en el atributo del objeto
            break;                                                                   //repetir función para cada uno de los elementos
          }
        }
    }
-->
*/
function getMesa(){
  var mesa, nombre;
  nombre=document.getElementById("nombre");
  localStorage.NOMBRE=nombre.value;
  mesa=document.getElementById("mesa");
  localStorage.MESA=mesa.value;
}

function getDatos(){
  var pan, carne, verdura, bebida, acompañamiento;
  //Crea variable pan, almacena value y mete variable en storage bajo PAN
  pan=document.getElementsByName("pan");
  for(var i=0; i<pan.length; i++){
    if(pan[i].checked){
      pan=pan[i].value;
      localStorage.PAN=pan;
    }//for if pan
  }//for pan
  //Crea variable carne, almacena value y mete variable en storage bajo CARNE
  carne=document.getElementsByName("carne");
  for(var i=0; i<carne.length; i++){
    if(carne[i].checked){
      carne=carne[i].value;
      localStorage.CARNE=carne;
    }//for if carne
  }//for carne
  //Crea variable verdura, almacena value y mete variable en storage bajo VERDURA
  /*verdura=document.getElementsByName("verdura");
  for(var i=0; i<verdura.length; i++){
    if(verdura[i].checked){
      verdura.push(verdura[i].value);
      localStorage.VERDURA=verdura;
    }//for if verdura
  }//for verdura
  */
  //Crea variable bebida, almacena value y mete variable en storage bajo BEBIDA
  bebida=document.getElementsByName("bebida");
  for(var i=0; i<bebida.length; i++){
    if(bebida[i].checked){
      bebida=bebida[i].value;
      localStorage.BEBIDA=bebida;
    }//for if bebdida
  }//for bebdida
  //Crea variable acompañamiento, almacena value y mete variable en storage bajo ACOMPAÑAMIENTO
  acompañamiento=document.getElementsByName("acompañamiento");
  for(var i=0; i<acompañamiento.length; i++){
    if(acompañamiento[i].checked){
      acompañamiento=acompañamiento[i].value;
      localStorage.ACOMPAÑAMIENTO=acompañamiento;
    }//for if acompañamiento
  }//for acompañamiento

} //tomaDatos

function setDatos(){
  //Regresa el pan
  document.getElementById("setPan").innerHTML=localStorage.PAN ;
  //Regresa la carne
  document.getElementById("setCarne").innerHTML=localStorage.CARNE ;
  //Regresa la verdura
  document.getElementById("setVerdura").innerHTML=localStorage.VERDURA ;
  //Regresa la bebida
  document.getElementById("setBebida").innerHTML=localStorage.BEBIDA ;
  //Regresa el acompañamiento
  document.getElementById("setAcompañamiento").innerHTML=localStorage.ACOMPAÑAMIENTO ;
  //Regresa el nombre
  document.getElementById("setNombre").innerHTML=localStorage.NOMBRE;
  //Regresa la mesa
  document.getElementById("setMesa").innerHTML=localStorage.MESA;
  }