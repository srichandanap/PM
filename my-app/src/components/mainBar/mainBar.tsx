import React, { useState } from 'react'
import "./mainBar.css"
import search from '../../assets/icons/search.png';
import add_btn from '../../assets/icons/add_btn.png';
import "../../../src/styles.css"
import fb from '../../assets/icons/facebook.png';
import copyBoook from '../../assets/images/copyBook.png';
import close_btn from '../../assets/icons/close_btn.png';


const MainBar = () => {

    const [edit, setEdit] = useState(false);
    const [modal, setmodal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const submitHandle = (event: any) => {

        event.preventDefault();
        const url = event.target.url.value;
        const siteName = event.target.siteName.value;
        const folder = event.target.folder.value;
        const userName = event.target.userName.value;
        const sitePassword = event.target.sitePassword.value;
        const notes = event.target.notes.value;


        const addSite = {
            url,
            siteName,
            folder,
            userName,
            sitePassword,
            notes
        }

        const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");

        const oldUser = JSON.parse(localStorage.getItem(currentUser) || "[]");
        oldUser.push(addSite);
        localStorage.setItem(currentUser, JSON.stringify(oldUser));
        window.location.reload();
        console.log("oldUser", oldUser);

    };
    const displayData = JSON.parse(localStorage.getItem("currentUser") || "[]");
    const sitedata = JSON.parse(localStorage.getItem(displayData) || "[]");


    console.log("sitedata", sitedata);

    return (
        <>
            <div className="mainBarContainer">
                <div className="mobile_add_btn">
                    <img className="add_btn" src={add_btn} alt="image" onClick={() => setIsOpen(true)} />
                </div>

                <div className="pageContainer">
                    <div className="mobilePage">


                        <div className="mobile_site_box">
                            <div className="mobilesites"> Sites</div>
                            <div className="mobile_yellow_line"></div>

                        </div>

                        <div className="mobilesocial">
                            <div className="social_media_for_mobile">Social Media</div>
                            <div className="mobileCount">07</div>
                        </div>
                    </div>
                    <div className="site_box">

                        <div className="sites"> Sites</div>
                        <div className="yellow_line"></div>

                    </div>
                    <div className="searchMargin">

                        <div className="searchBar">
                            <input className='searchField' placeholder='Search' type='text' />
                            <img className="search" src={search} alt="image" />
                        </div>

                        <img className="add_btn" src={add_btn} alt="image" onClick={() => setIsOpen(true)} />
                    </div>
                </div>
                {modal ? (

                    <div className="add_sites">
                        <div className="sitesText">
                            Please Click on the "+" symbol <br></br>to add sites
                        </div>
                    </div>
                ) : (
                    <div className="sitesPage">

                        <div className="social">
                            <div className="social_media">  Social Media</div>
                            <div className="count">07</div>
                            {/* <div className="arrow"><i className="fa-solid fa-angle-down"></i></div> */}
                        </div>

                        <div className='siteCards'>
                            {sitedata.map((user: any, i: any) => {

                                return (

                                    <div key={i}>
                                        <div className="cards" onClick={() => {setEdit(true);
                                        setOpen(true);
                                        }}>
                                            <div className="cardContent">
                                                <div className="fb_img">
                                                    <img className="fb_img" src={fb} alt="iamge" />
                                                </div>
                                                <div className="rightContent">
                                                    <div className="facebook">{user.siteName}</div>

                                                    <div className="copy_div" onClick={() => { navigator.clipboard.writeText(user.sitePassword) }} >
                                                        <img className="copy_sym" src={copyBoook} alt="iamge" />
                                                        <div className="copy">{user.sitePassword}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="urlContainer">
                                                <div>www.{user.url}.com</div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })};
                        </div>

                    </div>
                )
                }

                {isOpen ? (
                    <div className="modal_blurr">

                        <div className="modal mobile_modal">

                            <div className="close_btn">
                                <img src={close_btn} alt="image" onClick={() => setIsOpen(false)} />

                            </div>
                            <div className="add">
                                Add Site
                            </div>
                            <form action="" onSubmit={submitHandle}>

                                <label className='label'>URL</label>
                                <input className='modal_field'></input>

                                <div className="fir">

                                    <div className="one">

                                        <label className='label'>Site Name</label>
                                        <input className='modal_field' name='siteName' />

                                    </div>

                                    <div className="two">

                                        <label className='label'>Sector/Folder</label>
                                        <input className='modal_field' name='folder' />
                                    </div>

                                </div>

                                <div className="sec">
                                    <div className="one">

                                        <label className='label'>User Name</label>
                                        <input className='modal_field' name='userName' />

                                    </div>

                                    <div className="two">
                                        <label className='label'>Site Password</label>
                                        <input className='modal_field' name='sitePassword' />

                                    </div>

                                </div>

                                <label className='label'>Notes</label>
                                <textarea className='notes' name='notes' />

                                <div className="btns">
                                    <button className="reset_btn" type='reset'>reset</button>
                                    <button className="save_btn" type='submit'>save</button>

                                </div>

                            </form>

                        </div>
                    </div>

                ) : ""}

                {edit ? (
                    <div className="modal_blurr">

                        <div className="modal mobile_modal">

                            <div className="close_btn">
                                <img src={close_btn} alt="image" onClick={() => setOpen(false)} />

                            </div>

                            <form action="" >

                                <div className="editHead">

                                    <div className="add">
                                        Site Details
                                    </div>
                                    <div>

                                    <button className="edit_btn" ><span className='ed'>Edit</span></button>
                                    </div>
                                </div>

                                <label className='label'>URL</label>
                                <input className='edit_modal_field'></input>

                                <div className="fir">

                                    <div className="one">

                                        <label className='label'>Site Name</label>
                                        <input className='edit_modal_field' name='siteName' />

                                    </div>

                                    <div className="two">

                                        <label className='label'>Sector/Folder</label>
                                        <input className='edit_modal_field' name='folder' />
                                    </div>

                                </div>

                                <div className="sec">
                                    <div className="one">

                                        <label className='label'>User Name</label>
                                        <input className='edit_modal_field' name='userName' />

                                    </div>

                                    <div className="two">
                                        <label className='label'>Site Password</label>
                                        <input className='edit_modal_field' name='sitePassword' />

                                    </div>

                                </div>

                                <label className='label'>Notes</label>
                                <textarea className='edit_notes' name='notes' />

                            </form>

                        </div>
                    </div>
                ) : ""};
            </div>
        </>
    )
}

export default MainBar