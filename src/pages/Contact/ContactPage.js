import React, { Component } from 'react'
import NavbarS from 'components/Navbar/NavbarS'
import SecureContactForm from 'components/ContactForm/SecureContactForm'
import Footer from 'components/Footer/Footer'
import FaqContainer from 'components/faq/FaqContainer'
import MailingList from 'components/MailingList/MailingList'
import SocialLinkContainerS from 'components/SocialLink/SocialLinkContainerS'
import Links from 'components/Data/Links'

export default class ContactPage extends Component {

    constructor(){
        super()
    }

    render() {
        return (
            <div className="page-wrapper">
                <NavbarS initial_tab={"contact"}/>

              
                <div className="content-wrapper" >

                    
                <SocialLinkContainerS Links={Links}/>
           
                    <SecureContactForm />
                    <FaqContainer/>     

                    <div className="mailing-bar">
                        <MailingList />
                    </div>         
                </div>


                <Footer />
            </div>
        )
    }
}

