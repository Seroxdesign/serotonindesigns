import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import Header from 'components/Headers/Header';

import './ContactForm.css';

export default class SecureContactForm extends Component {
    constructor() {
        super();
        this.state = {
            form_locked_bool: false,
        }
    }

  
    onSubmit = async (e) => {
        e.preventDefault()
        emailjs.sendForm( 'service_9vr2ogp', 'template_cox0qiy','#contact-form', 'user_f9ouNImbr2IkYirbDRSGo').then(result => {
        alert('Message Sent, I\'ll get back to you shortly', result.text);
        },
        error => {
        alert( 'An error occured, Plese try again',error.text)
        })

        await this.setState({
            form_locked_bool:true
        })
    }

   
    render() {
        return (
            
            <form id="contact-form" onSubmit={this.onSubmit}>
                <h3 className="header-contact-b">Get in touch</h3>
        <field className="field" id={this.state.form_locked_bool? 'invisible' : ''}>
  
            <input
              name="user_name"
              type="text"
              placeholder="Your preferred name"
              required
            />

        </field>
        <field className="field" id={this.state.form_locked_bool? 'invisible' : ''}>
          
            <input
              name="user_email"
              type="email"
              placeholder="contact email, example: email@gmail.com"
              required
            />
 
        </field>
  
        <field className="field">
        
            <textarea id={this.state.form_locked_bool? 'invisible' : ''}
              name="message"
              placeholder="Tell me more about..." required
            />

        </field>

       
        <input type='submit' className="submit-btn" value='Send' id={this.state.form_locked_bool? 'invisible' : ''}/>


        <div  className="thanks" id={this.state.form_locked_bool? '' : 'invisible'}>
            Thank you for contacting me! I will get back to you shortly
        </div>
      
      </form>
        );
        
    }
}
