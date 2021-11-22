import React from 'react'
import SocialLink from 'components/SocialLink/SocialLink'
import './Linksec.css'

export default function LinkCont() {
    return (
        <div className="link-continued">
            <SocialLink img={"https://i.imgur.com/UW1SKsa.png"} link={"https://discord.gg/raEGkkQ7gf"} media={"Discord"} title={"serotoninexperience#0537"}/>
            <SocialLink img={"https://i.imgur.com/GXQ4AeC.png"} link={"https://www.tiktok.com/@serotoninexperience"} media={"Tiktok"} title={"Serotonin Experience"}/>
            <SocialLink img={"https://i.imgur.com/bJjXPyu.png"} link={"https://www.linkedin.com/in/sherif-cherfa-346b85202/"} media={"LinkedIn"} title={"Sherif Cherfa"}/>

        </div>
    )
}
