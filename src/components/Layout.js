import React, { useState } from 'react';
import { NAV_LINKS } from '../utils/constants';
import Logo from '../assets/Layout/logo.svg'
import c from 'classnames';
import './index.scss'

const Layout = () => {
    const [activeLink, setActiveLink] = useState(0);
    console.log(activeLink)
    return (
        <div className='nav'>
            <ul className='clearfix'>
                <li className='company'>
                    <img src={Logo} />
                </li>
                <div className='navLinks'>
                    {NAV_LINKS.map(({title}, index) => {
                        return (
                            <li 
                                key={title} 
                                onClick={() => setActiveLink(index)}
                                className={c({active: activeLink === index})}
                            >
                                {title}
                            </li>
                        )
                    })}
                </div>
                <li className='buttonItem'>
                    <div className='button'>
                        Get Demo
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Layout;