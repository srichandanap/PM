import React from 'react'
import "./topBar.css"
import pass_logo from '../../assets/images/pass_logo.png';
import sync from '../../assets/icons/sync.png';
import profile from '../../assets/icons/profile.png';
import menu from '../../assets/icons/burger_menu.png';
import pass_man from '../../assets/icons/PASS MANAGER.png';
import msearch from '../../assets/icons/msearch.png';
import cloud from '../../assets/icons/msync_icn.png';
import mprofile from '../../assets/icons/mprofile.png';

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
            <div className="mobileTopBar">
                <div className="topBarLeft">

                    <div className="mobileMenu">
                        <img src={menu} alt="icon" />
                    </div>
                    <div className="pass_man">
                        <img src={pass_man} alt="icon" />
                    </div>
                </div>
                <div className="topBarRight">

                    <div className="msearch">
                        <img src={msearch} alt="icon" />
                    </div>
                    <div className="cloud">
                        <img src={cloud} alt="icon" />
                    </div>
                    <div className="mprofile">
                        <img src={mprofile} alt="icon" />
                    </div>
                </div>


            </div>
        </>
    )
}

export default TopBar