import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";



describe('Pruebas en 08-imp-exp', () => {

    test('getHerobyId debe de retornar un heroe por ID', () => { 
    
        const id = 1;
        const hero = getHeroeById( id );
        
        // console.log(hero);

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        //toEqual por que es objeto
    })

    test('getHerobyId debe de retornar undefind si no existe', () => { 
    
        const id = 100;
        const hero = getHeroeById( id );
        
        // expect( hero ).toBe( undefined );

        expect( hero ).toBeFalsy()
        //null, undefined, false
    })

    test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => {
    
        const owner = "DC";

        const heroes = getHeroesByOwner( owner );

        // console.log( heroes.length );

        expect( heroes.length ).toBe( 3 );

        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);


    })

 });