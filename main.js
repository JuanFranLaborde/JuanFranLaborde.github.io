const tragosInfo =  [
  {
      id: "1",
      descripcion: "Fernet preparado con mucho hielo y Coca Cola, con las medidas a elección.",
      cantidad: 5,
      efectosColaterales: "Calorías por 100g: 270kcal"
  },
  {
      id: "2",
      descripcion: "Vodka (Absolut), mezclado con jugo de naranja y abundante hielo.",
      cantidad: 5,
      efectosColaterales: "Calorías por 100g: 120kcal"
  },

  {
    id: "3",
    descripcion: "Johnnie Walker Black Label, con hielo a gusto.",
    cantidad: 5,
    efectosColaterales: "Calorías por 100g: 244kcal"
},

{
  id: "4",
  descripcion: "Margarita: 60ml de tequila blanco o reposado, 40ml de licor de naranja, 60ml de zumo de lima, servido en copa adornada con sal y sirope de azúcar y hielo.",
  cantidad: 5,
  efectosColaterales: "Calorías por 100g: 230kcal"
},

{
  id: "5",
  descripcion: "Mojito: 2 cucharadas de azúcar blanco, algunas hojas de menta, 30ml de jugo de lima, 60ml de ron (flor de  caña), 1/2 lima en rodajas, soda y hielo picado.",
  cantidad: 5,
  efectosColaterales: "Calorías por 100g: 140kcal"
},

{
  id: "6",
  descripcion: "Gintonic: 50mol de gin (Aconcagua), 150ml de Tonica (paso de los toros), decoramos con pimienta y lima en rodajas.",
  cantidad: 5,
  efectosColaterales: "Calorías por 100g: 122kcal"
}
]

 //funcion agrega trago
 const agregarTrago = ()=> {
  const continuar = true
  let  id
  let cantidad
  let descripcion
  let eColaterales
  alert ("ud. selecciono agregar tragos!")
  while (continuar){
    do{
    id = prompt ("ingrese id")
    }while(isNaN(id))
    do{
    cantidad = parseInt (prompt ("ingrese cantidad"))
    }while(isNaN(cantidad))
    descripcion = prompt ("ingrese descripcion del trago")
    eColaterales = prompt ("ingrese los efectos colaterales")
    tragosInfo.push({
    id:id,
    cantidadad:cantidad,
    descripcion:descripcion,
    ecolaterales:eColaterales
  })


  alert ("su trago fue agregado con exito!! verifique la consola...")
  console.log (tragosInfo)
  continuar = confirm ("quiere segurir agregando tragos?" )
}
}

const resultadoDonacion = (cantidad, donacion, ID) => {
  let resultado  =  cantidad * donacion 
  alert  ("gracias por donar $ "  + resultado + " Ud. va a recibir su trago N°" + ID )
}

const continuaCompra = () =>{
  let cantidad
  let donacion
  let id
    do{
      cantidad = parseInt(prompt ("Ingrese la cantidad de tragos deseados"))
        }while(isNaN(cantidad))
  
    do{
      donacion = parseInt(prompt ("Ingrese el monto de la donacion "))
       }while(isNaN(donacion))
  
    do{
      id = prompt ("Ingrese el id del trago que deseada consumir.")
       }while (isNaN(id) || id < 1 || id > 6)
    return {
  
      cantidad,
      donacion,
      id
    }  
  }

  const comprar = () =>{
    let continuar = true
    while (continuar){
      let datos = continuaCompra()
  
       switch (datos.id) {
   
      case "1":
        alert ("Ud. eligió: Fernet con Coca.")
        break
  
      case "2":
         alert ("Ud. eligió: Vodka con jugo.")
         break
  
      case "3":
         alert ("Ud. eligió: Johnnie Walker Black Label.")
         break
  
      case "4":
          alert ("Ud. eligió: Margarita.")
          break
  
      case "5":
          alert ("Ud. eligio: Mojito.")
           break
  
      case "6":
          alert ("Ud. eligio: Gintonic.")
          break
  
      default:
        alert ("Ingrese una opcion valida del 1 al 6 o cancele para salir")
        break
     
  }
  resultadoDonacion (datos.cantidad, datos.donacion, datos.id)
  continuar=confirm("Presione aceptar para continuar comprando o cancelar para finalizar ")
  }
  }

  // info tragos 
const infoTragos = () =>{
  continuar = true
  let id
  alert ( "ud. a eligido buscar info, por favor ingrese el id del trago..." )
  while (continuar) {
    
  
  do{
    id = parseInt(prompt  ("ingrese el id de su trago..."))
  } while (isNaN(id) || id < 1 || id > 6)
           
  const tragoBuscado = tragosInfo.find ((tragosInfo) => tragosInfo.id == id)

  alert ("Su informacion se encuentra en la consola!")
  console.log (tragoBuscado)
  continuar = confirm ("quiere seguir buscando informacion de algún otro trago?" )
}

}

//borrar pocima

const boTrago = () => {
  continuar = true
  while (continuar) {
      const id = prompt("Ingrese el ID del trago que desea borrar")
      const index = tragosInfo.findIndex(trago => trago.id == id);
      if (index !== -1) {
  tragosInfo.splice(index, 1);
  }
  alert ("su confiramcion se encuentra en la consola!")
  console.log(tragosInfo);
  continuar = confirm ("quiere seguir borrando tragos?" )
}
}


//ver tragos

const verTragos = () => {
  tragosInfo.forEach((trago) => {
    alert("Trago id: " + trago.id +  "\n  descripcion: " + trago.descripcion + " \n cantidad: " + trago.cantidad)
  })
}




function inicializar() {
  continuar = true
  while (continuar) {
  const promptValue = prompt(" ingrese:  \n1 si quiere comprar un trago. \n 2 si desea tener mas informacion acerca de los tragos. \n 3 Argragar trago.   \n 4 borrar trago. \n 5 ver pocimas")
  switch (promptValue) {
    case "1":
      comprar()
      return
    case "2":
      infoTragos()
      return
    case "3":
      agregarTrago()
      return
      
    case "4":
      boTrago()
        return
    case "5":
      verTragos()
      return
     
    default:
      alert ("ud no ingresado opcion valida!")
      return
  }
  
}   
}


inicializar()



// let continuar = true
// while (continuar){
// let ID = prompt ("Ingrese la bebida que desea consumir del 1 al 6")

// function resultadodonacion (cantidad, donacion, ID){
//     let resultado  =  (cantidad * donacion) 
//       alert  ("Gracias por su compra!! El total es de: $"  + resultado + ", Ud. va a recibir su trago " + (ID) + " en un momento...")
//     }

//     switch (ID) {
  
//         case "1":
//            alert ("Ud. eligió Fernet con Coca")
//            do{
//            cantidad = parseInt(prompt ("Ingrese la cantidad de vasos a consumir "))
//            donacion = prompt ("ingrese el monto que considere acorde para el trago: ")
//           }while(isNaN(cantidad, donacion))
//            resultadodonacion (cantidad,donacion, ID)
//           break
    
//         case "2":
//            alert ("Ud. eligió Vodka con jugo")
//            do{
//            cantidad = parseInt(prompt ("Ingrese la cantidad de vasos a consumir "))
//            donacion = prompt ("ingrese el monto que considere acorde para el trago: ")
//           }while(isNaN(cantidad, donacion))
//            resultadodonacion (cantidad,donacion, ID)
//           break
    
//         case "3":
//            alert ("Ud. eligió Johnnie Walker Black Label")
//            do{
//             cantidad = parseInt (prompt ("Ingrese la cantidad de vasos a consumir "))
//             donacion = prompt ("ingrese el monto que considere acorde para el trago: ")
//             }while(isNaN(cantidad, donacion))
//             resultadodonacion (cantidad,donacion, ID)
//             break
    
//         case "4":
//             alert ("Ud. eligió Margarita")
//             do{
//             cantidad = parseInt (prompt ("Ingrese la cantidad de vasos a consumir "))
//             donacion = prompt ("ingrese el monto que considere acorde para el trago: ")
//             }while(isNaN(cantidad, donacion))
//             resultadodonacion (cantidad,donacion, ID)
//             break
    
//         case "5":
//             alert ("Ud. eligio Mojito")
//             do{
//             cantidad = parseInt (prompt ("Ingrese la cantidad de vasos a consumir "))
//             donacion = prompt ("ingrese el monto que considere acorde para el trago: ")
//             }while(isNaN(cantidad, donacion))
//             resultadodonacion (cantidad,donacion, ID)
//             break
//         case "6":
//             alert ("Ud. eligio Gintonic")
//             do{
//             cantidad = parseInt (prompt ("Ingrese la cantidad de vasos a consumir "))
//             donacion = prompt ("ingrese el monto que considere acorde para el trago: ")
//            }while(isNaN(cantidad, donacion))
//             resultadodonacion (cantidad,donacion, ID)
//             break
//         default:
//           alert ("Ingrese una opcion valida del 1 al 6 o cancele para salir")
//           break
       
//     }
//     continuar=confirm("Presione aceptar para continuar comprando o cancelar para finalizar ")
//     }