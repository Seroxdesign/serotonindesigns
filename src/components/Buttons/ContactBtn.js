import React from 'react'

import './Buttons.css'

export default function ContactBtn(props) {
    return (
        <button className="contact-btn" onClick={() => {props.change_contact('open')}}>
            <img src="https://i.imgur.com/EBIx7Jk.png" alt="" className="contact-btn-img"></img>
    
        </button>
    )
}
