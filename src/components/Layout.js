import React, { useEffect, useState } from 'react';
import { NAV_LINKS } from '../utils/constants';
import Logo from '../assets/Layout/logo.svg'
import Close from '../assets/Layout/Close.png';
import Burger from '../assets/Layout/burger.png';
import c from 'classnames';
import './index.scss'

const Layout = ({ activeLink, setActiveLink}) => {
    const [open, setOpen] =useState(false);
    useEffect(() => {
        setOpen(false)
    }, [activeLink])
    return (
        <div className='nav'>
            <ul className='clearfix'>
                <li className='company'>
                    <img src={Logo} />
                </li>
                <li className='dropDown' onClick={() => setOpen(!open)}>
                    <img src={open ? Close : Burger} />
                </li>
                <div className={c({ dropView: open },'navLinks')}>
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