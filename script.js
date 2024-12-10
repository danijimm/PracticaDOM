function anadir(){
    var type = prompt('¿Qué tipo de elemento quieres añadir?');
    var create = document.createElement(type);
    var textContent = prompt(`¿Cuál quieres que sea el contenido de tu elemento ${type}?`)
    create.textContent = textContent;
    document.body.appendChild(create);
}

function eliminarPrimero(){
    var type = prompt('¿Qué tipo de elemento es el que quieres borrar?');
    var elements = document.getElementsByTagName(type);
    elements[0].remove();
}

function eliminarTodos(){
    var type = prompt('¿Qué tipo de elemento es del que quieres borrar todos?');
    var elements = Array.from(document.getElementsByTagName(type));
    if(elements.length > 0){
        for(var i = 0; i < elements.length; i++){
            elements[i].remove();
        }
        alert(`Todos los elementos ${type} han sido borrados`);
    } else
        alert(`No existe ningún elemento de tipo ${type}`);
}

function eliminarEleccion(){
    var type = prompt('¿Qué tipo de elemento quieres borrar?');
    var elements = Array.from(document.getElementsByTagName(type));
    if(elements.length > 0){
        for(var i = 0; i < elements.length; i++){
            alert(`Elemento ${type} ${i+1}: ${elements[i].innerHTML}`);
        }
        var index = prompt('¿Cuál de todos quieres borrar?');
        elements[index - 1].remove();
    } else
        alert(`No existe ningún elemento de tipo ${type}`);
}

function modificar(){
    var type = prompt('¿Qué tipo es el elemento que quieres modificar?');
    var elements = Array.from(document.getElementsByTagName(type));
    if(elements.length > 0){
        for(var i = 0; i < elements.length; i++){
            alert(`Elemento ${type} ${i+1}: ${elements[i].innerHTML}`);
        }
        var index = prompt('¿Cuál de todos quieres modificar?');
        var text = prompt(`Texto antiguo: ${elements[index - 1].innerHTML}\nTexto nuevo: `);
        elements[index - 1].textContent = text;
    } else
        alert(`No existe ningún elemento de tipo ${type}`);
}

function sustituir(){
    var type = prompt('¿Qué tipo de elemento es el que quieres sustituir?');
    var elements = Array.from(document.getElementsByTagName(type));
    if(elements.length > 0){
        var finalType = prompt('¿Por qué elemento quieres que sea sustituido?');
        for(var i = 0; i < elements.length; i++){
            var newElement = document.createElement(finalType);
            newElement.textContent = elements[i].textContent;
            elements[i].parentNode.replaceChild(newElement, elements[i]);
        }
    } else
        alert(`No existe ningun elemento de tipo ${type}`);
}