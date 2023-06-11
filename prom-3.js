//Ejemplo de cualquier funcion para COSAS

function retornaTrue() {
    return true;
}

//Funcion tradicional
function sumarLento(numero) {

    return new Promise( function(resolve, reject){
        setTimeout(function() {
            resolve( numero + 1)
            //reject( 'Sumar Lento fallo ')
        }, 800 );
    });

}

//Funcion con =>
let sumarRapido = (numero) => {

    return new Promise((resolve, reject) => {

        setTimeout( ()=> resolve( numero + 1 ), 300 );

    });

}

//Ejercicio para enviar cualquier tipo de parametros en el arreglo de la funcion
// para el Promise.all
let cosas = [sumarLento(5), sumarRapido(10), true, 'Cositas', retornaTrue()]

Promise.all(cosas)
        .then( respuestas => {
            console.log( respuestas );
    })
    .catch( console.log );

//Correr varias promesas en simultaneo
// Promise.all([ sumarLento(5), sumarRapido(10) ])
//         .then( respuestas => {
//             console.log( respuestas );
//     })
//     .catch( console.log );

// sumarLento( 5 ).then( console.log );
// sumarRapido( 10 ).then( console.log );

