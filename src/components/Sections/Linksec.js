import React from 'react'
import SocialLink from 'components/SocialLink/SocialLink'
import './Linksec.css'

export default function Linksec() {
    return (
        <div className="link-sec">
            <div className="circular-img-link" id={"mobile-only"}  ></div>
            <div className="circular-img-link" id={"desktop-only"} ></div>
            <h2 className="link-header2">AMYSKY</h2>
            <h2 className="link-header">Find me on:</h2>

            <div className="links-scroller">
                <SocialLink img={"https://i.imgur.com/cbHzfgE.png"} link={"https://www.instagram.com/amysky99x/"} media={"Instagram"} title={"@Amysky99x"}/>
                <SocialLink img={"https://i.imgur.com/VEy7t1k.png"} link={"https://twitter.com/amysky99x"} media={"Twitter"} title={"@Amysky99x"}/>
                <SocialLink img={"https://i.imgur.com/lE5qH7s.png"} link={"https://www.twitch.tv/amysky99x"} media={"Twitch"} title={"@Amysky99x"}/> 
            </div>
        </div>
    )
}
