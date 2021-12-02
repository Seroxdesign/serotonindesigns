import React from 'react'
import './Jobs.css'

export default function JobLogoCard(props) {
    return (
     
        <div className="job-card-wrapper" style={{border: props.bc}}>
            <div className="top-card" style={{backgroundImage: `url("${props.img}")`}}>
               
            </div>

        
            <div className="bottom-card">
        
                <a className="btn-job" href={props.link} target="_blank" style={{border: props.bc, color: props.btc,display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img src="https://i.imgur.com/ncwd5I8.png" alt="" className="img-jl"></img></a>
                <a className="btn-job" href="https://www.serotonindesigns.com/contact" target="_blank" style={{border: props.bc, color: props.btc,display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img src="https://i.imgur.com/KsB47J3.png" alt="" className="img-jl"></img></a>
            </div>
         
        </div>
    )
}
