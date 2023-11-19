import React from "react";
import Layout from "../../components/Layout";
import { SITE_TEXT } from "./constants";
import HomePageShield from '../../assets/Layout/home_shield.svg';
import './index.scss';

const Home = () => {
    const { HOMEPAGE_HEADING, HOMEPAGE_SUB_TXT, HOMEPAGE_HEADING_2, HOMEPAGE_OPTIONS } = SITE_TEXT
    return (
    <div>
        <Layout />
        <div className="homepage">
            <div className="topSection">
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
                    {
                        HOMEPAGE_OPTIONS.map(({ title, imgSrc, subText}) => {
                            return (
                                <div className="card">
                                    <h3>
                                        {title}
                                    </h3>
                                    <div className="cardSubText">{subText}</div>
                                    <span className="floatingImage"><img src={imgSrc} /></span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;