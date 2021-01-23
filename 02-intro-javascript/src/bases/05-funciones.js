// Funciones en JS

/* Forma no recomendada
function saludar(nombre) {
    return `Hola, ${nombre}`;
}*/

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Trunks'));
console.log(saludar4());

const getUser = () => ({
    uid: '123',
    username: 'user'
});

console.log(getUser());

// Tarea
// 1. Transformar a una función de Flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

function getUsuarioActivo(nombre) {
    return {
        uid: '123',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Mario');

const getUsuarioActivo2 = (nombre) => ({
    uid: '123',
    username: nombre
});

const usuarioActivo2 = getUsuarioActivo2('Mario2');

console.log(usuarioActivo);
console.log(usuarioActivo2);






