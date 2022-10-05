import React from "react";
import '../assets/styles/styles.css';

const NavBar:React.FC = () => {

    return (
        <>
            <div className="nav">

                <h1 className="logo">FS.simplifier</h1>
                <div className="links">
                    <a href="/download-counter">Download Counter</a>
                    <a href="localhost:3000#aboutus">AboutUs</a>
                    <a href="/contactus">ContactUs</a>
                    <a href=""></a>
                </div>
            </div>
        </>
    );
}

export default NavBar;