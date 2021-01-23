import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas en funciones de Héroes', () => {
    test('debe retornar un héroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroesData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroesData);
    })

    test('debe retornar undefined si el héroe no existe', () => {
        const id = -1;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    })

    test('debe retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroe).toEqual(heroesData);
    })

    test('debe retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        // const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroe.length).toBe(2);
    })

})
