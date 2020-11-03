


var pedido={
    mesa: "",
    cliente: "",
    pan: "",
    carne: "",
    verduras: [],
    bebida: "",
    acompanamiento: "",

                                                                                     // la funcion para introducir los datos en el objeto pedido
    tomarDatos: function() {
        var pan = document.getElementsByName('pan');                                                                                     // se recoren los elementos pan para encontrar el checkeado
        for (var i = 0; i < pan.length; i++) { 
          if (pan[i].checked) {
              pedido.pan = pan[i].value                                              //se introduce el value de pan en el atributo del objeto
            break;
          }
        }
    }



}