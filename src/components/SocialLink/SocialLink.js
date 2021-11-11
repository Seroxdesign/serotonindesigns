import React from 'react'
import Fade from 'react-reveal/Fade'
import './SocialLinks.css'
import SocialImg from './SocialImg'

export default function SocialLink(props) {
    return (
        <Fade left="true">
            <div className="social-link-wrapper">
                <SocialImg img={props.img} link={props.link}  />
                    <div className="social-titles">
                    <h3 className="head-s-1">{props.media}</h3>
                    <h3 className="head-s-2">{props.title}</h3>
                </div>
            </div>  
        </Fade>
        
    )
}
