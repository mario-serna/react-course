const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 12345,
        lat: 12.12234,
        lng: 15.56444,
    }
};

const persona2 = { ...persona };

persona2.nombre = 'Peter';

console.log(persona, persona2);
