import React, {useState, Fragment} from 'react'

const Contador = () => {

    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        console.log('Estoy haciendo click')
        setNumero(numero +1);
    }

    return ( 
        <Fragment>
            <h3>Mi {numero} componente</h3>
            <button onClick={ aumentar }>Aumentar</button>
        </Fragment>
     );
}
 
export default Contador;