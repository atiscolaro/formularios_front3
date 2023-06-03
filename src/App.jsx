import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Card from './components/Card'

function App() {
  const [datos, setDatos] = useState({});

  const guardarDatos = (nombre, apellido, animeFavorito) => {
    setDatos({ nombre, apellido, animeFavorito });
  }

  return (
    <>
      <Formulario guardarDatos={guardarDatos} />
      <Card
        nombre={datos.nombre}
        apellido={datos.apellido}
        animeFavorito={datos.animeFavorito}
      />
    </>
  )
}

export default App;