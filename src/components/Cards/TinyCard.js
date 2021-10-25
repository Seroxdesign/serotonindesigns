import React from 'react'

import './Cards.css'

export default function TinyCard(props) {
    return (
        <div className="tiny-wrapper">
            <img src={props.img} alt="" className=""></img>
            <h6 className="">{props.title}</h6>
        </div>
    )
}
