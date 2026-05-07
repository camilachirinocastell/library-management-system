// SISTEMA DE GESTIÓN DE BIBLIOTECA
//Trabajo Práctico Integrador ADA ITW- Fundamentos de Javascript
//Autor: Camila Chirino Castell



//------------------------------------------------------------------------------------------------------------
//1️- Estructura de datos

//1.A - Array de objetos - LIBROS
// Un array de objetos es una lista donde cada elemento es un objeto.
// Voy a escribir una lista (array []) de objetos (cada objeto está determinado dentro de {} y separado por una ",", agrupa propiedades relacionadas id,título,autor,etc y un valor (dato en si)) 
// El primer paso implica que el array necesita un nombre para poder usarlo, esto lo logro declarando una variable. La variable no reemplaza al array, es simplemente la etiqueta que le pongo para encontrarlo después.
//Entre la variable y el array pongo "=", un operador de asiganción: asigna el valor de la derecha en la varaible de la izquierda.
const librosVariable = [ //una variable es un contenedor que permite almacenar y hacer referencia a un valor específico. Solo se puede declarar una vez. En este caso es una variable const, que al contrario de let una vez que se le asigna valor no se puede cambiar. const protege el contenedor, no el contenido. El array sigue siendo modificable por dentro.
    {//Los "{}" indican bloques de código que forman los elementos objeto, cada uno se separa con una ",". 
     // Propiedad:valor-tipo de dato. Propiedad  →  es el dato que describe al objeto {}. Las propiedades van a ser : id, título, autor, año, género y disponible. En este caso los tipos de datos van a ser: número, string y booleano.
     id: 1, // número  → sin comillas
     titulo: "Orgullo y prejuicio", // string  → va entre comillas
     autor: "Jane Austen",
     año: 1813, 
     genero: "Novela romántica / Social",
     disponible: false// booleano → true o false, sin comillas
    },
    {
     id: 2, 
     titulo: "Jane Eyre", 
     autor: "Charlotte Brontë",
     año: 1847, 
     genero: "Novela romántica / Bildungsroman",
     disponible: false 
    },
    {
     id: 3, 
     titulo: "Cumbres borrascosas", 
     autor: "Emily Brontë",
     año: 1847, 
     genero: "Novela gótica / Romántica",
     disponible: false
    },
    {
     id: 4, 
     titulo: "Agnes Grey", 
     autor: "Anne Brontë",
     año: 1847, 
     genero: "Novela realista / Bildungsroman",
     disponible: true
    },
    {
     id: 5, 
     titulo: "La inquilina de Wildfell Hall", 
     autor: "Anne Brontë",
     año: 1848, 
     genero: "Novela social / Realista",
     disponible: true
    },
    {
     id: 6, 
     titulo: "Shirley", 
     autor: "Charlotte Brontë",
     año: 1849, 
     genero: "Novela social",
     disponible: true
    },
    {
     id: 7, 
     titulo: "Villette", 
     autor: "Charlotte Brontë",
     año: 1853, 
     genero: "Novela romántica / Psicológica",
     disponible: true
    },
    {
     id: 8, 
     titulo: "Norte y Sur", 
     autor: "Elizabeth Gaskell",
     año: 1855, 
     genero: "Novela social / Romántica",
     disponible: true
    },
    {
     id: 9, 
     titulo: "El profesor", 
     autor: "Charlotte Brontë",
     año: 1857, 
     genero: "Novela realista",
     disponible: true
    },
    {
     id: 10, 
     titulo: "Middlemarch", 
     autor: "George Eliot",
     año: 1871, 
     genero: "Novela realista / Psicológica",
     disponible: true
    }
    
]; //cierro el array con ";" porque terminó la instrucción

//1.B - Array de objetos - USUARIOS
// Para este caso voy a hacer una estructura anidada porque la propiedad "librosPrestados" tiene como valor un array. Es un array dentro de un objeto que contiene los ids de los libros que ese usuario tiene prestados actualmente.
const usuariosVariable = [
  {
    id: 1,
    nombre: "Paula Trece",
    email: "paulatrece@email.com",
    librosPrestados: [1, 2]    // Paula tiene prestados libro id:1 y id:2
  },
  {
    id: 2,
    nombre: "Josefa Fina",
    email: "josefafina@email.com",
    librosPrestados: [3]    // Josefa tiene prestado el libro id:3
  }, 
  {
    id: 3,
    nombre: "Alicira Fernandez",
    email: "alicirafernandez@email.com",
    librosPrestados: []    // Alicira no tiene prestado libros, por eso el array está vacío.
  }, 
  {
    id: 4,
    nombre: "Nieves Fernandez",
    email: "nievesfernandez@email.com",
    librosPrestados: []    
  }, 
  {
    id: 5,
    nombre: "Dora Fernandez Falconi",
    email: "dorafernandez@email.com",
    librosPrestados: []    
  }, 
];

//---- PRUEBAS ----
//Mostrar en consola
//Para ver si funcionan estos dos arrays escribí en este .js "console.log(librosVariable); y console.log(usuariosVariable);". Luego abri la terminal Git Bash y escribi "node trabajoPracticoIntegrador_CamilaChirinoCastell.js"
//console.log() es un método esencial en JavaScript utilizado para imprimir mensajes, variables o resultados en la consola del navegador o terminal. Funciona como una herramienta clave para la depuración (debugging), permitiendo a los desarrolladores visualizar el flujo de ejecución y verificar valores en tiempo real sin alterar la interfaz de usuario.
//Estos console.log son solo para verificar, por eso los dejo comentados//


//-------------------------------------------------------------------------------------------------------------


//2️⃣ - Funciones de Gestión de Libros

//2.A Agregar libros
// Objetivo: Crear una función reutilizable que sirva para agregar cualquier libro. No un libro específico, sino una herramienta para agregar libros: como si fuera un formulario en blanco.
// Una función es un bloque de código que permite agrupar una funcionalidad, la parabra reservada es "function". En general realiza una tarea específica y retorna un valor como resultado.
// Entre "()" se ponen los parámetros: los datos que le paso a la función para que trabaje con ellos. 
// parámetro  →  es el dato que entra a la función (). NO CONFUNDIR CON propiedad  →  es el dato que describe al objeto. Este caso puede confundir porque en la función agregarLibro los parámetros tienen los mismos nombres que las propiedades del objeto libroVariable. Pero son cosas distintas
function agregarLibro (id,titulo,autor,año,genero) {
    
  // Crear el objeto nuevoLibro
  const nuevoLibro = {
    id: id, // propiedad "id" recibe el parámetro "id". El número se lo paso yo manualmente cuando llamo la función
    titulo: titulo, // propiedad "titulo" recibe el parámetro "titulo"
    autor: autor,
    año: año,
    genero: genero,
    disponible: true //esto no viene de parámetro, por defecto siempre está disponible al agregarlo
  };

  //Método array
  // Cuando una función pertenece a un objeto (en este caso un array) la llamámos método.
  //Despues de crear el objeto nuevoLibro usar el método de arrays .push para agregar un elemento al final de un array.
  librosVariable.push(nuevoLibro); //al array librosVariable, agregale el objeto nuevoLibro al final

  //Mostrar en consola
  //Este console.log es parte de la función, es un mensaje de confirmación que le dice al usuario que la operación fue exitosa.
  console.log(`Libro "${titulo}" agregado correctamente.`); //En este console.log uso un tipo especial de string llamado template literal definido por comillas invertidas``: te permite meter variables adentro del texto directamente. Entre el texto libro y agregado correctamente, inserto variable titulo en el template literal con ${}
}
//---- PRUEBAS ----
//En este archivo .js escribo :
//agregarLibro(11, "Sentido y sensibilidad", "Jane Austen", 1811, "Novela romántica / Social");
//console.log(librosVariable);
//En la terminal Git Bash escribo "node trabajoPracticoIntegrador_CamilaChirinoCastell.js"

//2.B Buscar libro
// Algoritmo de búsqueda lineal: Recorre el array de principio a fin comparando cada elemento con lo que buscás hasta encontrarlo o llegar al final.
// Escribo una función que es una herramienta de búsqueda, recorre toda la lista/array de libros y te devuelve los libros que coincidan con lo que buscás.
//Los datos (parámetros/variables) que le paso a la función son criterio (título, autor o género segun la consigna pero podria buscar cualquier propiedad tambien como año o id) y valor (argumento real).Los parámetros son variables, nacen cuando definís la función y reciben su valor cuando la llamás.
//La función va a tener 4 bloques: 1 - array vacío donde guardo lo que encuentro, 2 - el recorrido por cada libro en un bucle de ciclo for (inicio; condicion; y modificador), 3 - la comparación con una estructura if tradicional (adentro del for), 4 - mostrar lo que encontré: A-al developer en la consola con console.log B- entrega el resultado al programa con return. 
function buscarLibro (criterio, valor){ //Por el orden que elegí al definir la función el primer parámetro criterio → puede ser cualquier propiedad del objeto libro, se define cuando llamas la función.Es la variable que recibe el NOMBRE de la propiedad a buscar. El segundo parámetro valor → variable que recibe el DATO a buscar y se usa para comparar con la propiedad del libro.
  //Algunas aclaraciones: criterio → recibe el NOMBRE de la propiedad a buscar ("titulo", "autor" o "genero").
 //            se usa con [] cuando accedemos a una propiedad del objeto: librosVariable[i][criterio]
 //            se usa con ${} cuando lo mostramos en un texto: `${criterio}`
 // valor    → recibe el DATO a buscar. Se compara con la propiedad del libro usando ===
 const resultados = []; // bloque 1: array vacío donde voy a guardar los libros encontrados. Los libros se van a ir agregando con .push() durante la búsqueda
 
 for (let i = 0; i < librosVariable.length; i++) {//bloque 2: el recorrido por cada libro, recorrer el array con un ciclo for 
    //inicio: i es la abreviatura de índice y representa el contador, el valor asignado es 0 porque en js los arrays empiezan en posición 0.
    //condición: Le dice al for hasta cuándo seguir, mientras la condición sea verdadera sigue repitiendo. El array empieza en 0 por eso uso <, si usara <= intentaría acceder a librosVariable[10] que no existe. Se actualiza automaticamente la cantidad de libros porque uso .length: es una propiedad de los arrays que te dice cuántos elementos tiene en ese momento (no es un número fijo que entorpecería la función si agrego un nuevo libro). No es necesario poner la propiedad .lenght entre paréntesis.
    //modificador: i se incrementa en cada vuelta 1. Pongo i++ que es la abreviatura de i= 1 + 1
  
    //bloque 3: comparación. 1 estructura if tradicional (dentro del for).En este caso voy a usar un if tradicional porque son varias lineas de código adentro.
    // IF es una estructura condicional/de control de flujo (para controlar qué camino toma el programa según una condición). Es una estructura que toma una decisión, "si se cumple esta condición, hacé esto".
      //if adentro del for: en cada vuelta del for, pregunta si el libro actual coincide con lo que buscamos.
   if (librosVariable[i][criterio] === valor){ //bloque 3 if adentro del for: La condicion tiene dos partes separadas por === que significa: exactamente igual. Acá criterio va entre [] porque es la sintaxis para entrar adentro de un objeto y buscar una propiedad de forma dinámica. Con los [] no estoy creando un array porque tiene algo a la izquierda, en este caso un objeto
    resultados.push(librosVariable[i]); //este push agrega al array resultados el libro de la vuelta actual del ciclo for que coincidió con la búsqueda.
    }
  }

  //bloque 4: Mostrar el resultado final. Después de terminar la búsqueda (recorrer todos los libros y llenar el array resultados), necesito mostrar lo que encontramos: caso 1 no encontró ningun libro o caso 2 encontró 1 o más libros. 
  //Voy a usar A- console.log para que muestre el resultado en la consola al developer y return para que le entrega el resultado al programa
  //A - muestre el resultado en la consola al developer
  if (resultados.length === 0) { //caso 1
  console.log (`No se encontraron libros con ${criterio}: "${valor}"`);
  } else { //caso 2
    console.log (`Se encontraron ${resultados.length} libro(s):`); //mensaje en la consola que dice la cantidad de libros
    console.log (resultados); //muestra datos de los libros encontrados
  }
  //B - Le entrega el resultado al programa
  return resultados;//RETURN Es la palabra reservada que usa una función para "devolver un resultado hacia afuera":significa que el resultado queda disponible para usarlo en otra parte del código. Sin return me devuelve undefined

}
//---- PRUEBAS ----
//En este archivo .js escribo :
//buscarLibro ("autor", "Charlotte Brontë"); //buscar por autor
//buscarLibro("autor", "Homero"); //Buscar algo que no existe
//En la terminal Git Bash escribo "node trabajoPracticoIntegrador_CamilaChirinoCastell.js"

//2.C Ordenar libros
//El objetivo es ordenar el array librosVariable por titulo o por año, usando un algoritmo específico llamado bubble sort.
//Algoritmo bubble sort: recorre el array comparando elementos de a pares, si están en el orden incorrecto, los intercambia. "burbuja" porque los valores más grandes van subiendo hacia el final del array. Repite esto hasta que todo esté ordenado.
//Lo divido en 4 bloques 1 -for externo → controla cuántas vueltas completas hace; 2 -for interno → compara pares de elementos en cada vuelta; 3 - if (el if decide SI hay que intercambiar) + intercambio (el intercambio ejecuta el cambio) → si están en orden incorrecto, los cambia; 4 -console.log → muestra el array ordenado
function ordenarLibros(criterio)  {
 for (let i = 0;i < librosVariable.length -1; i++) { //bloque 1 : este for controla cuántas vueltas completas hace el algoritmo sobre el array.Tengo que poner length-1 y no length solo porque en cada vuelta completa, el elemento más grande ya queda en su lugar correcto al final, entonces en la siguiente vuelta no hace falta revisarlo (ya queda), con length - 1 vueltas siempre es suficiente para ordenar todo el array.
  for (let j = 0;j < librosVariable.length -1 -i; j++){//bloque 2: un for andentro del for bloque 1. Este for interno trabaja adentro de cada vuelta: compara libros de pares en cada vuelta.
   //j:compara pares adentro de cada vuelta:El for interno usa j y j+1 para comparar dos libros que están uno al lado del otro. j es un nuevo contador (antes tenia solo i:cuenta vueltas completas)
   //en este caso uso length - 1 - i Porque en cada vuelta completa, los libros del final ya están ordenados y no hace falta revisarlos de nuevo  
   
   //bloque 3 if (el if decide SI hay que intercambiar) + intercambio (el intercambio ejecuta el cambio)
   if (librosVariable[j][criterio] > librosVariable[j+1][criterio]) { //IF: Compara dos libros que están uno al lado del otro. Si el de la izquierda es mayor que el de la derecha, están en el orden incorrecto y hay que intercambiarlos.
    
    //INTERCAMBIO: no se pueden intercambiar directamente asique uso una variable temporal (temp) que hace de lugar para el intercambio. Uso let y no const justamente porque es temporal. variable let temporal: vive solo dentro del if y su único trabajo es guardar un valor temporalmente.
    let temp = librosVariable[j]; //guardo libro A en temp
    librosVariable[j] = librosVariable[j+1]; //libro B ocupa el lugar de A
    librosVariable[j+1] = temp; //temp (libro A) ocupa el lugar de B
   }
  }
 }
 //bloque 4 mostrar resultado en consola: console.log
 console.log (`Libros ordenados por ${criterio}:`); //muetra mensaje
 console.log (librosVariable);//muestra datos
 //En esta función no puse return porque no lo pide la consigna, lo uso solo cuando el programa necesita usar el resultado afuera de la función.
}
//---- PRUEBAS ----
//En este archivo .js escribo :
//ordenarLibros("año");
//En la terminal Git Bash escribo "node trabajoPracticoIntegrador_CamilaChirinoCastell.js"


//2.D Borrar libros
//El objetivo es recibir un id por parámetro y eliminar del array librosVariable el libro que tenga ese id.
//Tambien voy a dividir esta función en 4 bloques: 1 - BUSCAR LA POSICIÓN del libro con ese id usando .findIndex; 2 -verificar si el libro existe con IF; 3 - Eliminar el libro que marcó la posición con .splice; 4 - Confirmar con mensaje en consola
function borrarLibro(id){
  const indice = librosVariable.findIndex (libro => libro.id === id);
  //bloque 1 Buscar la posición del libro con ese id con .findIndex. Tenemos 10 libros en una lista, queremos borrar uno. Pero para borrarlo primero necesitás saber en qué lugar de la lista está. .findIndex() es la herramienta que te dice la posición (es diferente a .find() que devuelve el objeto).
   // "indice" es una variable que guarda el número de posición que devuelve .findIndex() para usarlo después.Uso const y no let porque solo usamos la variable para leer la posición, no la vamos a cambiar.
   //.findIndex() (a modo de estudio) es una forma más corta y moderna de escribir un for + if de búsqueda. Recorre todo librosVariable pero en una sola línea.
   //Entre () escribo una arrow function (una función corta que se escribe en una línea): instrucción que le doy al método array .findIndex para que sepa qué buscar. En este caso : Buscar en librosVariable el índice del elemento donde el id del libro sea igual al id que busco.
   //"libro" es una variable temporal y automática con caracteristicas especiales. Representa: en cada vuelta libro es un objeto completo del array.
   //La flecha => reemplaza la palabra function y el return.
   // "libro.id" es acceder a la propiedad id de ese objeto temporal llamado libro
  if (indice === -1) { //bloque 2 Verificar si el libro existe con IF. La posición que guardé en el bloque 1 con "indice" la uso para decidir. Antes de borrar es buena practica verificar si el libro existe (si no existe javascript con .findIndex() devuelve -1 para decir que no encontro nada)
    console.log (`No se encontro ningún libro con id: ${id}`); //CASO .findIndex() devuelve -1 : el libro NO existe → mostrar mensaje de error
  } else { // bloque 3 y 4 van acá adentro

    //bloque 3 eliminar el libro del array con .splice. Parte A guardar el libro antes de borrarlo para usarlo después en un mensaje. Parte B borrarlo del array
    const libroEliminado = librosVariable[indice]; //A - Primero guardar el libro en libroEliminado ANTES de borrarlo. librosVariable[indice] , los [] pegados a librosVariable son la forma de acceder a un elemento del array por su posición
    librosVariable.splice(indice,1); //B - borrarlo del array. .splice es un método de array por lo tanto siempre recibe sus datos entre (). En este caso recibe dos parámetros separados por coma, indice (posición) y 1 (cuantos eliminar)
    
    console.log (`Libro "${libroEliminado.titulo}" eliminado correctamente.`); //bloque 4 mensaje en consola confirmando qué libro se eliminó
   
  }
}

//---- PRUEBAS ----
//En este archivo .js escribo :
//borrarLibro(3); Existe
//console.log(librosVariable); //para ver cuantos libros quedan despues de borrar
//En la terminal Git Bash escribo "node trabajoPracticoIntegrador_CamilaChirinoCastell.js"

//-------------------------------------------------------------------------------------------

//3️⃣ Funciones de Gestión de Usuarios

// es similar al punto 2 (Funciones de Gestion de libros)
//a) registrarUsuario
//b) mostrarUsuarios
//c) buscarUsuario
//d) borrarUsuario

//3.A Registrar Usuario
function registrarUsuario (nombre,email){
  const nuevoUsuario = {
  id: usuariosVariable.length+1, //A diferencia del id agregarLibro que se lo pasaba yo manualmente, en este caso el id se calcula solo asignandole siempre el siguiente número disponible (por eso el +1)
  nombre: nombre,
  email: email,
  librosPrestados: [], //siempre arranca vacío, un usuario nuevo no tiene libros prestados.
  };
  usuariosVariable.push (nuevoUsuario);
  console.log (`Usuario "${nombre}" agregado correctamente`);
};

//3.B Mostrar Usuarios
//objetivo: mostrar en consola (console.log) y devolver el array entero (return)
function mostrarTodosLosUsuarios (){ //Sin parámetros porque Porque usuariosVariable ya existe en el archivo y la función puede acceder a ella directamente
  console.log (usuariosVariable);
  return usuariosVariable;
}

//3.C Buscar Usuario
function buscarUsuario(email){
  const resultadosUsuario = []; // bloque 1: array vacío donde voy a guardar los usuarios encontrados.
  for (let i = 0; i < usuariosVariable.length; i++){ //bloque 2: recorro el array usuariosVariable con un ciclo for. (inicio,condición,modificador): i empieza en 0, continúa mientras sea menor que la cantidad de usuarios, y se incrementa en 1 en cada vuelta.
   if (usuariosVariable[i].email === email){ //bloque 3 if adentro del for: La condicion tiene dos partes separadas por === que significa: exactamente igual. 
    resultadosUsuario.push(usuariosVariable[i]); //este push agrega al array resultadosUsuarios el usuario de la vuelta actual del ciclo for que coincidió con la búsqueda.
   }
  }
  //bloque 4: Mostrar el resultado final
  console.log (`Se encontraron ${resultadosUsuario.length} usuario(s):`);
  console.log (resultadosUsuario);

  return resultadosUsuario;
}

//3.D Borrar Usuario
function borrarUsuario(nombre, email){ //dos parámetros porque varias personas pueden tener el mismo nombre
  
  const indice = usuariosVariable.findIndex (usuario => usuario.nombre === nombre && usuario.email === email); //buscar por dos parámetros juntos con && que significa "y".
  
  if (indice === -1){
   console.log (`No se encontró ningun usuario con nombre: "${nombre}" y email: "${email}"`)
  } else {
    const usuarioBorrado = usuariosVariable[indice];
    usuariosVariable.splice(indice,1);
    console.log (`Usuario "${usuarioBorrado.nombre}" con email "${usuarioBorrado.email}" eliminado correctamente.`);
  } 
}

//-------------------------------------------------------------------------------------------

//4️⃣ Funciones Sistema de Préstamos
//a)prestarLibro(idLibro, idUsuario)
//b)devolverLibro(idLibro, idUsuario)
//Por primera vez conecta los dos arrays — libros y usuarios — en una misma función. Las dos funciones tienen que modificar ambos arrays al mismo tiempo

//4.A Prestar Libro
//prestarLibro:  En librosVariable: cambiar disponible: true  a  disponible: false .En usuariosVariable: agregar el idLibro al array librosPrestados del usuario
//5 bloques: 1 - Buscar el libro con ese idLibro y buscar el usuario con ese idUsuario; 2- Verificar que el libro existe, el usuario existe y el libro está disponible; 3 - Modificar disponible a false en el libro; 4 - Agregar idLibro al array librosPrestados del usuario; 5 - Confirmar con console.log
function prestarLibro (idLibro, idUsuario){
  
  //bloque 1 buscar el libro y el usuario a partir de los id. Dos búsquedas separadas porque necesita modificar cosas en los dos arrays
  //array.find( nombreElemento => nombreElemento.propiedad === valorBuscado )
  //ARROW FUNCTION: en ambos casos. Lo que va entre () sigue una estructura por convención : elemento => condición . ELEMENTO: NOMBRE descriptivo del array que esta recorriendo, representa cada objeto en cada vuelta => CONDICIÓN:lo que evalúa cada vuelta, devuelve true o false. => Es simplemente la sintaxis que eligió JavaScript para las arrow functions
  const libro = librosVariable.find (libro => libro.id === idLibro); //podria usar for if pero es muy largo, .find() es mejor porque te da el objeto directamente para modificarlo. Si encuentra algo guarda el objeto completo y si no encuentra va a decir undefined.
  const usuario = usuariosVariable.find(usuario => usuario.id === idUsuario); 
  
  //bloque 2 Verificar que el libro y usuario existen, y que el libro esta disponible: un IF con 3 condiciones antes de prestar el libro. Si alguna falla, no tiene sentido seguir: muestra mensaje.
  //El operador ! invierte el valor booleano: true→false y false→true. Lo uso para verificar si libro o usuario son undefined (cuando .find() no encuentra nada)
  
  if (!libro){ //condición 1 El signo ! es un operador de negación. invierte el valor booleano. funciona con libro porque cuando .find() no encuentra nada devuelve undefined y en JavaScript undefined se comporta como false. Tambien podria usar libro === undefined
    console.log (`No se encontró ningún libro con id: ${idLibro}`);
  } else if (!usuario){ //condición 2
    console.log (`No se encontró ningún usuario con id: ${idUsuario}`);
  } else if (libro.disponible === false) { //condición 3 (si el libro y el usuario existen) verifica que el libro no esté ya prestado (disponible-false)
    console.log (`El libro "${libro.titulo}" no está disponible.`);
  } else { //bloque 3, 4 y 5
    libro.disponible = false; //bloque 3: modificar disponible a false
    usuario.librosPrestados.push(idLibro);//bloque 4: agregar idLibro al array librosPrestados del usuario
    console.log(`Libro "${libro.titulo}" prestado a "${usuario.nombre}" correctamente.`); //bloque 5 Confirmar con mensaje en consola
  }
}
//Pruebas
// prestarLibro (3,4); 

//4.B Devolver libro
//Es similar a la 4.A pero disponible: false → true y librosPrestados elimina el idLibro
function devolverLibro(idLibro, idUsuario) {
  const libro = librosVariable.find(libro => libro.id === idLibro); //bloque 1 buscar libro y usuario
  const usuario = usuariosVariable.find(usuario => usuario.id === idUsuario);

  if (!libro) { //bloque 2 verificar que existen y que el libro está efectivamente prestado a ese usuario. Tiene cuatro condiciones
    console.log(`No se encontró ningún libro con id: ${idLibro}`);
  } else if (!usuario) {
    console.log(`No se encontró ningún usuario con id: ${idUsuario}`);
  } else if (libro.disponible === true) { //condición 3 verificar que no este disponible
    console.log(`El libro "${libro.titulo}" no está prestado.`);
  } else if (!usuario.librosPrestados.includes(idLibro)) { //condición 4 verifica que el libro esté prestado específicamente a ese usuario. el ! invierte el resultado
    console.log(`El libro "${libro.titulo}" no está prestado a "${usuario.nombre}".`);
  } else {

    libro.disponible = true; //bloque 3 modificar disponible a true

    const indice = usuario.librosPrestados.findIndex(id => id === idLibro); //bloque 4 eliminar idLibro (un número) de librosPrestados. findIndex porque necesitás la posición para usar .splice(). En la arrow function cada elemento ya es el número, no necesita acceder a una propiedad (como la función anterior 4A).
    usuario.librosPrestados.splice(indice, 1);

    console.log(`Libro "${libro.titulo}" devuelto por "${usuario.nombre}" correctamente.`); //bloque 5 confirmar en consola
  }
}

//----------------------------------------------------------------------------------------------------------------
//5️⃣ Funciones Reporte
//5.A Generar Reporte Libros
function generarReporteLibros() {
   const totalLibros = librosVariable.length; //bloque 1 cantidad de libros: .length devuelve la cantidad de elementos del array.

   const librosPrestados = librosVariable.filter(libro => libro.disponible === false); //bloque 2 cantidad de libros prestados: uso .filter() que es un método de array que filtra elementos que cumplan una condición y devuelve un nuevo array solo con esos elementos 
   //A diferencia de .find() que devuelve el primer elemento que cumple (un objeto), .filter() devuelve todos los elementos que cumplen (un array)

   const librosPorGenero = librosVariable.reduce((acumulador, libro) => { //bloque 3 libros por género: uso .reduce que reduce todo el array a un solo valor (en este caso en particular : un objeto) array.reduce((acumulador, elemento) => {
   //.reduce() tiene dos parámetros: acumulador (el resultado que se va construyendo vuelta a vuelta), elemento (cada libro del array en cada vuelta).
    if (acumulador[libro.genero]) {
      acumulador[libro.genero] = acumulador[libro.genero] + 1;
    } else {
      acumulador[libro.genero] = 1; // primera vez que aparece este género
    }
    return acumulador;
  }, {}); //El acumulador empieza como {} un objeto vacío.

    const libroMasAntiguo = librosVariable.reduce((masAntiguo, libro) => { //bloque 4 libro más antiguo y más nuevo . Recorre todos los libros comparando años y se queda con el menor o el mayor.
    return libro.año < masAntiguo.año ? libro : masAntiguo; //? ternario: la versión corta del if en una sola línea
  }); //acumulador sin valor inicial: empieza siendo el primer elemento del array

  const libroMasNuevo = librosVariable.reduce((masNuevo, libro) => {
    return libro.año > masNuevo.año ? libro : masNuevo;
  });

  // bloque 5 Mostrar el resultado 
  console.log("=== REPORTE DE LIBROS ===");
  console.log(`Total de libros: ${totalLibros}`);
  console.log(`Libros prestados: ${librosPrestados.length}`);
  console.log(`Libros disponibles: ${totalLibros - librosPrestados.length}`);
  console.log("Libros por género:", librosPorGenero);
  console.log(`Libro más antiguo: "${libroMasAntiguo.titulo}" (${libroMasAntiguo.año})`);
  console.log(`Libro más nuevo: "${libroMasNuevo.titulo}" (${libroMasNuevo.año})`);

  return {
    totalLibros, //totalLibros: totalLibros Cuando el nombre de la propiedad y la variable tienen el mismo nombre se puede escribir una sola vez
    librosPrestados: librosPrestados.length,
    librosPorGenero,
    libroMasAntiguo,
    libroMasNuevo
  };
}

//-------PRUEBAS
//generarReporteLibros();
//En la terminal Git Bash escribo "node trabajoPracticoIntegrador_CamilaChirinoCastell.js"

//--------------------------------------------------------------------------------------------------------------
//6️⃣ Identificación Avanzada de libros
//objetivo: Encontrar todos los libros cuyo título tiene más de una palabra
//métodos strings
function librosConPalabrasEnTitulo() {

  const librosFiltrados = librosVariable.filter(libro => //filtrar los libros con más de una palabra en el título. Podria usar for pero .filter es mas corto
    libro.titulo.split(" ").length > 1 //.split() para contar las palabras del título. .split(" ") divide el título por cada espacio y devuelve un array de palabras. .length cuenta cuántas palabras tiene. > 1 verifica que tenga más de una palabra
  );

  const titulos = librosFiltrados.map(libro => libro.titulo); //.map que saque solo los títulos. Transforma cada elemento del array y devuelve un nuevo array con los resultados (en este caso transforma cada objeto libro en solo su título)

  //mostrar
  console.log("Libros con más de una palabra en el título:");
  console.log(titulos);
  return titulos;
}

//----------------------------------------------------------------------------------------------------------------
//7️⃣ Cálculos Estadísticos
//MATH Es un objeto incorporado en JavaScript que tiene propiedades y métodos para hacer cálculos matemáticos.
//Math siempre va con M mayúscula porque es el nombre del objeto
//Tres bloques: 1 -Promedio de años; 2- año más frecuente; 3- diferencia entre año más antiguo y nuevo.

function calcularEstadisticas() {

  //bloque 1 promedio de años
  const años = librosVariable.map(libro => libro.año); //extraer todos los años en un array
  const sumaAños = años.reduce((acumulador, año) => acumulador + año, 0); //sumarlos todos. Acá .reduce (en vez de construir un objeto) acumula una suma
  const promedio = Math.round(sumaAños / años.length); //dividir y redondear. math.round() redondea al número entero más cercano

  //bloque 2 año más frecuente
  const frecuencias = años.reduce((acumulador, año) => { //A — contar frecuencias con .reduce()
    if (acumulador[año]) {
      acumulador[año] = acumulador[año] + 1;
    } else {
      acumulador[año] = 1;
    }
    return acumulador;
  }, {});

  const añoMasFrecuente = Object.keys(frecuencias).reduce((masFrecuente, año) => { //B — encontrar el año más frecuente. Object.keys() devuelve un array con todas las claves de un objeto
    return frecuencias[año] > frecuencias[masFrecuente] ? año : masFrecuente;
  });

  //bloque 3 diferencia entre años
  const añoMasNuevo = Math.max(...años); //encontrar el año más nuevo
  const añoMasAntiguo = Math.min(...años); //encontrar el año más antiguo
  const diferencia = añoMasNuevo - añoMasAntiguo; //restar para obtener la diferencia
  //Math.max() y Math.min() son métodos del objeto Math que devuelven el número más grande o más pequeño
  //esperan números separados por coma, no un array. El operador ... spread resuelve esto: expande el array en elementos separados

  //mostrar resultados
  console.log("=== ESTADÍSTICAS ===");
  console.log(`Promedio de años: ${promedio}`);
  console.log(`Año más frecuente: ${añoMasFrecuente}`);
  console.log(`Diferencia entre años: ${diferencia} años`);

  return { promedio, añoMasFrecuente, diferencia };
}

//prueba
//calcularEstadisticas();

//----------------------------------------------------------------------------------------------------------------
//8️⃣Manejo de Cadenas
//objetivo: Limpiar y normalizar los datos del programa.
function normalizarDatos() {

  librosVariable.forEach(libro => { //Títulos a mayúsculas. .forEach() es un método de arrays que recorre cada elemento y ejecuta una acción. Parecido a for y .map pero este recorre y modifica (no devuelve nada)
    libro.titulo = libro.titulo.toUpperCase(); //.toUpperCase() es un método de strings que convierte todos los caracteres a mayúsculas
  });

  librosVariable.forEach(libro => { //Eliminar espacios en autores
    libro.autor = libro.autor.trim(); //.trim() es un método de strings que elimina los espacios en blanco del inicio y del final
  });

  usuariosVariable.forEach(usuario => { //Emails a minúsculas
    usuario.email = usuario.email.toLowerCase(); //.toLowerCase() : convertir a minúsculas
  });

  //mostrar resultados
  console.log("=== DATOS NORMALIZADOS ===");
  console.log("Títulos:", librosVariable.map(libro => libro.titulo));
  console.log("Autores:", librosVariable.map(libro => libro.autor));
  console.log("Emails:", usuariosVariable.map(usuario => usuario.email));
}

//----------------------------------------------------------------------------------------------------------------
//9️⃣Interfaz de Usuario por Consola
//Objetivo: mostrar un menú de opciones al usuario y permitir interactuar con el sistema usando prompt().
// Estructuras usadas: do while para repetir el menú, switch para manejar cada opción, parseInt para convertir strings a números
function menuPrincipal() {
  let opcion; //// let y no const porque la opción cambia en cada vuelta del ciclo
  do {
    console.log("\n=== MENÚ PRINCIPAL ==="); // \n agrega una línea vacía antes del menú para mejor legibilidad
    console.log("1. Agregar Libro");
    console.log("2. Buscar Libro");
    console.log("3. Ordenar Libros");
    console.log("4. Borrar Libro");
    console.log("5. Prestar Libro");
    console.log("6. Devolver Libro");
    console.log("7. Generar Reporte de Libros");
    console.log("8. Identificar Libros con Palabras en el Título");
    console.log("0. Salir");

    opcion = prompt("Seleccione una opción: "); //// prompt() muestra un cuadro de diálogo y devuelve siempre un string

    switch (opcion) { //switch mejor que if cuando hay muchas opciones
      case "1": {
        const id = parseInt(prompt("ID del libro: ")); //parseInt convierte el string que devuelve prompt() a número
        const titulo = prompt("Título del libro: ");
        const autor = prompt("Autor del libro: ");
        const anio = parseInt(prompt("Año de publicación: "));
        const genero = prompt("Género del libro: ");
        agregarLibro(id, titulo, autor, anio, genero);
        break;
      }
      case "2": {
        const criterio = prompt("Criterio de búsqueda (titulo, autor, genero): ");
        const valor = prompt("Valor de búsqueda: ");
        buscarLibro(criterio, valor);
        break;
      }
      case "3": {
        const criterioOrden = prompt("Criterio de ordenamiento (titulo, año): ");
        ordenarLibros(criterioOrden);
        break;
      }
      case "4": {
        const idBorrar = parseInt(prompt("ID del libro a borrar: "));
        borrarLibro(idBorrar);
        break;
      }
      case "5": {
        const idLibroPrestar = parseInt(prompt("ID del libro a prestar: "));
        const idUsuarioPrestar = parseInt(prompt("ID del usuario: "));
        prestarLibro(idLibroPrestar, idUsuarioPrestar);
        break;
      }
      case "6": {
        const idLibroDevolver = parseInt(prompt("ID del libro a devolver: "));
        const idUsuarioDevolver = parseInt(prompt("ID del usuario: "));
        devolverLibro(idLibroDevolver, idUsuarioDevolver);
        break;
      }
      case "7": {
        generarReporteLibros();
        break;
      }
      case "8": {
        librosConPalabrasEnTitulo();
        break;
      }
      case "0": {
        console.log("Saliendo del sistema...");
        break;
      }
      default: { //default → si ningún case coincide, equivale al else del if
        console.log("Opción no válida. Por favor, seleccione una opción del menú.");
      }
    }
  } while (opcion !== "0"); //// el ciclo se repite mientras el usuario no elija salir
}

//Pruebas
//Abrir index.html en el navegador, presionar F12 y en la consola escribír: menuPrincipal()