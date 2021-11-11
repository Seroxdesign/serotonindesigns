import React from 'react'
import './SocialLinks.css'
export default function SocialImg(props) {
    return (
        <a className="link-link" href={props.link} target="_blank"><img src={props.img} className="link-im" alt=""></img></a>
    )
}
