import React from 'react'

const Card = (props) => {

  const {nombre, apellido, animeFavorito} = props


  return (
    <div className='card'>
      <p>
        Nombre: <span>{nombre}</span>
      </p>

      <hr />
      <p>
        Apellido: <span>{apellido}</span>
      </p>

      <hr />
      <p>
        Anime Favorito: <span>{animeFavorito}</span>     
      </p>

    </div>

  )
}

export default Card