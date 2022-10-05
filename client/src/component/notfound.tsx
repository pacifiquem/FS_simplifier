import React from 'react';
import '../assets/styles/style.css';

const notFound:React.FC  = () => {

    const redirect = ():void => {
       window.location.href = "http://atshorturl.vercel.app";
    }

    return (
        <>
        <div className='notfound'>
            <h1>Short URL</h1>
            <h1>404</h1>
            <p>Page not found !</p>
            <p>The page you are looking for might have been removed, had its name changed or is unavailable.</p>
            <button onClick={redirect}>Return to home page</button>
        </div>
        </>
    )
}

export default notFound