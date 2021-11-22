
import React from 'react'

import './Cards.css'

export default function PassionBar(props) {
    return (
            <a>
            <div className="passion-section">
                <img src={props.img} className="passion-img" id={"mobile-only"} alt="" ></img>

                <div className="passion-desktop-img" id={"desktop-only"} style={{backgroundImage: `url("${props.dtImg}")`}}>

                </div>

                <div className="passion-collection">
                    <h3 className="passion-header">{props.title}</h3>
                    <p className="passion-para">{props.statement}</p>
                    <a href={props.link} target="_blank">
                    <button className="passion-cta">{props.cta}</button>
                    </a>
                </div>
            </div>
            </a>
            
  
    )
}
