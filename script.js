function anadir(){
    var type = "p"; // Tipo de elemento que añadiremos
    var create = document.createElement(type); // Creamos el elemento con el tipo especificado anteriormente
    var textContent = prompt(`¿Qué contenido quieres que lleve tu elemento de tipo ${type}?`)
    create.textContent = textContent;
    document.body.appendChild(create);
}

function eliminarPrimero(){
    var type = prompt("¿Qué tipo de elemento quieres borrar?");
    var elements = document.getElementsByTagName(type);
    if(elements.length > 0)
        elements[0].remove();
    else
        alert(`No existe ningún elemento del tipo ${type}`)
}

function borrarTodos(){
    var type = prompt("¿Qué tipo de elemento quieres eliminar del árbol DOM?")
    var elements = document.getElementsByTagName(type);
    if(elements.length != 0){
        while(elements.length > 0){
            for (var i = 0; i < elements.length; i++) {
                elements[i].remove();
            }
        }
    }
    else
        alert(`No existe ningún elemento del tipo ${type}`)
}

function borrarEleccion(){
    var type = prompt("¿Qué elemento quieres borrar?")
    var elements = document.getElementsByTagName(type);
    if(elements.length != 0){
        for(var i = 0; i < elements.length; i++){
            alert(`Elemento ${type} ${i+1}: ${elements[i].innerHTML}`);
        }
        var index = prompt(`¿Qué elemento del tipo ${type} quieres borrar?`);
        elements[index-1].remove();
    }
}