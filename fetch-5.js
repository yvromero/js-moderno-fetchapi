

// fetch('https://reqres.in/api/users/1000')
//     .then( resp => {

//         if ( resp.ok ) {
//             resp.json().then( console.log );
//         } else {
//             console.log("No existe el usuario");
//         }

//         })

//     .catch( error => {
//         console.log('Error en la peticion');
//         console.log( error );
//     });


// Ejemplo manejo de error personalizado en el catch

fetch('https://reqres.in/api/users/1000')
    .then( resp => {

        if ( resp.ok ) {
            return resp.json();
        } else {
            throw new Error("No existe el usuario");
        }

    })

    .then( console.log )
    .catch( error => {
        console.log('Error en la peticion');
        console.log( error );
    });