import React, { Component } from 'react'
import NavbarS from 'components/Navbar/NavbarS'
import Links from 'components/Data/Links'
import Footer from 'components/Footer/Footer'
import SocialLinkContainerS from 'components/SocialLink/SocialLinkContainerS'
import MailingList from 'components/MailingList/MailingList'

import('pages/PagesStyles.css')

export default class Homepage extends Component {

    constructor(){
        super()
    }

    render() {
        return (
            <div className="page-wrapper">
                <NavbarS initial_tab={"links"} dropdown={this.pull_out_dropdown}/>

                
                <div className="content-wrapper">

                    <SocialLinkContainerS Links={Links}/>
                    <div className="mailing-bar">
                        <MailingList />
                    </div>      
                </div>
     
                <Footer />
            </div>
        )
    }
}
