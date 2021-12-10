import React, { Component } from 'react'

import './MailingList.css'

export default class MailingList extends Component {
    render() {
        return (
            <div className="mailing-wrapper">
                <h3 className="mailing-header">Sign Up</h3>

                <p className="offer-mailing">Join the conversation and be the first to hear about events, offers and more</p>


                <field className="field-row">
                    <input className="mailing-checkbox" type="checkbox"></input>
                    <p className="mailing-notice">By checking this box you agree that you are over the age of 18</p>
                </field>
                <a href="https://eepurl.com/hPKN1f" target="_blank" ><button className="mailing-sign-up-btn"> Sign Up </button></a>

            </div>
        )
    }
}
