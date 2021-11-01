import React from 'react'
import { Link } from 'react-router-dom'
import './Jobs.css'

export default function JobLogoCard(props) {
    return (
     
        <div className="job-card-wrapper" style={{border: props.bc}}>
            <div className="top-card">
                <h3 className="top-header-title" >{props.title}</h3>

                <img className="circular-img" style={{display:'none'}} src={props.img} alt="logo"></img>

                <p className="top-c-para"> 
                    {props.para}
                </p>

               
            </div>

        
            <div className="bottom-card">
        
                <a className="btn-job" href="" target="_blank" style={{border: props.bc, color: props.btc,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Contact me</a>
            
            </div>
         
        </div>
    )
}
