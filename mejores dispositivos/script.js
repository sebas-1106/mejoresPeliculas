
        // Función para modificar el estilo de los siguientes elementos:
        //  - header: darle un al texto que sea itálico;
        //  - elemento con clase "item": modificar el color de fondo para que sea diferente al asignado en CSS;
        //  - elemento con identificador "lista" Añade un margen por debajo de la lista de 10 pixeles
		
        // Además de modificar estilos, debe realizar las siguientes instrucciones:
        //  - modificar el texto del span perteneciente al primer elemento de la lista a "CAMBIADO"
        //  - eliminar el último elemento de la lista haciendo referencia a la colección de elemento y al índice que se corresponda al último elemento 
		// **(recuerda utilizar console.log para ayudarte a ver los valores que va tomando las variables)	
		
		
		// Cuando tengas todo listo y funcionando, comprímelo y súbelo a Alexia. 
		
		// Opcional: dividir la ejecución con los cambios de estilos y la ejecución con las modificaciones en dos botones diferentes. 
		// Es decir, en lugar de 1 botón que haga todo, utiliza 2 botones, uno para cambiar estilos y otro para modificar y eliminar.
		// Opcionalmente también sube el proyecto a un nuevo repositorio privado a github e invítame como colaborador del repositorio; mi nombre de usuario: alexprometeo
function modificarDOM() {
   
    let head = document.getElementsByTagName("header");
    head[0].style.fontStyle="italic";
    console.log(head);
    let item= document.getElementsByClassName("item");
    item[0].style.backgroundColor="red";
    console.log("cambio color a")
    let lista= document.getElementById("lista")
    lista.style.marginBottom="10px";
    console.log("margen abajo")
    let span= document.getElementsByTagName("span");
    span[0].innerHTML="CAMBIADO";
    console.log("renombrado")
    item[item.length-1].remove();
    // item.parentNode;
    // item.remove();
}


