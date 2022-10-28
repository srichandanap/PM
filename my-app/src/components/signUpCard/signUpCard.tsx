import React, { useState } from 'react'
import "../signInCard/signInCard.css"
import Input from '../Input/input'
import eye from '../../assets/icons/eye_on.png'
import "../../styles.css"
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const SignUpCard = () => {

    const [passwordType, setPasswordType] = useState<boolean>(false);

    const togglePassword = () => {

        setPasswordType(!passwordType);

    };

    return (
        <>
            <div className="signInContainer">
                <div className="group">
                    <div className="signUpHeading">sign up </div>
                    <div className='formPage'>

                    <div className="tabs">
                        <div><NavLink to="/" className='mobileHeading'>
                            sign in
                        </NavLink></div>
                        <div ><NavLink to="/SignUp" className='mobileHeading'> sign up</NavLink></div>

                    </div>

                        <form className='formContainer'>

                            <Input placeholder='Enter Mobile Number' type='tel' maxLength={10} minLength={10} />

                            <div className="re_enter">
                                <Input placeholder='Enter 4Digit MPin' type='password' />
                            </div>

                            <div className="pinField">
                                <Input placeholder='Re-Enter 4Digit MPin' type={passwordType ? "text" : "password"} />
                                <img className="eye" src={eye} alt="eye" onClick={togglePassword} />
                            </div>


                            <button type='button' className='btn'>sign up</button>

                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignUpCard