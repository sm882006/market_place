import React from 'react'
import './home.css'
import Sign from './sign'

const Home = () => {
    return (
        <div className="navbar">
            <div className="navbarin">
                <div className="logo">PICT</div>
                <div className="function">
                    <div className="home">Home</div>
                    <div className="about">About</div>
                    <div className="contact">Contact Us</div>
                    <div className="sign_in"><Sign/></div>

                </div>
            </div>
        </div>
    )
}

export default Home
