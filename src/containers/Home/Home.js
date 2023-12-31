import React, { useState, Fragment } from "react";
import Layout from "../../components/Layout";
import { SITE_TEXT } from "./constants";
import HomePageShield from '../../assets/Layout/home_shield.svg';
import Supercharge from '../../assets/Layout/Supercharge.png';
import AboutIcon from '../../assets/Layout/about_home_icon.svg';
import Vul from '../../assets/Layout/Vul.svg';
import HomeImg from '../../assets/Layout/Home.svg'
import Vul2 from '../../assets/Layout/Vul2.svg';
import Home2Img from '../../assets/Layout/Home2.svg'
import './index.scss';
import Footer from "../../components/Footer/Footer";
import About from "../About/About";
// import { HomePage } from "./Home";

const Home = () => {
    const [activeLink, setActiveLink] = useState(0);

    const renderPage = () => {
        switch(activeLink) {
            case 0:
                return HomePage();
            case 2: 
                return <About/>
            default: 
                return <Fragment />
        }
    }
    return (
    <div>
        <Layout activeLink={activeLink} setActiveLink={setActiveLink}/>
        <div className="homepage">
           {renderPage()}
        </div>
        <Footer />
    </div>
    )
}

export const HomePage = () => {
    const { 
        HOMEPAGE_HEADING,
        HOMEPAGE_SUB_TXT, 
        HOMEPAGE_HEADING_2, 
        HOMEPAGE_OPTIONS, 
        SUPERCHARGE_HEAD_TXT, 
        SUPERCHARGE_SUB_HEAD,
        ABOUT_DESC,
        THREAT_DETECTION_OPT,
        VULNERABILITY_OPT,
    } = SITE_TEXT;
    return (
        <><div className="topSection">
            <div className="left">
                <h2>{HOMEPAGE_HEADING}</h2>
                <div className="subText">{HOMEPAGE_SUB_TXT}</div>
                <div className='button'>
                    Get Demo
                </div>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src={HomePageShield} />
                </div>
            </div>
        </div>
        <div className="midSection">
            <div className="top">
                <h2>{HOMEPAGE_HEADING_2}</h2>
            </div>
            <div className="bottom">
                {/* <div className="imgContainer">
    <img src={HomePageShield} />
</div> */}
                {HOMEPAGE_OPTIONS.map(({ title, imgSrc, subText }) => {
                    return (
                        <div className="card">
                            <h3>
                                {title}
                            </h3>
                            <div className="cardSubText">{subText}</div>
                            <span className="floatingImage"><img src={imgSrc} /></span>
                        </div>
                    );
                })}
        </div>
            </div><div className="midSection wrapper">
                <div className="leftImageContainer">
                    <img src={HomeImg} className="back" />
                    <img src={Vul} className="front" />
                </div>
                <div className="rightListItems">
                    <h2>Threat intelligence Detection</h2>
                    <ul>
                        {THREAT_DETECTION_OPT.map(({ title, imgSrc }) => {
                            return (
                                <li>
                                    <span>
                                        <img src={imgSrc} />
                                    </span>
                                    {title}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div><div className="midSection wrapper bottom">
                <div className="rightListItems">
                    <h2>Vulnerbility Detection</h2>
                    <ul>
                        {VULNERABILITY_OPT.map(({ title, imgSrc }) => {
                            return (
                                <li>
                                    <span>
                                        <img src={imgSrc} />
                                    </span>
                                    {title}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="leftImageContainer">
                    <img src={Home2Img} className="back" />
                    <img src={Vul2} style={{ left: '-2%' }} className="front" />
                </div>
            </div><div className="bannerSection">
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
            </div><div className="about">
                <h3><span className="aboutIcon"><img src={AboutIcon} alt="" /></span>Who We Are?</h3>
                <div>
                    {ABOUT_DESC}
                </div>
            </div></>
    )
}

export default Home;