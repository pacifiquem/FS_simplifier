import React from "react";
import { BiLink, BiBarChartSquare} from 'react-icons/bi';
import {RiShieldCheckLine} from 'react-icons/ri';
import '../assets/styles/style.css';

const FooterComponent:React.FC = () => {
    return(
    <>
        <div className="footer">
            <div className="footer-flex">
                <div className="footer-discriptioon">
                    <BiLink className="icons"/>
                    <h2>Shortned</h2>
                    <p>Use any link, no matter what size, ShortURL always shortens</p>
                </div>
                <div className="footer-discriptioon">
                    <BiBarChartSquare className="icons"/>
                    <h2>Statistics</h2>
                    <p>Check the amount of clicks that your shortened url received</p>
                </div>
                <div className="footer-discriptioon">
                    <RiShieldCheckLine className="icons"/>
                    <h2>Secure</h2>
                    <p>It is fast and secure, our service have HTTPS protocol and data encryption</p>
                </div>
            </div>
        </div>
        <div className="author">
            <a href="https://github.com/pacifiquem">pacifiquem@github.com</a>
        </div>
    </>
    );
}

export default FooterComponent;