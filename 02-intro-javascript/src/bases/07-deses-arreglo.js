const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. Se llamará setNombre

const useState = (valor) => {
    return [valor, () => {
        console.log('Hola mundo');
    }];
}

//const arr = useState('Goku');
//arr[1]();

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre();
