import React from 'react'
import './home.css'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="navbarin">
                <div className="logo">PICT</div>
                <div className="function">
                    <div className="home">Home</div>
                    <div className="about">About</div>
                    <div className="contact">Contact Us</div>
                    <div className="sign_in">
                        <button onClick={() => navigate('/sign')}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
