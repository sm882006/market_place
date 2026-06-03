import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/home'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
      <div>hello
      </div>
      <Login/>
    </>
  )
}

export default App
