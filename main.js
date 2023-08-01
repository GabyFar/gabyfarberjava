


function calcularCosto() {

    let cantidadProductos = parseInt(prompt("Bienvenido a Controlandia! cuantos productos desea llevar?:"));
  
   
    if (isNaN(cantidadProductos) || cantidadProductos <= 0) {

      alert("El valor ingresado es incorrecto, por favor intentelo de nuevo.");

      return;
    }
  
    let costoTotal = 0;
  
    for (let i = 1; i <= cantidadProductos; i++) {

        let precioProducto = parseFloat(prompt(`Ingrese el precio correspondiente al producto ${i} :`));
  
    if (isNaN(precioProducto) || precioProducto < 0) {

        alert (`El valor ingresado es incorrecto, por favor intentelo de nuevo ${i}`)
        
    return;
    }
  
      costoTotal = costoTotal + precioProducto;
    }
  
    alert (`El costo total de los ${cantidadProductos} productos seleccionados es: $${costoTotal}`);
    }
  
  calcularCosto();
  