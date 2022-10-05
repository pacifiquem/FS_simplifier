import React from "react";
import '../assets/styles/style.css';
import ClickCounterFooter from "../component/clickCounterFooter";
import NavComponent from '../component/homeNav';
import ContactForm from "../component/contactForm";

const ContactUs:React.FC = () => {
    return (
        <>
            <div className="clickCounterNav">
                <NavComponent />
            </div>
            <ContactForm />
            <div className="contactFoorter">
                <ClickCounterFooter />
            </div>
        </>
    );
}

export default ContactUs;