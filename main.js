let continuar = true
while (continuar){
let ID = prompt ("Ingrese la bebida que desea consumir del 1 al 6")

function resultadodonacion (cantidad, donacion, ID){
    let resultado  =  (cantidad * donacion) 
      alert  ("Gracias por su compra!! El total es de: $"  + resultado + ", Ud. va a recibir su trago " + (ID) + " en un momento...")
    }

    switch (ID) {
  
        case "1":
           alert ("Ud. eligió Fernet con Coca")
           do{
           cantidad = parseInt(prompt ("Ingrese la cantidad de vasos a consumir "))
           donacion = prompt ("ingrese el monto que considere acorde para el trago: ")
          }while(isNaN(cantidad, donacion))
           resultadodonacion (cantidad,donacion, ID)
          break
    
        case "2":
           alert ("Ud. eligió Vodka con jugo")
           do{
           cantidad = parseInt(prompt ("Ingrese la cantidad de vasos a consumir "))
           donacion = prompt ("ingrese el monto que considere acorde para el trago: ")
          }while(isNaN(cantidad, donacion))
           resultadodonacion (cantidad,donacion, ID)
          break
    
        case "3":
           alert ("Ud. eligió Johnnie Walker Black Label")
           do{
            cantidad = parseInt (prompt ("Ingrese la cantidad de vasos a consumir "))
            donacion = prompt ("ingrese el monto que considere acorde para el trago: ")
            }while(isNaN(cantidad, donacion))
            resultadodonacion (cantidad,donacion, ID)
            break
    
        case "4":
            alert ("Ud. eligió Margarita")
            do{
            cantidad = parseInt (prompt ("Ingrese la cantidad de vasos a consumir "))
            donacion = prompt ("ingrese el monto que considere acorde para el trago: ")
            }while(isNaN(cantidad, donacion))
            resultadodonacion (cantidad,donacion, ID)
            break
    
        case "5":
            alert ("Ud. eligio Mojito")
            do{
            cantidad = parseInt (prompt ("Ingrese la cantidad de vasos a consumir "))
            donacion = prompt ("ingrese el monto que considere acorde para el trago: ")
            }while(isNaN(cantidad, donacion))
            resultadodonacion (cantidad,donacion, ID)
            break
        case "6":
            alert ("Ud. eligio Gintonic")
            do{
            cantidad = parseInt (prompt ("Ingrese la cantidad de vasos a consumir "))
            donacion = prompt ("ingrese el monto que considere acorde para el trago: ")
           }while(isNaN(cantidad, donacion))
            resultadodonacion (cantidad,donacion, ID)
            break
        default:
          alert ("Ingrese una opcion valida del 1 al 6 o cancele para salir")
          break
       
    }
    continuar=confirm("Presione aceptar para continuar comprando o cancelar para finalizar ")
    }