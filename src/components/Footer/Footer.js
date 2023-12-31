import React, { useState } from 'react';
import Logo from '../../assets/Layout/logo.svg'
import { SOCIAL_MEDIA_LINKS, FOOTER_OPT } from '../constants';
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
                <div>
                    {SOCIAL_MEDIA_LINKS.map(({imgSrc})=> (
                        <span><img src={imgSrc} /></span>
                    ))}
                </div>
           </div>
           <div className='quickLinks'>
                {FOOTER_OPT.map(link => <div key={link}>{link}</div>)}
           </div>
           <div>
                <div>Subscribe to our Newsletter</div>
                <input placeholder='Your email id'/>
           </div>
        </div>
    )
}

export default Footer;