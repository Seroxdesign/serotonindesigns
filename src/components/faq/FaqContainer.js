import React, { Component } from 'react'
import './FaqContainer.css'

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
                    <div className="faq-card" style={{height: '90%', marginTop: '5%'}}>

                    </div>
                    <div className="faq-card" style={{marginTop: '-0.5em'}}>

                    </div>
                    <div className="faq-card" style={{height: '90%', marginTop: '5%'}}>

                    </div>
                </div>

                <div className="contact-cta">
                     <button className="contact-btn" onClick={this.props.openForm}>Let's talk</button>
                </div>
            </div>
        )
    }
}
