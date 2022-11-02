import React, { useState } from 'react'
import "./mainBar.css"
import searchIcon from '../../assets/icons/search.png';
import add_btn from '../../assets/icons/add_btn.png';
import "../../../src/styles.css"
import fb from '../../assets/icons/facebook.png';
import copyBoook from '../../assets/images/copyBook.png';
import close_btn from '../../assets/icons/close_btn.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@fortawesome/fontawesome-svg-core';

const MainBar = () => {

    const [edit, setEdit] = useState(false);
    const [modal, setmodal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");


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


    const getTerm = (e: any) => {
        setSearch(e.target.value);
    };



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
                            <div className="mobileCount">{sitedata.length}</div>
                        </div>
                    </div>
                    <div className="site_box">

                        <div className="sites"> Sites</div>
                        <div className="yellow_line"></div>

                    </div>
                    <div className="searchMargin">

                        <div className="searchBar">
                            <input className='searchField' placeholder='Search' type='text' onChange={getTerm} />
                            <img className="search" src={searchIcon} alt="search image" />
                        </div>

                        <img className="add_btn" src={add_btn} alt="image" onClick={() => setIsOpen(true)} />
                    </div>
                </div>
                {JSON.stringify(sitedata) === "[]" ? (

                    <div className="add_sites">
                        <div className="sitesText">
                            Please Click on the "+" symbol <br></br>to add sites
                        </div>
                    </div>
                ) : (
                    <div className="sitesPage">

                        <div className="social">
                            <div className="social_media">  Social Media</div>
                            <div className="count">{sitedata.length}</div>
                            {/* <div className="arrow"><i className="fa-solid fa-angle-down"></i></div> */}
                        </div>


                        <div className='siteCards'>

                            {sitedata.filter((ele: any) => {
                                return search.toLowerCase() === ""
                                    ? ele
                                    : ele.siteName.toLowerCase().includes(search.toLowerCase());
                            }).map((user: any, i: any) => {

                                return (
                                    <div key={i}>
                                        <div className="cards" onClick={() => {
                                            setEdit(true);
                                        }}>
                                            <div className="cardContent">
                                                <div className="fb_img">
                                                    {/* 
                                                    {(() =>      {
        switch (user.siteName) {
          case 'facebook':
            return <img className="fb_img" src={fb} alt="image" />
          case 's':
            return <img className="fb_img" src={add_btn} alt="imge" />
          default:
            return null
        }
    })()} */}

                                                    <img src={`https://app.outboundsales.io/api/logo/${user.siteName}.com`} height="50px" width="50px" alt={user.siteName} style={{

                                                        backgroundPosition: 'center',
                                                        borderRadius: '50%',
                                                        backgroundSize: 'cover'

                                                    }} />

                                                    {/* <img className="fb_img" src={fb} alt="iamge" /> */}
                                                </div>
                                                <div className="rightContent">
                                                    <div className="facebook">{user.siteName}</div>

                                                    <div className="copy_div" onClick={() => { navigator.clipboard.writeText(user.sitePassword) }} >
                                                        <img className="copy_sym" src={copyBoook} alt="image" />
                                                        <div className="copy">Copy Password</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="urlContainer">
                                                <div>www.{user.url}.com</div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>

                    </div>
                )
                }

                {isOpen ? (
                    <div className="modal_blurr">

                        <div className="add_site_mobile">

                            <div className="i_tag">

                                <FontAwesomeIcon icon={faArrowLeft} className='arrow_tag' onClick={() => setIsOpen(false)} />
                            </div>
                            <div className='add-site-div'>Add Site</div>
                        </div>

                        <div className="modal mobile_modal">

                            <div className="close_btn">
                                <img src={close_btn} alt="image" onClick={() => setIsOpen(false)} />

                            </div>
                            <div className="add">
                                Add Site
                            </div>


                            <form action="" onSubmit={submitHandle}>

                                <label className='label  label_mobile'>URL</label>
                                <input className='modal_field mobile_modal_field' name='url'></input>

                                <div className="fir fir_mobile">

                                    <div className="one">

                                        <label className='label label_mobile'>Site Name</label>
                                        <input className='modal_field mobile_modal_field' name='siteName' />

                                    </div>

                                    <div className="two">

                                        <label className='label label_mobile'>Sector/Folder</label>
                                        <input className='modal_field mobile_modal_field' name='folder' />
                                    </div>

                                </div>

                                <div className="sec sec_mobile">
                                    <div className="one">

                                        <label className='label label_mobile'>User Name</label>
                                        <input className='modal_field mobile_modal_field' name='userName' />

                                    </div>

                                    <div className="two">
                                        <label className='label label_mobile'>Site Password</label>
                                        <input className='modal_field mobile_modal_field' name='sitePassword' />

                                    </div>

                                </div>

                                <label className='label label_mobile'>Notes</label>
                                <textarea className='notes mobile_notes' name='notes' />

                                <div className="btns btns_mobile" >
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
                                <img src={close_btn} alt="image" onClick={() => setEdit(false)} />

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

                                <label className='label label_edit_mobile'>URL</label>
                                <input className='edit_modal_field mobile_edit_field'></input>

                                <div className="fir fir_mobile">

                                    <div className="one">

                                        <label className='label label_edit_mobile'>Site Name</label>
                                        <input className='edit_modal_field mobile_edit_field' name='siteName' />

                                    </div>

                                    <div className="two">

                                        <label className='label label_edit_mobile'>Sector/Folder</label>
                                        <input className='edit_modal_field mobile_edit_field' name='folder' />
                                    </div>

                                </div>

                                <div className="sec sec_mobile">
                                    <div className="one">

                                        <label className='label label_edit_mobile'>User Name</label>
                                        <input className='edit_modal_field mobile_edit_field' name='userName' />

                                    </div>

                                    <div className="two">
                                        <label className='label label_edit_mobile'>Site Password</label>
                                        <input className='edit_modal_field mobile_edit_field' name='sitePassword' />

                                    </div>

                                </div>

                                <label className='label label_edit_mobile'>Notes</label>
                                <textarea className='edit_notes mobile_edit_notes' name='notes' />

                            </form>

                        </div>
                    </div>
                ) : ""}
            </div>
        </>
    )
}

export default MainBar