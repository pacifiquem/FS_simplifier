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
                    <h2>Efficient</h2>
                    <p>Use link, no matter what size of the file, always URL will be generated</p>
                </div>
                <div className="footer-discriptioon">
                    <BiBarChartSquare className="icons"/>
                    <h2>Statistics</h2>
                    <p>It is easier to check the amounts of download that your file received.</p>
                </div>
                <div className="footer-discriptioon">
                    <RiShieldCheckLine className="icons"/>
                    <h2>Secure</h2>
                    <p>It is secure since you can add a password and we keep all data encrypted.</p>
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