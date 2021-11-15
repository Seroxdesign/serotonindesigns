import React, { Component } from 'react'

import './ContactForm.css'

export default class ContactFormS extends Component {
  
    constructor(){
        super()
        this.state={
            
        }
    }

    render() {
        return (
            <form id="contact-form">

                <label style={{borderTop: 'none'}} >Your Name:</label>
                <input placeholder={"Enter your Name here"} type="name"></input>
            

                <label >Your Email:</label>
                <input placeholder={"Enter your Email here"} type="email"></input>
                
                <label>You are contacting me as a:</label>
                <select>
                    <option selected value="none">Please Select</option>
                    <option value="fan">Fan</option>
                    <option value="creator">Creator</option>
                    <option value="brand">Brand</option>
                </select>

                <label >Your Message:</label>
                <textarea>
                    
                </textarea>

                <div className="newsletter-sign-up">
                    <p className="newsletter-para">Sign up to my newsletter for offers, rewards, and <strong>faster responses</strong> </p>
                    <input type="checkbox" className="check"/>
                    <input type='submit' id="submit-btn" value='Send'/>
                </div>
            </form>
        )
    }
}
