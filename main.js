


    const accesoriosArcade = [

      { id: 1, name: "Stick", price: 10000 },
      { id: 2, name: "Boton", price: 2000 },
      { id: 3, name: "Plaqueta", price: 5000 },
      { id: 4, name: "CajaBotonera", price: 6000 },
      { id: 5, name: "CableHDMI", price: 1500 },
      { id: 6, name: "PloteadoDeCaja", price: 4500 }

  ];
  
    const mostrarAccesoriosArcades = () => {

      console.log("Catálodo de accesorios Arcade:");

      accesoriosArcade.forEach(accesoriosArcade => {

        console.log(`
        ID: ${accesoriosArcade.id}, 
        Nombre: ${accesoriosArcade.name}, 
        Precio: $${accesoriosArcade.price}
        `);

    });

  };

    const accesoriosArcadePorId = id => accesoriosArcade.find(accesoriosArcade => accesoriosArcade.id === id);

    const filtradoPrecio = maxPrice => accesoriosArcade.filter(accesoriosArcade => accesoriosArcade.price <= maxPrice);

  
    let opcion = parseInt(prompt("Ingrese una opción:\n1. Comprar un accesorio por ID\n2. Ver catálogo\n3. Busqueda de producto\n4. Filtrar por precio maximo\n5. Salir"));

      while (opcion !== 5) {

      switch (opcion) {

      case 1:

        let respuesta = "si";
        let contador = 0;
          while (respuesta === "si") {

          const accesoriosArcadeId = parseInt(prompt("Ingrese el ID del producto que desea llevar:"));
          const accesoriosArcade = accesoriosArcadePorId(accesoriosArcadeId);
        
          if (accesoriosArcade) {
            alert(`Compraste ${accesoriosArcade.name} por $${accesoriosArcade.price}. ¡Gracias por su compra!`);
            contador = contador + accesoriosArcade.price;
            respuesta = prompt("¿Desea seguir comprando? si/no");
          } else {

            alert("No se encontró el producto seleccionado.");
          }

        }
        
        alert(`Total a pagar es de: $${contador}`);
        break;
  
      case 2:

        mostrarAccesoriosArcade();
        alert ("Los productos se mostraron en consola");
        break;
  
      case 3:
        
        const nombre = prompt("Ingrese el producto que desea verificar si se encuentrConsulte aqui el stock del producto");
        const accesoriosArcadeStockDisponible = accesoriosArcade.find(accesoriosArcade => accesoriosArcade.name === nombre);
        if (accesoriosArcadeSinStock) {

            alert (`Stock Disponible ${nombre} en el catálogo.`);

        } else {

          alert(`Sin Stock por el momento ${nombre} no se encontró en el catálogo.`);

        }

        break;

        case 4:
            const maxPrice = parseFloat(prompt("Ingrese el precio máximo para el filtrado:"));
            const accesoriosArcadeFiltradas = filtradoPrecio(maxPrice);
      
            if (accesoriosArcadeFiltradas.length > 0) {
              console.log("accesoriosArcade filtrados por su precio:");
              accesoriosArcadeFiltradas.forEach(accesoriosArcade => {
                console.log(`
                  ID: ${accesoriosArcade.id},
                  Nombre: ${accesoriosArcade.name},
                  Precio: $${accesoriosArcade.price}
                `);

            });

            alert ("Puede ver los precios menores a este en la consola");

            } else {

              alert(`No hay accesorios dentro del rango de precio $${maxPrice}.`);
            }
            break;
  
      default:
        
        alert("Lo ingresado es incorrecto, por favor intentelo de nuevo");

        break;

    }
  
    opcion = parseInt(prompt("Ingrese una opción:\n1. Comprar accesorio de Arcade por ID\n2. Ver Catálogo de accesorios\n3. Buscar un producto\n4. Filtrar por precio maximo\n5. si desea Salir"));

  }