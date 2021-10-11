import React from 'react'

import './Cards.css'

export default function MiniCard(props) {
    return (
        <div className="card-wrapper mini-c" style={{borderRadius: '5%'}}>
            <img src={props.img} className="mini-img"></img>
            <h5 className="mini-title">{props.title}</h5>
        </div>
    )
}
