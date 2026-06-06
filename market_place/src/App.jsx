import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/home'
import Sign from './components/Sign'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign" element={<Sign />} />
    </Routes>
  )
}

export default App
