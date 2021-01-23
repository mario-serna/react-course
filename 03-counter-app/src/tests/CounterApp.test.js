//
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });


    test('debe de mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 10', () => {
        const wrapper = shallow(<CounterApp value={100} />);

        const textoValor = wrapper.find('h2').text().trim();

        expect(textoValor).toBe('100');
    });

    test('debe de incrementar con el botón +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });

    test('debe de disminuir con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('debe de restablecer el valor', () => {
        const wrapper = shallow(<CounterApp value={100} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');
    });

})
