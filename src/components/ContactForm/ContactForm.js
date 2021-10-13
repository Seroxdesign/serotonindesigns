import React, {useState} from 'react'
import Header from 'components/Headers/Header'
import { useForm } from 'react-hook-form';

import './ContactForm.css'
import { init, sendForm } from 'emailjs-com';
init('user_f9ouNImbr2IkYirbDRSGo');


export default function ContactForm() {

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
            <div className="">
                <Header title={"Contact Me"} color={"black"}/>
            </div>

            <div className="contact-options">
                <h4 className="">Call me: </h4>
                <h4 className="">Email me: </h4>
            </div>

            <div className="contact-form">
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>

                    <input type='hidden' name='contact_number' value={contactNumber} />

                    <input type='text' name='user_name' {...register('user_name')} placeholder='Name'  />
                
                    <input type='email'  name='user_email' {...register('user_email')} placeholder='Email'  />
               
                    <textarea name='message' {...register('message')} placeholder='Message'/>
                 
                    <input type='submit' id="submit-btn" value='Send' />
                </form>
            </div>
        </div>
    )
}
