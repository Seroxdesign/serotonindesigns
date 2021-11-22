import React from 'react'
import SocialLink from 'components/SocialLink/SocialLink'
import './Linksec.css'

export default function Linksec() {
    return (
        <div className="link-sec">
            <div className="circular-img-link" id={"mobile-only"}  ></div>
            <div className="circular-img-link" id={"desktop-only"} ></div>
            <h2 className="link-header">Find me on:</h2>

            <div className="links-scroller">
                <SocialLink img={"https://i.imgur.com/cbHzfgE.png"} link={"https://www.instagram.com/seroxdesigns/"} media={"Instagram"} title={"@seroxdesigns"}/>
                <SocialLink img={"https://i.imgur.com/VEy7t1k.png"} link={"https://twitter.com/seroxdesigns"} media={"Twitter"} title={"@seroxdesigns"}/>
                <SocialLink img={"https://i.imgur.com/j8hA7X0.png"} link={"https://www.youtube.com/channel/UCeNLqAes-kUMjWksPA6d-BA"} media={"Youtube"} title={"Serotonin Designs"}/> 
            </div>
        </div>
    )
}
