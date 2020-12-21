import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'

const Nosotros = () => {

    // const datos = [
    //     {id: 1, nombre: 'Reactjs'},
    //     {id: 2, nombre: 'Vuejs'},
    //     {id: 3, nombre: 'Angularjs'},
    // ]

    const obtenerDatos = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const names = await data.json()
        // console.log(users)
        setCivilizacion(names.civilizations)
    }

    const [civilizacion, setCivilizacion] = useState([])

    useEffect(()=> {
        console.log('useEffect')
        // setEquipo(datos)
        obtenerDatos()
    }, [])


    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    civilizacion.map(name => (
                        <li key={name.id}>
                            <Link to={`/nosotros/${name.id}`}>
                                {name.name} - {name.expansion}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros
