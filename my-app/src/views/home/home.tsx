import React from 'react'
import "./home.css"
import SideBar from '../../components/sideBar/sideBar'
import TopBar from '../../components/topBar/topBar'
import MainBar from '../../components/mainBar/mainBar'


const Home = () => {

    return (
        <>
        <div className="homeMargin">
        <div className="homeContainer">
            <SideBar />
            <TopBar />
            <MainBar />

        </div>
        </div>
        </>
    )
}

export default Home