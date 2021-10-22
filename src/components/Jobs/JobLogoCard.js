import React from 'react'

import './Jobs.css'

export default function JobLogoCard(props) {
    return (
        <div className="job-card-wrapper" style={{border: props.bc}}>
            <div className="top-card">
                <h3 className="top-header-title" >{props.title}</h3>

                <img className="circular-img" src={props.img} alt="logo"></img>

                <p className="top-c-para"> 
                    {props.para}
                </p>

               
            </div>


            <div className="bottom-card">
                <button className="btn-job" style={{border: props.bc, color: props.btc}}>Contact me</button>
            </div>
            
        </div>
    )
}
