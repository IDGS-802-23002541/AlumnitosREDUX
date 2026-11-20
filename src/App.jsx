import { useState } from 'react'
import './App.css'
import Alumnitos from './Alumnitos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Alumnitos />  
    </>
  )
}

export default App
