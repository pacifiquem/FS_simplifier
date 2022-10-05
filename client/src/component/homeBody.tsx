import React, { useState, useRef } from "react";
import '../assets/styles/style.css';
import axios from 'axios';
import UrlShower from "./homeUrlShower";
import GrowSpinner from "./Spinner";


const BodyComponent:React.FC = () => {
    
    const [inputValue, setInputValue]:[string, React.Dispatch<React.SetStateAction<string>>] = useState('');
    const [shortUrl, setShortUrl]:[string, React.Dispatch<React.SetStateAction<string>>] = useState('');
    const [showBody, setshowBody]:[{display: string;},React.Dispatch<React.SetStateAction<{display: string;}>>] = useState({display: 'block'});
    const [showSpinner, setShowSpinner]:[boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    const [showError, setShowError] = useState({
        display: 'none'
    })

    const submitUrl = async() => {

        if(inputValue !== '' && inputValue !== "") {

            setShowSpinner(!showSpinner);
            setshowBody({display: 'none'});
    
            await axios.post('https://atshorturl.herokuapp.com/addurl', {
                url: inputValue
            }).then((response) => {
                console.log(response);
                setShortUrl(`${response.data.data}`);
            }).catch((error) => {
                setShowError({
                    display:'block'
                })
            });

        }else {
            setShowError({
                display:'block'
            })
        }
        
    }

    return(
    <>
        <div className="body">
            <div style={showBody}>
                <div className="headers">
                    <h1>Paste the URL to be shortened</h1>
                    <p id="homeerror" style={showError}>Please send a valid link</p>
                </div>
                <div className="input">
                    <input type="text" required placeholder="Enter the link here" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
                    <button type="submit" onClick={submitUrl}>Shorten URL</button>
                    </div>
                </div>
                {(shortUrl !== '' && showBody.display !== 'block') ?
                (
                    <div>
                        <UrlShower url={shortUrl} />
                        <div className="footer-contents">
                            <p>ShortURL.at is a free tool to shorten a URL or reduce a link</p>
                            <p>Use our URL Shortener to create a shortened link making it easy to remember</p>
                        </div>
                    </div>
                ):
                (
                    <div>
                        {showSpinner && <GrowSpinner />}
                        <div className="footer-contents" style={showBody}>
                            <p>ShortURL.at is a free tool to shorten a URL or reduce a link</p>
                            <p>Use our URL Shortener to create a shortened link making it easy to remember</p>
                        </div>
                    </div>
                )
                }
            </div>
        <div className="discription">
            <h2>Simple and fast URL shortener!</h2>
            <div className="paragraphs">
                <p> ShortURL allows to reduce long links from Instagram, Facebook, YouTube, Twitter, Linked In and top sites on
                    the Internet, just paste the long URL and click the Shorten URL button. On the next screen, copy the
                    shortened URL and share it on websites, chat and e-mail. After shortening the URL,<a href="/urlcounter">check how many clicks it received</a>.
                </p>
            </div>
        </div>
    </>
    );
}

export default BodyComponent;