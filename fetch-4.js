// Ejercicio para hacer fetch a algun recurso y almacenar en el navegador para futuras lecturas
let img = document.querySelector('img');


fetch( 'superman.png' ) // 
    .then( resp => resp.blob() ) // Se obtiene la respuesta y se extrae el readeblestream IMG
    .then( imagen => { // Leer imagen

        console.log(imagen); // Imprime
        var imgPath = URL.createObjectURL( imagen ); //Envia una img y cree la url para observar la img
        img.src = imgPath;
    });