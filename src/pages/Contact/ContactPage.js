import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import Header from 'components/Headers/Header'
import ContactForm from 'components/ContactForm/ContactForm'

import SkillCard from 'components/Cards/SkillCard'
import Footer from 'components/Footer/Footer'

export default class ContactPage extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <Navbar />

                <div className="content-wrapper" >
                    <div className="section-1" >
                        <img src="https://i.imgur.com/LJJtAky.jpg" alt="" style={{width: '100vw', marginTop: '-1vh'}}></img>
                        <Header title={"Get in touch"} color={"black"}/>
                        
                    </div>

                    <div className="section-2">
                         <ContactForm />
                    </div>

                    <div className="section-2">
                    <SkillCard img1={"https://i.imgur.com/RiLBaNc.png"} img2={"https://i.imgur.com/w05WNrp.png"} img3={"https://i.imgur.com/F97pQA0.png"} img4={"https://i.imgur.com/kaBe4fY.png"} img5={"https://i.imgur.com/D5UaqJo.png"} img6={"https://i.imgur.com/t6GJPzJ.png"} title={"Connect with me"}  color={"black"}  title1={"LinkedIn"} title2={"Youtube"} title3={"Instagram"}  title4={"Twitter"} title5={"Facebook"} title6={"TikTok"}/>
                    </div>

                    <div className="section-2">
                         <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

