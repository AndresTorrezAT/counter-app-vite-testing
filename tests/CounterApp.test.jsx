import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en el <CounterApp />', () => {

    const valor = 100;

    test('debe hacer match con el snapshot', () => {

        const {container} = render( <CounterApp value={valor} />);
        expect(container).toMatchSnapshot();

    })

    test('debe de mostrar el valor inicial de 100', () => {

        render( <CounterApp value={100} />);
        
        expect( screen.getByText(100) ).toBeTruthy();

    })

    test('debe de mostrar el valor inicial de 100 en un h2', () => {

        render( <CounterApp value={100} />);
        expect( screen.getByRole('heading', { level:2 }).innerHTML ).toContain('100')

    })

    test('debe de incrementar con el boton +1', () => {

        render( <CounterApp value={valor} />);
        fireEvent.click( screen.getByText('+1'))
        expect( screen.getByText('101') ).toBeTruthy();


    })

    test('debe de decrementar con el boton -1', () => {

        render( <CounterApp value={valor} />);
        fireEvent.click( screen.getByText('-1'))
        expect( screen.getByText('99') ).toBeTruthy();
    })

    test('debe de funcionar el boton de reset', () => {

        render( <CounterApp value={500} />);
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('+1'))
        // fireEvent.click( screen.getByText('Reset'))
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }));
        
        expect( screen.getByText(500) ).toBeTruthy();



    })


})