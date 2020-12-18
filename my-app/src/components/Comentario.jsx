import React, { Fragment } from 'react';
import Avatar from './Avatar'

const Comentario = ({sujeto}) => {
    return ( 
        <Fragment>
            <h1>Comentarios</h1>
            <hr className="bg-light"/>
            <div className="media">
              {/* <img className="mr-3" src={sujeto.urlImagen} alt="Generic placeholder image"/> */}
              <Avatar urlImagen={sujeto.urlImagen} />
              <div className="media-body inline-flex">
                <h5 className="mt-0">{sujeto.nombre}</h5>
                {sujeto.texto}
              </div>
            </div>
        </Fragment>
     );
}
 
export default Comentario;