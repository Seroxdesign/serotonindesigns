import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import ContactForm from 'components/ContactForm/ContactForm'
import DropDown from 'components/DropDownMenu/DropDown'
import ContactInto from 'components/Sections/ContactInto'
import Footer from 'components/Footer/Footer'


export default class ContactPage extends Component {

    constructor(){
        super()
        this.dropDown = React.createRef();
        this.state={
            nav_status: false,
            message_bool: false,
        }
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
            dropDown.style.height = '92vh'
            dropDown.style.backgroundColor = 'white'
        }

    }
    
    message_sent = () => {
        this.setState({
            message_bool: true,
        })
    }

    close_message = () => {
        this.setState({
            message_bool: false,
        })
    }

    render() {
        return (
            <div className="page-wrapper">
                <Navbar dropdown={this.pull_out_dropdown}/>

                <div className="dropdown-menu" ref={this.dropDown}>
                    <DropDown />
                </div>


                <div className="content-wrapper" >
                  

                    <div className="section-2" style={{marginTop: '-0.5em'}}>
                        <a id="consultation"><ContactForm sent={this.message_sent} /></a>
                    </div>


                    <div className="section-3">
                         <Footer />
                    </div>
                </div>

                <div id={this.state.message_bool? 'message-sent' : 'invisible' }>
                    <button className="close-contact-btn" onClick={this.close_message}>X</button>

                    <h1 className="contact-header-announcement">Thank you for contacting me, I will try and get back to you as soon as possible</h1>
            
                    <img src="https://i.imgur.com/yQFkrr2.png" alt="" className="contact-status-img"></img>


                    <DropDown />
                </div>
            </div>
        )
    }
}

