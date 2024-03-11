import React, { useEffect, useRef, useState } from "react";
import { SITE_TEXT } from "./constants";
import HomePageShield from '../../assets/Layout/home_shield.svg';
import Supercharge from '../../assets/Layout/Supercharge.png';
import AboutIcon from '../../assets/Layout/about_home_icon.svg';
// import Vul from '../../assets/Layout/Vul.svg';
import HomeImg from '../../assets/Layout/Home.svg'
// import Vul2 from '../../assets/Layout/Vul2.svg';
import Home2Img from '../../assets/Layout/Vul.svg';
import Laptop from '../../assets/Layout/laptop.png';
import Dot from '../../assets/Layout/dot.png';
import SelectedDot from '../../assets/Layout/selectedDot.png';
import Dash from '../../assets/Layout/Dash.png';
import SelectedDash from '../../assets/Layout/SelectedDash.png';
import './index.scss';
import c from 'classnames';
// import Blog from "../Blog/Blog";

const HomePage = ({ activeLink }) => {
    const [selected, setSelected] = useState(0);
    const [selectedBtm, setSelectedBtm] = useState(0);

    // const ref = useRef(null)

    // const handleClick = () => {
    //     ref.current?.scrollIntoView({behavior: 'smooth'});
    // };

    // useEffect(() => {
    //     if(activeLink === 1) {
    //         handleClick();
    //     } else {
    //         window.scrollTo({
    //             top: 0,
    //             behavior: "smooth",
    //         });
    //     }
    // }, [activeLink])

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
        HOMEPAGE_SUB_TXT_2,
        HOMEPAGE_CARD2,
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
                {HOMEPAGE_OPTIONS.map(({ title, imgSrc, subText }, index) => {
                    return (
                        <div className={c({ selected: index === selected}, "card")}>
                            <h3>
                                {title}
                            </h3>
                            <div className="cardSubText">{subText}</div>
                            <span className="floatingImage"><img src={imgSrc} /></span>
                        </div>
                    );
                })}
            </div>
            <div className="selectBtn">{HOMEPAGE_OPTIONS.map((_, i) => {
                return (
                    <span onClick={() => setSelected(i)}>
                        <img src={i === selected ? SelectedDot : Dot } />
                    </span>
                )
            })}</div>
            {/* <div className="bottom mobile">
                <div className="card">
                    <h3>
                        {HOMEPAGE_OPTIONS[selected].title}
                    </h3>
                    <div className="cardSubText">{HOMEPAGE_OPTIONS[selected].subText}</div>
                    <span className="floatingImage"><img src={HOMEPAGE_OPTIONS[selected].imgSrc} /></span>
                </div>
            </div> */}
            </div><div className="midSection wrapper">
                <div className="leftImageContainer">
                    <img src={HomeImg} className="back" />
                    {/* <img src={Vul} className="front" /> */}
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
                    <h2>Vulnerability Detection</h2>
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
                    {/* <img src={Vul2} style={{ left: '-2%' }} className="front" /> */}
                </div>
            </div>
            <div className="advSection">
                <div className="adv">
                    <div className="leftImageContainer">
                        <img src={Laptop}  className="back" />
                    </div>
                    <div className="rightItems">
                        <div>
                            <h2>EXPERIENCE THE ADVANTAGE</h2>
                            {HOMEPAGE_SUB_TXT_2}
                        </div>
                    </div>
                </div>
                <div className="cardContainer">
                    {HOMEPAGE_CARD2.map(({title, desc}, index) => {
                        return (
                            <div className={c({ selected: index === selectedBtm}, "card")}>
                                <h3>{title}</h3>
                                <div>{desc}</div>
                            </div>
                        )   
                    })}
                </div>
                <div className="selectBtn">{HOMEPAGE_CARD2.map((_, i) => {
                return (
                    <span onClick={() => setSelectedBtm(i)}>
                        <img src={i === selectedBtm ? SelectedDash : Dash } />
                    </span>
                )
            })}</div>
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
            {/* <div className="blog" ref={ref}>
                <Blog />
            </div> */}
            <div className="about">
                <h3><span className="aboutIcon"><img src={AboutIcon} alt="" /></span>Who We Are?</h3>
                <div>
                    {ABOUT_DESC}
                </div>
            </div></>
    )
}

export default HomePage;