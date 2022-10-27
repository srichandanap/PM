import React from 'react'
import "./mainBar.css"
import search from '../../assets/icons/search.png';
import add_btn from '../../assets/icons/add_btn.png';
import "../../../src/styles.css"


const MainBar = () => {
    return (
        <>
            <div className="mainBarContainer">
                <div className="sites"> Sites</div>
                <div className="searchMargin">

                    <div className="searchBar">
                        <input className='searchField' placeholder='Search' type='text' />
                        <img className="search" src={search} alt="image" />
                    </div>

                        <img className="add_btn" src={add_btn} alt="image" />
                </div>
            </div>
            <div className="socialMedia">Social Media</div>
        </>
    )
}

export default MainBar