import { getHeroeById } from './bases/08-imp-exp'

/*const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        const heroe = getHeroeById(1);
        reject('No se encontró el heroe');
    }, 2000);

});

promesa.then((res) => {
    console.log(res);
}).catch(err => {
    console.warn(err);
});*/

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            heroe ? resolve(heroe) : reject('No se encontró el heroe');
        }, 2000);

    });
}

getHeroeByIdAsync(11)
    .then(console.log)
    .catch(console.warn);