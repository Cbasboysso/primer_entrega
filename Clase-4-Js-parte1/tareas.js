// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  let hmm=array[0];
 return hmm;
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimo=array;
  var f=ultimo[ultimo.length-1];
  return f;
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var largo=array.length;
  return largo;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:,

  for ( let i=0; i< array.length; i++)
      {
        array[i]+= 1;
      }

  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
let total=palabras.reduce((a,b) =>a +" "+ b);
return total;
}
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código: 
  let comp=array.includes(elemento);
  if (comp===true ){
    return true;
  }else{
    return false;
  }
  

}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let total=0;
  for (let i =0 ; i<numeros.length; i++) total+=numeros[i];
  return total;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let total=0;
  let prom;
  for (let i =0 ; i<resultadosTest.length; i++) total+=resultadosTest[i];
  prom=total/resultadosTest.length;
  return prom;

}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max=0;
  for(let i =0; i<numeros.length; i++) {
    if (numeros[i]>max){
      max=numeros[i];
    }
  } return max;
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
 var contador=0;
 var tcl=arreglo;
 var comp= 18;
 for(let i =0; i<tcl.length; i++)
 {
  if(tcl[i] > comp){
  contador ++
  }
 
 } return contador; 
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí: 
  if ( numeroDeDia===1 || numeroDeDia===7){
    return "Es fin de semana";
  }else  if (numeroDeDia ===2 || numeroDeDia ===3 || numeroDeDia ===4 || numeroDeDia ===5 || numeroDeDia ===6){
    return "Es dia Laboral"
  }
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

var str=n.toString();

if(str[0]==="9")

{
  return true;
}else {
  return false;
}

}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
  let sumas=0;
  let brreglo=arreglo;

   for (let i =0; i<arreglo.length; i++ ){
    if ( arreglo[i] === brreglo[i+1] && arreglo[0]===brreglo[brreglo.length-1]  && arreglo[arreglo.length-1] === brreglo[0]) {
      sumas++
    }
   }
if (sumas ===arreglo.length-1){
  return true;
}else {
  return false;
}

} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
 var nmeses=[];
  for(let i=0; i<array.length; i++)
  {
        for(let x=0;x<3 ; x++)
        {
          if (array.includes("Enero") && array.includes("Marzo" )&& array.includes("Noviembre"))
          {
            nmeses[x]=array[array.indexOf("Marzo")]
            nmeses[x+1]=array[array.indexOf("Noviembre")]
            nmeses[x+2]=array[array.indexOf("Enero")];
            return nmeses;
          }else{
            return "No se encontraron los meses pedidos"
          }
        }
  }

}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nnum=[];
  var x=-1;
for(let i=0; i<array.length; i++)
{ 
  if(array[i]>100)
  { x++
    
    nnum[x]=array[i];
}
}
return nnum;
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
