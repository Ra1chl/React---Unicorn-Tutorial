import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Message from './Message'
import ListGroup from './components/ListGroup'

function App() {
  const [count, setCount] = useState(0)

  return (

    <><Message></Message><ListGroup></ListGroup></>
  );

}

export default App
