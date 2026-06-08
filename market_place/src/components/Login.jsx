import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='main_page'>
            <div className="login_page">
                <form className="container">
                    <div className="head">Log In</div>
                    <p className="text">WELCOME BACK</p>
                    <div className="inside_container">
                        <p className="ask">USERNAME</p>
                        <input type="text" placeholder='Enter Your Username' className='field-input' />
                        <p className="ask">PASSWORD</p>
                        <input type="password" placeholder='Enter Your Password' className='field-input' />
                        <button type='submit'>Log In</button>
                        <p className="not_login">Don't have account? <span>Sign up</span></p>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Login
