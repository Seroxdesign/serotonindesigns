import React, { Component } from 'react'
import './FaqContainer.css'
import Faq from './Faq'

export default class FaqContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
          
        }
    }

    render(props) {
        return (
            <div className="faq-container">
                
                <div className="faqs">
                   <Faq/>
                   <Faq/>
                   <Faq/>
                </div>

                <div className="contact-cta">
                     <button className="contact-btn" onClick={this.props.openForm}>Let's talk</button>
                </div>
            </div>
        )
    }
}
