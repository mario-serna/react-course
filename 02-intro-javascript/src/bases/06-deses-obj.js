// Desestructuración
// Destructuring assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.3312,
            lng: -13.3234
        }
    }
}

const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);

