import axios from 'axios';
import React, { useState } from 'react';
import '../assets/styles/style.css';



const ContactForm:React.FC = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [submited, setSubitted] = useState({
        display: 'block'
    });

    const [para, setpara] = useState({
        display: 'none'
    });

    const [errpara, seterrpara] = useState({
        display: 'none'
    });


    const formHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await axios.post('', {
            name, 
            email, 
            message
        }).then((res) => {
            setSubitted({
                display: 'none'
            });

            setpara({
                display: 'block'
            });

        }).catch(() => {
            seterrpara({
                display: 'block'
            })
        })

    }

    return (
        <>
        <div style={submited}>
            <h2 className='contact'>Contact our Team</h2>
            <div className="formcontainer">
                <form onSubmit = {formHandler}>
                    <p style={errpara} id="contacterror">try to resend your feedback with valid inputs !</p>
                    <div className="input-label">
                        <label htmlFor="Name">Name</label>
                        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="input-label">
                        <label htmlFor="Email">E-mail</label>
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-label">
                        <label htmlFor="Message">Message</label>
                        <textarea name="message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button type="submit">Send</button>
                    </form>
                </div>
        </div>
        <p id='feedback' style={para}>Thank you for your feedback</p>
        </>
    )
}

export default ContactForm;