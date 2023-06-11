function sumarUno( numero ) {

    var promesa = new Promise( function( resolve, reject ) {

        console.log(numero);

        if ( numero >= 7 ) {
            reject('El numero es muy alto');
            //return
        }

        setTimeout( function() {

            resolve( numero + 1 );
            
        }, 800);

    });

    return promesa;

}

// Ejemplo 1
// sumarUno( 5 ).then( nuevoNumero => {
//     sumarUno( nuevoNumero ).then( nuevoNumero2 => {
//         console.log(nuevoNumero2);
//     });
// });

// Ejemplo 2 => Recomendado .then(debe regresar una promesa)
// sumarUno( 5 ).then( nuevoNumero => {
//     console.log(nuevoNumero);
//     return sumarUno( nuevoNumero );
// })
// .then( nuevoNumero => {
//     console.log(nuevoNumero);
//     return sumarUno( nuevoNumero );
// })
// .then(nuevoNumero => {
//     console.log(nuevoNumero);
// });

// Ejemplo 3 => Tip para reducir el codigo con varias funciones
sumarUno( 5 )
    .then( sumarUno )
    .then( sumarUno )
    .then( sumarUno )
    .then( sumarUno )
    .then( sumarUno )
    .then( nuevoNumero => {
        console.log(nuevoNumero);
    })
    .catch( error => {
        console.log('Error en promesa');
        console.log(error);
    });

// Ejemplo 4 => Tip para reducir el codigo con catch
// sumarUno( 8 )
//     .then( nuevoValor => {
//         console.log(nuevoValor);
//     })
//     .catch( error => {
//         console.log('Error en promesa');
//         console.log(error);
//     });



