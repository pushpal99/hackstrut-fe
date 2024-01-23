import React, { useState } from 'react';
import Logo from '../../assets/Layout/logo.svg'
import { SOCIAL_MEDIA_LINKS, FOOTER_OPT } from '../constants';
import Arrow from '../../assets/Footer/Arrow.png';
import c from 'classnames';
import './index.scss'

const Footer = () => {
    return (
        <div className='footer'>
           <div className='left'>
                <div className='company'>
                    <img src={Logo} />
                </div>
                <div>Follow us on</div>
                <div className='mediaLink'>
                    {SOCIAL_MEDIA_LINKS.map(({imgSrc})=> (
                        <span><img src={imgSrc} /></span>
                    ))}
                </div>
           </div>
           <div className='quickLinks'>
                {FOOTER_OPT.map(link => <div key={link}>{link}</div>)}
           </div>
           <div className='newsLetter'>
                <div>Subscribe to our Newsletter</div>
                <span className='mailInput'>                
                    <input placeholder='Your email id'/>
                    <span><img src={Arrow} /></span>
                </span>
           </div>
        </div>
    )
}

export default Footer;