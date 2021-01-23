import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.test.js', () => {
    test('getSaludo debe retornar Hola nombre', () => {
        const nombre = 'Mario';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    })

    test('getSaludo debe retornar Hola Goku si no hay argumento nombre', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Goku');
    })

})
