import React, { Fragment, useState } from 'react'
import {useForm} from 'react-hook-form'

const EjemploUno = () => {

    const {register, errors, handleSubmit} = useForm();
    
    const [entradas, setEntradas] = useState([])

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
        setEntradas([
            ...entradas,
            data
        ])
    }
    

    return ( 
        <Fragment>
            <h1>Ejemplo 1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                name="titulo"
                placeholder="Ingrese título"
                className="form-control my-2"    
                ref ={
                    register({
                        required: {value:true, message: 'Campo obligatorio'},
                        minLength: {value:10, message: 'Mínimo 10 caracteres'}
                    }) 
                } 
                >
                </input>
                {
                    errors.titulo && 
                    <span className="text-danger text-small d-block mb-2">
                    {errors.titulo.message}
                    </span>
                }
                <input
                name="descripcion"
                placeholder="Ingrese descripción"
                className="form-control my-2"
                ref ={
                    register({
                        required: {value:true, message: 'Campo obligatorio'},
                    }) 
                }      
                >
                    
                </input>
                {
                    errors.descripcion &&
                    <span className="text-danger text-small d-block mb-2">
                    {errors.descripcion.message}
                    </span>
                }
                <button className="btn btn-primary">Agregar</button>
            </form>
            <ul>
                {
                    entradas.map(item=> 
                        <li>{ item.titulo } - {item.descripcion}</li>)
                }
            </ul>
        </Fragment>
     );
}
 
export default EjemploUno;