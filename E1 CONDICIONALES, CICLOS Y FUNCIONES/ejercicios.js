// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function EsPar(numero){

    if(numero % 2 == 0){
        console.log(`${numero} es par.`);
    }
    else{
        console.log(`${numero} no es par.`);
    }

}

// Ejemplos de uso:
//EsPar(7); //Salida: 7 no es par.
//EsPar(6); //Salida: 6 es par.



// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
function CompararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} es mayor que ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} es mayor que ${num1}`);
    } else {
        console.log(`${num1} y ${num2} son iguales.`);
    }
}

// Ejemplos de uso:
// CompararNumeros(6,7); //Salida: 7 es mayor que 6
// CompararNumeros(6,6); //Salida: 6 y 6 son iguales.
// CompararNumeros(6,5); //Salida: 6 es mayor que 5 

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function EsMultiploCinco(numero){
    if(numero % 5 == 0){
        console.log(`${numero} es múltiplo de 5.`)
    }
    else{
        console.log(`${numero} no es múltiplo de 5.`)
    }
}

// Ejemplos de uso:
//EsMultiploCinco(10); // Salida: 10 es múltiplo de 5.
//EsMultiploCinco(12); // Salida: 12 no es múltiplo de 5.
//EsMultiploCinco(15); // Salida: 15 es múltiplo de 5.

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function EnumerarHasta(numero){
    for (let index = 0; index <= numero; index++) {
        console.log(index);       
    }
}

//EnumerarHasta(5);
// Salida:
// 0
// 1
// 2
// 3
// 4
// 5


// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function Repetir(numero, palabra){
    console.log(`Repetir la palabra ${palabra} ${numero} veces`);
    for (let index = 1; index <= numero; index++) {
        
        console.log(`${index}: - ${palabra}`);
        
    }
}

//Repetir(3, "Hola");
//Salida:
// Repetir la palabra Hola 3 veces
// 1: - Hola
// 2: - Hola
// 3: - Hola

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const array1 = [0, 1, 2, 3, 4, 5];
const array2 = ["A", "B", "C", "D", "E"];

function EnumerarItems(array) {
    array.forEach((element, index) => {
        console.log(`Elemento ${index + 1}: ${element}`);
    });
}

//EnumerarItems(array1);
//Salida:
// Elemento 1: 0
// Elemento 2: 1
// Elemento 3: 2
// Elemento 4: 3
// Elemento 5: 4
// Elemento 6: 5
//EnumerarItems(array2);
// Salida:
// Elemento 1: A
// Elemento 2: B
// Elemento 3: C
// Elemento 4: D
// Elemento 5: E


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. 
//Ayuda: Recuerden que el primer índice de un array es "0".

const array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function EnumerarPosiciones(array) {
    array.forEach((element, index) => {
        if (index !== 4) {
            console.log(`Elemento ${index}: ${element}`);
        }
    });
}

//EnumerarPosiciones(array3);
//Salida:
// Elemento 0: 0
// Elemento 1: 1
// Elemento 2: 2
// Elemento 3: 3
// Elemento 5: 5
// Elemento 6: 6
// Elemento 7: 7
// Elemento 8: 8
// Elemento 9: 9


// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function MultiplicarNumeros(array, numero){
    array.forEach((element,index) => {
        console.log(`Elemento ${index}: ${element} * ${numero} = ${element*numero}`);
    })
}

//MultiplicarNumeros(array1, 2);
//Salida:
// Elemento 0: 0 * 2 = 0
// Elemento 1: 1 * 2 = 2
// Elemento 2: 2 * 2 = 4
// Elemento 3: 3 * 2 = 6
// Elemento 4: 4 * 2 = 8
// Elemento 5: 5 * 2 = 10