import React from 'react'

import './SocialLinks.css'

export default function SocialLink(props) {
    return (
        <div className="social-link-wrapper">
            <a className="link-link" href={props.link} target="_blank"><img src={props.img} className="link-im" alt=""></img></a>

            <div className="social-titles">
                <h3 className="head-s-1">{props.media}</h3>
                <h3 className="head-s-2">{props.title}</h3>
            </div>
        </div>
    )
}
