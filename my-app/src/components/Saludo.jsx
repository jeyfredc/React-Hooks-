import React, { Fragment } from 'react';

const Saludo = (props) => {
    console.log(props)
    return ( 
        <Fragment>
            <h2>Hola! {props.persona}</h2>
            <h3>Tengo {props.edad} años</h3>
            <br/>
        </Fragment>

     );
}
 
export default Saludo;
