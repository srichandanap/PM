import React from 'react'
import Card from '../../components/card/card'
import SignInCard from '../../components/signInCard/signInCard'
import "./signIn.css"


const SignIn = () => {
    return (
        <>
            <div className="container">
                <div className="rectangle">

                    <Card />
                    <SignInCard />

                </div>
            </div>
        </>
    )
}

export default SignIn