import React from 'react'

import './Recommended.css'

export default function RecommendedCard(props) {
    return (
        <div className="recommended-card" >
            <img className="rec-card-img" src={props.img}></img>
            <h2 className="rec-head">{props.title}</h2>
            <ul>
                <li><a href={props.link1} target="_blank" className="cta-for-shoutout"> <img src={props.img1} alt="" className=""></img> <h3 className="header-cta"></h3> </a></li>
            </ul>
        </div>
    )
}
