import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


export default function Navbar(props) {
    return (
        <div className="navbar-wrapper">
            <h5 className="navbar-header"></h5>
            <button className="navbar-menu" onClick={props.dropdown}>
                <img className="navbar-img" src="https://i.imgur.com/zF8oh0w.png" alt="menu icon"></img>
            </button>

            <div className="desktop-nav-only">
                <Link to={"/"}>
                    <h3 className="navbar-link">Home</h3>
                </Link>

                <Link to={"/links"}>
                    <h3 className="navbar-link">Links</h3>
                </Link>

                <Link to={"/contact"}>
                    <h3 className="navbar-link">Contact me</h3>
                </Link>
            </div>
        </div>
    )
}
