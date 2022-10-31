import React, { useState, useEffect } from 'react'
import "../signInCard/signInCard.css"
import Input from '../Input/input'
import eye from '../../assets/icons/eye_on.png'
import "../../styles.css"
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SignUpCard = () => {

    const [passwordType, setPasswordType] = useState<boolean>(false);

    const togglePassword = () => {

        setPasswordType(!passwordType);

    };

    const navigate = useNavigate();
    const handleSubmit = (event: any) => {
        event.preventDefault();

        const number = event.target.number.value;
        const mpin = event.target.mpin.value;
        const newPin = event.target.newPin.value;

        const newArr: any[] = [];
        const oldUsers = JSON.parse(localStorage.getItem("users") || "[]");

        const newUser = {
            number,
            mpin,
            newPin
        };

        oldUsers.map((user: any) => {
            if (newUser.number === user.number)
                newArr.push("exist");
        });
        if (newArr.includes("exist")) {
            alert("user already exits")
        }
        else if (number === "" && mpin === "" && newPin === "") {
            alert("please enter all fields");
        }
        else if (mpin !== newPin) {
            alert("pin not matched!");

        }
        else {
            oldUsers.push(newUser);
            localStorage.setItem("users", JSON.stringify(oldUsers));
            localStorage.setItem(JSON.stringify(number), JSON.stringify([]));
            navigate("/");
        }
    }


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

                        <form className='formContainer' onSubmit={handleSubmit}>

                            <Input placeholder='Enter Mobile Number' type='tel' maxLength={10} minLength={10} name='number' />

                            <div className="re_enter">
                                <Input placeholder='Enter 4Digit MPin' type='password' name='mpin' />
                            </div>

                            <div className="pinField">
                                <Input placeholder='Re-Enter 4Digit MPin' type={passwordType ? "text" : "password"} name='newPin' />
                                <img className="eye" src={eye} alt="eye" onClick={togglePassword} />

                            </div>


                            <button className='btn'>sign up</button>

                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignUpCard
