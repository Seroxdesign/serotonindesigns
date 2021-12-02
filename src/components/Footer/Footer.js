import React from 'react'
import './Footer.css'
import SocialImg from 'components/SocialLink/SocialImg'


export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div id={"mobile-only"} className="foot-wrap-new">
                <div className="footer-top" style={{display: 'none'}}> 
                    
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
                    </div>
                </div>
            </div>
            
            <div className="desktop-footer" id={"desktop-only"}>
                <p className="footer-text-bottom">If you're like to get in touch, or learn more about how to grow your audience contact me on social media or join my mailing list!</p>
                <div className="social-icons-foot">
                <SocialImg img={"https://i.imgur.com/cbHzfgE.png"} link={"https://www.instagram.com/seroxdesigns/"} />
                <SocialImg img={"https://i.imgur.com/VEy7t1k.png"} link={"https://twitter.com/seroxdesigns"} />
                <SocialImg img={"https://i.imgur.com/j8hA7X0.png"} link={"https://www.youtube.com/channel/UCeNLqAes-kUMjWksPA6d-BA"} /> 
                <SocialImg img={"https://i.imgur.com/UW1SKsa.png"} link={"https://discord.gg/raEGkkQ7gf"} />
            <SocialImg img={"https://i.imgur.com/GXQ4AeC.png"} link={"https://www.tiktok.com/@serotoninexperience"} />
            <SocialImg img={"https://i.imgur.com/bJjXPyu.png"} link={"https://www.linkedin.com/in/sherif-cherfa-346b85202/"} />
                </div>  
            </div>
        </div>
    )
}
