import React from 'react'

import './Buttons.css'

export default function CTAButton(props) {
    return (
        <button className={props.type}>{props.title}</button>
    )
}
