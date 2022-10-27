import React from 'react'
import "./topBar.css"
import pass_logo from '../../assets/images/pass_logo.png';
import sync from '../../assets/icons/sync.png';
import profile from '../../assets/icons/profile.png';

const TopBar = () => {
    return (
        <>
            <div className="topContainer">
                <div className='imageMargin'>

                    <img className='pass_logo' src={pass_logo} alt="pass_logo" />

                    <div className='headIcon'>

                        <img src={sync} alt="image" />
                        <img src={profile} alt="image" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar