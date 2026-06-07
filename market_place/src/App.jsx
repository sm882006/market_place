import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/home'
import Sign from './components/Sign'
import Login from './components/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default App
