import React from 'react'

import './Header.css'

export default function Header(props) {
    return (
        <h2 className="header" style={{color: `${props.color}`}}>
            {props.title}
        </h2>
    )
}
