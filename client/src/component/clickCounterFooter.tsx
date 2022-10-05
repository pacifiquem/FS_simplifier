import React from 'react';
import '../assets/styles/style.css';


const ClickCounterFooter:React.FC = () => {
    return (
        <>
            <div className="ClickCounterfooter">
                <div className="author">
                    <a>pacifiquem@github.com</a>
                </div>
                <div className='helpful-links'>
                    <a href="https://atshorturl.vercel.app">FS.simplifier</a>
                    <a href="https://atshorturl.vercel.app/urlcounter">File Downloads Counter</a>
                    <a href='https://atshorturl.vercel.app/contactus'>Contact</a>
                    <a href="https://github.com/pacifiquem">Author's Github</a>
                </div>
            </div>
        </>
    );
}

export default ClickCounterFooter;