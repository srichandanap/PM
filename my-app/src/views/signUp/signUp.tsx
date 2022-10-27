import React from 'react'
import Card from '../../components/card/card'
import SignUpCard from '../../components/signUpCard/signUpCard'
import "../signIn/signIn.css"
import "./signUp.css"


const SignUp = () => {

    return (
        <>
            <div className="container">
                <div className="rectangle">

                    <Card />
                    <SignUpCard />

                </div>
            </div>
        </>
    )
}

export default SignUp