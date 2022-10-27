import React from 'react'
import "./sideBar.css"
import home from '../../assets/icons/home_icn.png'
import menu from '../../assets/icons/burger_menu.png';

const SideBar = () => {
    return (
        <>
            <div className="sideContainer">

                <div className="menu">
                    <img src={menu} alt="icon" />
                </div>

                <div className="home">
                    <img src={home} alt="icon" />
                </div>

                <div className="round"></div>
            </div>
        </>
    )
}

export default SideBar