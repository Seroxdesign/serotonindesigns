import React from 'react'
import './Media.css'

export default function Media(props) {
    return (
        <div className="media-section">
            <div className="media-talk">
                <h2 className="media-sec-header">Connect with us</h2>

                <p className="media-sec-para" id={"mobile-only"}>
                Whether you're interested in growing your business or starting a new one, we can help.
                <br/>
                <br/>
                With our experience growing and maintaining online businesses, and your great ideas we can  ​succeed together
                </p>
            </div>

            <div className="media-icons">
            <a className="link-icon" href={props.link1} target="_blank"><img src={props.img1} alt="" className="media-icon"></img></a>
            <a className="link-icon" href={props.link2} target="_blank"><img src={props.img2} alt="" className="media-icon"></img></a>
            <a className="link-icon" href={props.link3} target="_blank"><img src={props.img3} alt="" className="media-icon"></img></a>
            <a className="link-icon" href={props.link4} target="_blank"><img src={props.img4} alt="" className="media-icon"></img></a>
            <a className="link-icon" href={props.link5} target="_blank"><img src={props.img5} alt="" className="media-icon"></img></a>
            <a className="link-icon" href={props.link6} target="_blank"><img src={props.img6} alt="" className="media-icon"></img></a>
            </div>
        </div>
    )
}
