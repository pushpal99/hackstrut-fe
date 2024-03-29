import React, { useState } from "react";
import { SITE_TEXT } from "../Home/constants";
import Supercharge from '../../assets/Layout/Supercharge.png';
import AboutBanner from '../../assets/About/AboutBanner.png';
import PotraitImg from '../../assets/About/PotraitImg.png';
// import Photo from '../../assets/Layout/Home.jpeg';
import linkdInIcon from '../../assets/Footer/linkdIn.png';
import Dash from '../../assets/Layout/Dash.png';
import SelectedDash from '../../assets/Layout/SelectedDash.png';
import c from 'classnames';
import './index.scss';
import { Fragment } from "react";

const About = () => {
    const [selected, setSelected] = useState(0);
    const {  
        SUPERCHARGE_HEAD_TXT, 
        SUPERCHARGE_SUB_HEAD,
        ABOUT_PAGE_CARD_1,
        ABOUT_PAGE_CARD_2,
        ABOUT_HEAD_1,
        ABOUT_SUB_INFO_1,
        ABOUT_HEAD_2,
        ABOUT_SUB_INFO_2,
        ABOUT_HEAD_3,
        ABOUT_PAGE_LIST,
        ABOUT_SUB_INFO_3,
        PHOTO_TAG,
    } = SITE_TEXT
    return (
   <div className="aboutWrapper">
        <div className="topBanner">
            <h1>{ABOUT_HEAD_1}</h1>
            <div>{ABOUT_SUB_INFO_1}</div>
            <img src = {AboutBanner} />
        </div>
        <div className="midSection">
            <div className="bottom">
                {
                    ABOUT_PAGE_CARD_1.map(({ title, desc }) => {
                        return (
                            <div className="card">
                                <h3>{title}</h3>
                                <div className="cardSubText">{desc}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="midSection">
            <h1>{ABOUT_HEAD_2}</h1>
            <div className="subInfo">{ABOUT_SUB_INFO_2}</div>
            <div className="bottom smallCardContainer">
                {
                    ABOUT_PAGE_CARD_2.map(({ title, imgSrc }) => {
                        return (
                            <div className="card small">
                                <span><img src={imgSrc} /></span>
                                <h3>{title}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="bottomSection">
            <h1>{ABOUT_HEAD_3}</h1>
            <div className="bottom">
                {
                    ABOUT_PAGE_LIST.map(({ title, desc }, i) => {
                        return (
                            <li className={c({selected: i === selected}, "listItems")}><strong>{title} </strong>{desc}</li>
                        )
                    })
                }
            </div>
        </div>
        <div className="selectBtn">
            {ABOUT_PAGE_LIST.map((_, i) => {
                return (
                    <span onClick={() => setSelected(i)}>
                        <img src={i === selected ? SelectedDash : Dash } />
                    </span>
                )
            })}
        </div>

        <div className="bannerSection">
            <h2>{SUPERCHARGE_HEAD_TXT}</h2>
            <div>
                {SUPERCHARGE_SUB_HEAD}
            </div>
            <div className='button'>
                    Get Demo
                </div>
            <span>
                <img src={Supercharge} />
            </span>
        </div>
        <div className="bottomSection">
            <div className="imgContainer">
                <img src={PotraitImg} />
            </div>
            <h4>{PHOTO_TAG}</h4>
            <div className="photoInfo">{ABOUT_SUB_INFO_3}</div>
            <div className="linkdinIcon"><a href="https://www.linkedin.com/in/francis-cordor-96a40338"><img src={linkdInIcon} /></a></div>
        </div>
   </div>
    )
}

export default About;