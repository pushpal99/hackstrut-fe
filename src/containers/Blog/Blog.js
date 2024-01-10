import React from "react";
import { SITE_TEXT } from "../Home/constants";
import './index.scss';

const Blog = () => {
    const {  
       BLOG_PAGE_CARD,
       BLOG_PAGE_HEAD,
    } = SITE_TEXT
    return (
        <div className="blogWrapper">
            <h2>{BLOG_PAGE_HEAD}</h2>
            <div className="blogCardContainer">
                {BLOG_PAGE_CARD.map(({ title, imgSrc, desc}) => {
                    return (
                        <div className="card blogCard">
                            <div>
                                <img src={imgSrc} />
                            </div>
                            <h3>{title}</h3>
                            <div className="description">{desc}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog;