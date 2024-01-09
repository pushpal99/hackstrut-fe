import React, { useState, Fragment, useRef, createRef } from "react";
import Layout from "../../components/Layout";
import './index.scss';
import Footer from "../../components/Footer/Footer";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUS";
import HomePage from "./HomePage";

const Home = () => {
    const [activeLink, setActiveLink] = useState(0);

    const renderPage = () => {
        switch(activeLink) {
            case 0:
                return <HomePage activeLink={activeLink} />;
            case 1:
                return <HomePage activeLink={activeLink} />
            case 2: 
                return <About />;
            case 3:
                return <ContactUs />
            default: 
                return <Fragment />
        }
    }
    return (
    <div>
        <Layout activeLink={activeLink} setActiveLink={setActiveLink} />
        <div className="homepage">
           {renderPage()}
        </div>
        <Footer />
    </div>
    )
}

export default Home;