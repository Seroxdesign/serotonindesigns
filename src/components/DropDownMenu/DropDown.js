import React from 'react'
import './DropDown.css'
import { Link } from 'react-router-dom'

export default function DropDown() {
    return (
        <ul className="menu">
            <li className="menu-item"> 
                <Link to={"/"}><h3>Home</h3></Link>
            </li>

            <li className="menu-item"> 
                <Link to={"/work"}><h3>Work</h3></Link>
            </li>

            <li className="menu-item"> 
                <Link to={"/contact"}><h3>Contact</h3></Link>
            </li>

           
        </ul>
    )
}
