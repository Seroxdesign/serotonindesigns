import React, {useState} from 'react'
import Header from 'components/Headers/Header'
import { useForm } from 'react-hook-form';

import './ContactForm.css'
import { init, sendForm } from 'emailjs-com';
init('user_f9ouNImbr2IkYirbDRSGo');


export default function ContactForm(props) {

    const [contactNumber, setContactNumber] = useState("000000");
  
    const generateContactNumber = () => {
        const numStr = "000000" + (Math.random() * 1000000 | 0);
        setContactNumber(numStr.substring(numStr.length - 6));
    }

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        generateContactNumber();

        sendForm('service_9vr2ogp', 'template_cox0qiy','#contact-form').then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
            console.log('FAILED...', error);
          });
    }

    return (
        <div className="contact-form-wrapper">
          
            <div className="contact-options">
                <div className="contact-option">
                    <img className="circle-option" src="https://i.imgur.com/vxNshty.png" alt=""></img>
                    <a href="tel:8457180480"  className="phone-option">Call me at 845-718-0480</a>
                </div>

                <div className="contact-option">
                    <img className="circle-option" src="https://i.imgur.com/tX6qjxI.png" alt=""></img>
                    <h3 className="email-option">Sherifcherfa@gmail.com</h3>
                </div>
            </div>

            <div className="contact-form">
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>

                    <input type='hidden' name='contact_number' value={contactNumber} />

                    <input type='text' name='user_name' {...register('user_name')} placeholder='Name'  />
                
                    <input type='email'  name='user_email' {...register('user_email')} placeholder='Email'  />
               
                    <textarea name='message' {...register('message')} placeholder='Message'/>
                 
                    <input type='submit' id="submit-btn" value='Send'  onClick={props.sent} />
                </form>
            </div>

            
        </div>
    )
}
