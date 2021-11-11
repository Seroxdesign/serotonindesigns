import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


export default class NavbarS extends Component {

    constructor(props){
        super(props)
        this.state = {
            highlighted_tab: this.props.initial_tab,
        }
    }


    highlight_tab = async (x) => {
        let tab = x
        await this.setState({
            highlighted_tab: tab
        })
    }   

    render() {
        return (
            <div className="navbar-wrapper">
            <h5 className="navbar-header"></h5>
            <button className="navbar-menu" onClick={this.props.dropdown}>
                <img className="navbar-img" src="https://i.imgur.com/zF8oh0w.png" alt="menu icon"></img>
            </button>

            <div className="desktop-nav-only">

                <Link to={"/links"} onClick={()=> {this.highlight_tab('links')}}>
                    <h3 className="navbar-link" id={this.state.highlighted_tab==="links" ? 'highlight' : ''}>Links</h3>
                </Link>


                <Link to={"/"} value="home" onClick={()=> {this.highlight_tab('home')}}>
                    <h3 className="navbar-link"  id={this.state.highlighted_tab==="home" ? 'highlight' : ''}>Home</h3>
                </Link>

               
                <Link to={"/contact"} onClick={()=> {this.highlight_tab('contact')}}>
                    <h3 className="navbar-link"  id={this.state.highlighted_tab==="contact" ? 'highlight' : ''}>Contact me</h3>
                </Link>
            </div>
        </div>
        )
    }
}
