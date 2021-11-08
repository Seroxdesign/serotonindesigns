import React from 'react'

import './Para.css'

export default function Para(props) {
    return (
        <p className="para-text">
            {props.text}
        </p>
    )
}
