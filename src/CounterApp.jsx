import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

  const [ counter, setCounter] = useState( value );

  const handleAdd = () => {
    // console.log(event);
    //  console.log(counter);
    setCounter( counter + 1 ); //LITERALMENTE CUANDO SE EJECUTA EL "SET..." SE VUELVE A EJECUTAR EL COMPONENTE (SE VUELVE A REDERIZAR), LO UNICO QUE MANTRIENE SON LAS PROMPS "VALUE" 
   
    // setCounter( (c) => c + 1 );
  
  }

  const handleSubtract = () => {
  
    setCounter( counter - 1 ); //LITERALMENTE CUANDO SE EJECUTA EL "SET..." SE VUELVE A EJECUTAR EL COMPONENTE (SE VUELVE A REDERIZAR), LO UNICO QUE MANTRIENE SON LAS PROMPS "VALUE"
  
  }

  const handleReset = () => {
  
    setCounter( value ); //LITERALMENTE CUANDO SE EJECUTA EL "SET..." SE VUELVE A EJECUTAR EL COMPONENTE (SE VUELVE A REDERIZAR), LO UNICO QUE MANTRIENE SON LAS PROMPS "VALUE"
  
  }

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleSubtract }> -1 </button>
        <button onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
