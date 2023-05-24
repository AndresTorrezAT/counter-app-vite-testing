import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";


describe('Pruebas en 07-deses-arr', () => { 

    test('debe de retornar un string y un número', () => {
        
        const [ letters, numbers ] = retornaArreglo();

        expect(letters).toBe( 'ABC' );
        expect(numbers).toBe( 123 );

        // Forma 1 de identificar que el dato venga del tipo correcto
        expect( typeof letters ).toBe('string');
        expect( typeof numbers ).toBe('number');


        // Forma 2
        expect( letters ).toEqual( expect.any(String) );


     })

});