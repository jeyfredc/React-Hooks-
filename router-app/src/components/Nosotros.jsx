import React, {useEffect, useState} from 'react';

const Nosotros = () => {

    // const datos = [
    //     {id: 1, nombre: 'Reactjs'},
    //     {id: 2, nombre: 'Vuejs'},
    //     {id: 3, nombre: 'Angularjs'},
    // ]

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        // console.log(users)
        setEquipo(users)
    }

    const [equipo, setEquipo] = useState(null)

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
                    equipo.map(user => (
                        <li key={user.id}>{user.name} - {user.email}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros
