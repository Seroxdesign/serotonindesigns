import React from 'react'
import SocialLink from 'components/SocialLink/SocialLink'
import './Linksec.css'

export default function LinkCont() {
    return (
        <div className="link-continued">
            <SocialLink img={"https://i.imgur.com/UW1SKsa.png"} link={"https://discord.com/invite/67XWFmJwVz"} media={"Discord"} title={"amysky99#4437"}/>
            <SocialLink img={"https://i.imgur.com/GXQ4AeC.png"} link={"https://www.tiktok.com/@amy.sky99?"} media={"Tiktok"} title={"amy.sky99"}/>
            <SocialLink img={"https://i.imgur.com/GXQ4AeC.png"} link={"https://www.tiktok.com/@amysky99x?"} media={"Back-up"} title={"amysky99x"}/>
            <SocialLink img={"https://i.imgur.com/SF4NgyS.png"} link={"https://www.etsy.com/uk/shop/amysky99"} media={"Etsy"} title={"Amysky99"}/>
            <SocialLink img={"https://i.imgur.com/RZEPOJh.png?2"} link={"https://www.amazon.co.uk/hz/wishlist/ls/22WIKV1ABM458?ref_=wl_share"} media={"Cosplay Wishlist"} title={"Amazon"}/>
            <SocialLink img={"https://i.imgur.com/RZEPOJh.png?2"} link={"https://www.amazon.co.uk/hz/wishlist/ls/10PHBBI70VV59?ref_=wl_share"} media={"Gaming Wishlist"} title={"Amazon"}/>
        </div>
    )
}
