import React from 'react'
import "./card.css"
import logo from '../../assets/images/logo.png'
import logoOne from '../../assets/images/logoOne.png'
import "../../styles.css"


const Card = () => {
    return (

        <>
            <div className='left'>

                <div className="leftContainer">
                    <img className='logo' src={logo} alt="logo" />
                    <div className="logoText">Protect & Manage every password in your business</div>

                    <div className="mobileContainer">
                        <img className='logoOne' src={logoOne} alt="logo" />
                    </div>

                </div>


                <div className="line"></div>
            </div>


        </>
    )
}

export default Card