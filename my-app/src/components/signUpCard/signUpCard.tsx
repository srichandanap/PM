import React, { useState, useEffect } from 'react'
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
    
    const [input, setInput] = useState([{
        number: "",
        mpin: "",
        newPin: ""
    }])
    const [oldUsers, setOldUsers] = useState([])
    
    const handleChange =(event: any) =>{
        setInput((prevData: any) => ({
            ...prevData, 
            [event.target.name]:event.target.value,
        }));
    };
    
    const handleSubmit = (event: any) =>{
      event.preventDefault();
   console.log(input);
    //   const oldUsers = JSON.parse(localStorage.getItem('u') || '[]');
    
    //   setOldUsers.push(input);
    //   console.log(oldUsers);

    
    //  localStorage.setItem("users",JSON.stringify(oldUsers));
      
    }

        // const [input, setInput] = useState({
        //     number: "",
        //     mpin: "",
        //     newPin: ""    
        //   });
        //   const [newUser, setNewUser] = useState([]);

        // //   type userData ={
        // //     number: number
        // //     mpin: string 
        // //     newPin: string
        // //   }
        
        //   const handleSubmit = (event: any) => {
        //     event.preventDefault();
        //     setNewUser((prevNewUser) => ({...prevNewUser, input}));
        //     console.log(input);
        //   };
        
        //   useEffect(() => {
        //     // localStorage.setItem("users", JSON.stringify(newUser));
        //               const array = JSON.parse(localStorage.getItem('users') || '[]');
        //               array.push(newUser);
        //               localStorage.setItem('Data', JSON.stringify(array));
        //   }, [newUser]);


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

                            <Input placeholder='Enter Mobile Number' type='tel' maxLength={10} minLength={10} name='number' value={input[0].number}  onChange={(event: any) =>
            setInput(event.target.value)
          } />

                            <div className="re_enter">
                                <Input placeholder='Enter 4Digit MPin' type='password' name='mpin'  value={input[0].mpin}  onChange={(event: any) =>
            setInput(event.target.value)
          }/>
                            </div>

                            <div className="pinField">
                                <Input placeholder='Re-Enter 4Digit MPin' type={passwordType ? "text" : "password"} name='newPin' value={input[0].newPin}  onChange={(event: any) =>
            setInput(event.target.value)
          } /> 
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
