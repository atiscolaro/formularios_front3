import React, { useState } from 'react'

const Formulario = (props) => {

  const { guardarDatos } = props

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [animeFavorito, setAnimeFavorito] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
      guardarDatos(nombre, apellido, animeFavorito)
      setNombre('')
      setApellido('')
      setAnimeFavorito('')
  }


  return (
    <>
      <h1>¿Cuestionario frikkie?</h1>
      <form
        onSubmit={handleSubmit}
        className='form'
      >
        <label htmlFor='nombre'>
          Nombre
        </label>
        <input
          id='nombre'
          type="text"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        
        <label htmlFor='apellido'>
          Apellido
        </label>
        <input
          id='apellido'
          type="text"
          placeholder="Ingrese su apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />

        <label htmlFor='anime'>
          Anime Favorito
        </label>
        <input
          id='anime'
          type="text"
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={animeFavorito}
          onChange={(e) => setAnimeFavorito(e.target.value)}
        />
        
        <hr />

        <button type='submit'>Enviar</button>

    </form >



    
    </>
  )
}

export default Formulario;