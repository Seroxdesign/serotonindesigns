import React, { Component } from 'react'



export default class ContactFormS extends Component {
  
    constructor(){
        super()
        this.state={
            
        }
    }

    render() {
        return (
            <form id="contact-form">

                <label style={{borderTop: 'none'}}>Your Name:</label>
                <input type="name"></input>

                <label >Your Email:</label>
                <input  type="email"></input>
                
                
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
            </form>
        )
    }
}
