import React from 'react'
import './Services.css'

export default function Service(props) {
    return (
        <div className="service-card" >
            <div className="service-card-img" style={{backgroundImage: `url("${props.img})`}} > </div>

            <h2 className="service-header">{props.service_title}</h2>

            <p className="service-para">{props.service_para}</p>

            <a className="service-btn-cta" href={props.action} target="_blank" style={{backgroundColor: '#30303030'}}>
                {props.action_title}
            </a>
    </div>
    )
}
