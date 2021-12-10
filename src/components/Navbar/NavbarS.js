import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DropDown from 'components/DropDownMenu/DropDown'
import './Navbar.css'

export default class NavbarS extends Component {

    constructor(props){
        super(props)

        this.dropDown = React.createRef();
        this.state = {
            highlighted_tab: this.props.initial_tab,
            nav_status: false,
        }
    }


    highlight_tab = async (x) => {
        let tab = x
        await this.setState({
            highlighted_tab: tab
        })
    }   

    pull_out_dropdown = async () => {
        let dropDown= this.dropDown.current
        

        this.setState({
            nav_status: !this.state.nav_status
        })

        if(this.state.nav_status == true){
            dropDown.style.height = '0'
        }
        else{
            dropDown.style.height = '94vh'
            dropDown.style.backgroundColor = 'white'
        }

    }

    render() {
        return (
            <div className="navbar-wrapper">
            <h5 className="navbar-header"></h5>
            <button className="navbar-menu" id={"mobile-only"} onClick={this.pull_out_dropdown}>
                <img className="navbar-img"  src="https://i.imgur.com/zF8oh0w.png" alt="menu icon"></img>
            </button>

            <div className="dropdown-menu" id={"mobile-only"} ref={this.dropDown}>
                    <DropDown/>
                </div>


            <div className="desktop-nav-only">

                
            <Link to={"/"} value="home" onClick={()=> {this.highlight_tab('home')}}>
                    <h3 className="navbar-link"  id={this.state.highlighted_tab==="home" ? 'highlight' : ''}>Home</h3>
                </Link>

               

                <Link to={"/links"} onClick={()=> {this.highlight_tab('links')}}>
                    <h3 className="navbar-link" id={this.state.highlighted_tab==="links" ? 'highlight' : ''}>Links</h3>
                </Link>


                <Link to={"/contact"} onClick={()=> {this.highlight_tab('contact')}}>
                    <h3 className="navbar-link"  id={this.state.highlighted_tab==="contact" ? 'highlight' : ''}>Contact me</h3>
                </Link>
            </div>
        </div>
        )
    }
}
