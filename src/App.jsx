import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card'
import Form from './Form'
import './App.css'

function App() {
  const [motos,setMotos]=useState([]);

  const addMoto= (moto) => {
    setMotos([...motos,moto]);
  };

  return (
    <>
      <h1>Registro de motos</h1>
      <Form onAddMoto={addMoto}/>
      <Card motos={motos}/>
    </>
  )
}

export default App
