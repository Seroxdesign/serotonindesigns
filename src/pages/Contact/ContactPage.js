import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import Header from 'components/Headers/Header'
import ContactForm from 'components/ContactForm/ContactForm'
import MiniCard from 'components/Cards/MiniCard'

export default class ContactPage extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <Navbar />

                <div className="content-wrapper" >
                    <div className="section-1" >
                        <img src="https://i.imgur.com/LJJtAky.jpg" alt="" style={{width: '100vw', marginTop: '-1vh'}}></img>
                        <Header title={"Get in touch"} color={"black"}/>
                        <div className="media-grid">
                            <MiniCard title={"LinkedIn"} img={"https://i.imgur.com/RiLBaNc.png"}/>
                            <MiniCard title={"Youtube"} img={"https://i.imgur.com/w05WNrp.png"}/>
                            <MiniCard title={"Instagram"} img={"https://i.imgur.com/F97pQA0.png"}/>
                            <MiniCard title={"Twitter"} img={"https://i.imgur.com/kaBe4fY.png"}/>
                            <MiniCard title={"Facebook"} img={"https://i.imgur.com/D5UaqJo.png"}/>
                            <MiniCard title={"TikTok"} img={"https://i.imgur.com/t6GJPzJ.png"}/>
                        </div>
                    </div>

                    <div className="section-2">
                         <ContactForm />
                    </div>
                </div>
            </div>
        )
    }
}

