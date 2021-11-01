import React from 'react'

import './MailingList.css'

export default function MailingList() {
    return (
        <div className="mailing-wrapper">
            <h3 className="mailing-header">Join my mailing list</h3>
            <p className="mailing-para">
                Receive important <strong>updates</strong> and <strong>offers</strong> straight to your inbox.
            </p>

            <div className="mailing-i-container">
            <input type="text" className="mailing-input" placeholder="Name"></input>
            </div>

            <div className="mailing-i-container">
            <input type="text" className="mailing-input" placeholder="Email"></input>
            </div>

            <div className="mailing-submit">
                <div className="mailing-check">

                </div>

                <button className="mailing-btn">
                    Subscribe
                </button>
            </div>
        </div>
    )
}
