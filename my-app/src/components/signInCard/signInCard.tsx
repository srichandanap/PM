import React, { useState, useEffect } from 'react'
import "./signInCard.css"
import Input from '../Input/input'
import eye from '../../assets/icons/eye_on.png'
import "../../styles.css"
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { eventNames } from 'process'


const SignInCard = () => {

    const [passwordType, setPasswordType] = useState<boolean>(false);
    
    const togglePassword = () => {
        
        setPasswordType(!passwordType);
        
    };
    
    const [data, setData]:any = useState( [{

        number: "",
        mpin : "",

    }]);
    const [list, setNewList]: any = useState([]);
    
    const handleInput = (event: any) => {
       const  name = event.target.name;
       const value = event.target.value;
        console.log(name , value);

        setData({...data, [name]: value});

    }

    const signUpHandle = (event: any) => {
        event.preventDefault();
        
        const newUser = {...data, id: new Date().getTime().toString() }
        setNewList([...list, newUser]);
        localStorage.setItem("users", JSON.stringify(list));
    
    }
    // localStorage.setItem("users", JSON.stringify(data));


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

                        <form className='formContainer' onSubmit={signUpHandle}>
                            
                            <Input placeholder='Mobile Number' type='tel' value={data.number} onChange={handleInput} name='number' />

                            <div className="pinField">
                                
                                <Input placeholder='MPin' type={passwordType ? "text" : "password"} value={data.mpin} onChange={handleInput} name='mpin'/>
                                <img className="eye" src={eye} alt="eye" onClick={togglePassword} />
                            </div>

                            <div className="forgot"><NavLink to="/Home" > Forgot your password?</NavLink>Forgot your password?</div>

                            <button className='btn'>sign in</button>
                            <div className="dont_have_account">Don't have a Account? <Link to="/SignUp" className='links'> SIGNUP</Link></div>


                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignInCard