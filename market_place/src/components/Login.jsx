import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='main_page'>
            <div className="login_page">
                <form className="container">
                    <div className="head"><h2>Login</h2></div>
                    <div className="inside_container">
                        <p className="ask">Username</p>
                        <input type="text" placeholder='Enter Your Username' />
                        <p className="ask">Password</p>
                        <input type="password" placeholder='Enter Your Password' />
                        <p className="not_login">Don't have account? <span>Sign up</span></p>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Login
