import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/home'
import Sign from './components/Sign'
import Login from './components/Login'
import Profile from './components/Profile'
import Orderhome from "./order/Orderhome";

function App() {
  return (
    <Routes>
      <Route path="/orderhome" element={<Orderhome/>} />
      <Route path="/" element={<Home />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App
