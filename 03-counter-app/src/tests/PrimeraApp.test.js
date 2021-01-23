import React from 'react';
import { shallow } from 'enzyme';
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';

describe('Pruebas en <PrimeraApp />', () => {
    // test('debe mostrar el mensaje "Test"', () => {
    //     const saludo = 'Test';
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Test';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el subtítulo enviado por props', () => {
        const saludo = 'Test';
        const subtitulo = 'Subtitulo test';

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect(subtitulo).toBe(textoParrafo);
    });


});
