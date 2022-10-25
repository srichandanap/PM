import React, { useState } from 'react'
import "./signInCard.css"
import Input from '../Input/input'
import eye from '../../assets/icons/eye_on.png'
import "../../styles.css"
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'


const SignInCard = () => {

    const [passwordType, setPasswordType] = useState<boolean>(false);

    const togglePassword = () => {

        setPasswordType(!passwordType);

    };


    return (
        <>
            <div className="signInContainer">
                <div className="group">
                    <div className="heading">sign in to your account </div>
                    <div className="tabs">
                        <div><NavLink to="/SignIn" className='mobileHeading'>
                            sign in
                        </NavLink></div>
                        <div ><NavLink to="/SignUp" className='mobileHeading'> sign up</NavLink></div>
                
                    </div>
                    <div className='formPage'>


                        <form className='formContainer'>

                            <Input placeholder='Mobile Number' type='tel' />

                            <div className="pinField">
                                <Input placeholder='MPin' type={passwordType ? "text" : "password"} />
                                <img className="eye" src={eye} alt="eye" onClick={togglePassword} />
                            </div>

                            <div className="forgot">Forgot your password?</div>

                            <button type='button' className='btn'>sign in</button>
                            <div className="dont_have_account">Don't have a Account? <Link to="/SignUp" className='links'> SIGNUP</Link></div>


                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignInCard