import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import Header from 'components/Headers/Header'
import ContactForm from 'components/ContactForm/ContactForm'

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
