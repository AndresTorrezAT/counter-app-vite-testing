
// const getElement = () => {
//     return (1+1);
// }

import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {

    // console.log( props );

    return (
        <>
            {/* <h1>{ getElement() }</h1> */}
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    );
 }


 FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
 }

 FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtítulo',
    name: 'Andrés Torrez',
 }