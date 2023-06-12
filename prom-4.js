//Funcion tradicional
function sumarLento(numero) {

    return new Promise( function(resolve, reject){

        setTimeout(function() {
            resolve( numero + 1)
        }, 800 );
    });
}

//Funcion con =>
let sumarRapido = (numero) => {

    return new Promise((resolve, reject) => {

        setTimeout( ()=> {

            //resolve( numero + 1 )
            reject( 'Error en sumar rapido' )
        }, 300 );

    });
}

//Promise.all 
Promise.all( [ sumarLento(5), sumarRapido(10)] )
    .then( respuestas => {
        console.log(respuestas);
    });


//Promise.race
Promise.race( [ sumarLento(5), sumarRapido(10)] )
    .then( respuesta => {
        console.log(respuesta);
    })
    .catch( console.log );