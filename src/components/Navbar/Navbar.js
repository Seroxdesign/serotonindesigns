import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


export default function Navbar(props) {
    return (
        <div className="navbar-wrapper">
            <h5 className="navbar-header">Serotonin Design</h5>
            <button className="navbar-menu" onClick={props.dropdown}>
                <img className="navbar-img" src="https://i.imgur.com/zF8oh0w.png" alt="menu icon"></img>
            </button>

            <div className="desktop-nav-only">
                <Link to={"/"}>
                    Home
                </Link>

                <Link to={"/contact"}>
                    Contact
                </Link>
            </div>
        </div>
    )
}
