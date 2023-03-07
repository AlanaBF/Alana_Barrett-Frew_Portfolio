import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./style.css";
//code from emailjs.com

export const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_99u3qlb', 'template_nitxcgg', form.current, 'vqkUjg6fo6Dtcq3Tf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        
        <div>
            
            <form ref={form} onSubmit={sendEmail}>
                
                <label className="formlabel">Your Name</label>
                <input className="forminput" type="text" name="user_name" />
                <br />
                <label className="formlabel">Your Email</label>
                <input className="forminput" type="email" name="user_email" />
                <br />
                <label className="messagelabel">Send me a message</label>
                <br />
                <textarea className="messagebox" name="message" />
                <br />
                <input className="formsubmit" type="submit" value="Send" />
        
            </form>
            
        </div>
    );
};

export default ContactMe
