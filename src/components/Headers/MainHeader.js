import React from 'react'

import './Header.css'

export default function MainHeader(props) {
    return (
        <h1 className="main-header-wrapper">
            {props.title}
        </h1>
    )
}
