import React, { Component } from 'react'
import NavbarS from 'components/Navbar/NavbarS'
import IntroductionCard from 'components/Cards/IntroductionCard'
import Services from 'components/Services/Services'
import Footer from 'components/Footer/Footer'
import MailingList from 'components/MailingList/MailingList'

import('pages/PagesStyles.css')

export default class Homepage extends Component {

    constructor(){
        super()
        
    }

    render() {
        return (
            <div className="page-wrapper">
                <NavbarS initial_tab={"home"} dropdown={this.pull_out_dropdown}/>


                <IntroductionCard />
                <div className="content-wrapper">
                
                    <div className="section-3">
                        <Services service_for={"My work"}/>
                    </div>
                              
                    <div className="mailing-bar">
                        <MailingList />
                    </div>
                </div>
    
                <Footer />
            </div>
        )
    }
}
