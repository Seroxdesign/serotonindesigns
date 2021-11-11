import React from 'react'
import './Footer.css'
import MailingList from 'components/MailingList/MailingList'
import SocialImg from 'components/SocialLink/SocialImg'


export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div id={"mobile-only"} className="foot-wrap-new">
                <div className="footer-top">
                    <MailingList />
                
                </div>

                <div className="footer-bottom">
                    <h4 className="foot-head">Navigate</h4>
                    <div className="foot-row" style={{borderBottom: '2px solid white'}}>
                            <a className="footer-link">Home</a>
                            <a className="footer-link">Links</a>
                            <a className="footer-link">Contact</a>
                    </div>
                    
                    <div className="foot-row">
                            <a className="footer-link">Privacy</a>
                            <a className="footer-link">Privacy</a>
                            <a className="footer-link">Privacy</a>
                    </div>
                </div>
            </div>
            
            <div className="desktop-footer" id={"desktop-only"}>
                <p className="footer-text-bottom">If you're like to get in touch, or learn more about how to grow your audience contact me on social media or join my mailing list!</p>
                <div className="social-icons-foot">
                    <SocialImg  img={"https://i.imgur.com/cbHzfgE.png"} link={"https://www.instagram.com/amysky99x/"}/>
                    <SocialImg img={"https://i.imgur.com/VEy7t1k.png"} link={"https://twitter.com/amysky99x"} />
                    <SocialImg img={"https://i.imgur.com/lE5qH7s.png"} link={"https://www.twitch.tv/amysky99x"}/> 
                    <SocialImg img={"https://i.imgur.com/UW1SKsa.png"} link={"https://discord.com/invite/67XWFmJwVz"}/>
                    <SocialImg img={"https://i.imgur.com/GXQ4AeC.png"} link={"https://www.tiktok.com/@amy.sky99?"} />

                </div>  
            </div>
        </div>
    )
}
