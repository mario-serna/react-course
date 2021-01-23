describe('Pruebas para el archivo demo.test.js', () => {

    test('deben ser iguales los string', () => {

        // 1. Inicialización (Arrange)
        const mensaje = 'Hola Mundo';

        // 2. Estímulo (Act)
        const mensaje2 = `Hola Mundo`;
        
        // 3. Observar el comportamiento (Assert)
        expect(mensaje).toBe(mensaje2);
    })

});

