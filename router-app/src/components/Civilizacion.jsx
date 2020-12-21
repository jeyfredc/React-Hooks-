import React from 'react';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Civilizacion = () => {

    // console.log(useParams())

    const {id} = useParams()
    console.log(id)

    const [datosCivilizacion, setDatosCivilizacion] = useState([])

    useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
            const names = await data.json()
            // console.log(names)
            setDatosCivilizacion(names)
        }
        obtenerDatos()
    }, [id])
    

    return (
        <div>
            <h1>{datosCivilizacion.name}</h1>
            <h3>{datosCivilizacion.expansion}</h3>
            <p>{datosCivilizacion.civilization_bonus}</p>
        </div>
    )
}

export default Civilizacion
