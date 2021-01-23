
// Vairables y Constantes

const nombre = 'Mario';
const apellido = 'Serna';

const nombreCompleto = `${nombre} ${apellido}`;

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);
