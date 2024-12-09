# Manipulación del DOM: Añadir y Eliminar Elementos

Este proyecto es una práctica interactiva de manipulación del árbol DOM utilizando JavaScript puro. Permite al usuario añadir y eliminar elementos de la página mediante prompts y acciones dinámicas.

## 🛠️ Tecnologías utilizadas
- **HTML5**: Proporciona la estructura de la página.
- **JavaScript**: Se utiliza para implementar la lógica de manipulación del DOM y las interacciones del usuario.

## 🎯 Funcionalidades

### Añadir elementos al DOM:
El usuario puede añadir un nuevo elemento HTML especificando su tipo (como p, div, h1, etc.) y su contenido.

### Eliminar el primer elemento de un tipo específico:
Permite seleccionar un tipo de elemento y eliminar su primera aparición en el DOM.

### Eliminar todos los elementos de un tipo específico:
Elimina todos los elementos de un tipo dado (div, p, etc.) de la página.

### Eliminar un elemento específico:
Muestra una lista de elementos de un tipo especificado, permite al usuario seleccionar uno por su posición y lo elimina del DOM.

## 🚀 Cómo probar el proyecto
1. Clona este repositorio:

    ```bash
    git clone https://github.com/danijimm/PracticaDOM.git
    ```

2. Abre el archivo `index.html` en tu navegador preferido.
3. Interactúa con la página utilizando las funciones definidas en el archivo `script.js`.

## 📂 Estructura del proyecto
```bash
├── index.html       # Página principal que carga el script
├── script.js        # Contiene las funciones de manipulación del DOM
└── README.md        # Documentación del proyecto
```

## 🧩 Descripción técnica de las funciones

### `anadir()`
- Crea un nuevo elemento de tipo especificado (p, div, etc.).
- Pide al usuario que introduzca el contenido mediante un prompt.
- Añade el elemento al final del cuerpo del documento.

### `eliminarPrimero()`
- Solicita el tipo de elemento que se desea eliminar.
- Busca el primer elemento de ese tipo en el DOM y lo elimina.
- Muestra un mensaje de error si no hay elementos del tipo especificado.

### `borrarTodos()`
- Solicita el tipo de elemento que se desea eliminar.
- Elimina todos los elementos de ese tipo.
- Muestra un mensaje de error si no hay elementos que coincidan.

### `borrarEleccion()`
- Solicita el tipo de elemento y muestra todos los elementos coincidentes con su índice.
- Permite al usuario seleccionar uno por su índice y lo elimina del DOM.

## ✨ Vista previa

A continuación, se muestra una captura de pantalla del proyecto en acción:  
![Vista previa del proyecto](https://imgur.com/tVuGWj9.png)

## 🤝 Contacto
Si tienes alguna pregunta o deseas discutir posibles colaboraciones, no dudes en ponerte en contacto:

- Correo: danielamoresjimenez@gmail.com
- GitHub: @danijimm
