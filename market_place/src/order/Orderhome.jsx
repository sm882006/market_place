import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Orderhome.css';

const Orderhome = () => {
    return (
        <div className='home_page'>
            <div className="left-part">
                <div className="orderheading">Buy & Sell Section</div>
            </div>
            <div className="right-part">
                <div className="upperorder">
                    <div className="searchorderitem"><input type="text" placeholder='Search Item Here' /></div>
                    <div className="sellbutton"><button>sell item</button></div>
                </div>
            </div>
        </div>
    )
}

export default Orderhome
