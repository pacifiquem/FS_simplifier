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
    const [showPassinput, setShowPassinput] = useState(false);
    const [showError, setShowError] = useState({
        display: 'none'
    })

    const submitUrl = async() => {

        if(inputValue !== '' && inputValue !== "") {

            setShowSpinner(!showSpinner);
            setshowBody({display: 'none'});
    
            await axios.post('', {
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
                    <h1>Upload File to FS.simplifier</h1>
                    <p id="homeerror" style={showError}>Please send a valid link</p>
                </div>
                <div className="input">
                    <div className="file-input">
                        <input type="file" required />
                        <button type="submit">Next</button>
                    </div>
                        <input type="password" style={{display: 'none'}} required placeholder="Enter the password here" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
                        <button type="submit" style={{display: 'none'}}>Submit</button>
                </div>
            </div>
            {(shortUrl !== '' && showBody.display !== 'block') ?
            (
                <div>
                    <UrlShower url={shortUrl} />
                    <div className="footer-contents">
                        <p>FS.simplifier is a free tool and secure to share files </p>
                        <p>Use our FS.simplifier to upload file and start sharing links generated instead .</p>
                    </div>
                </div>
            ):
            (
                <div>
                    {showSpinner && <GrowSpinner />}
                    <div className="footer-contents" style={showBody}>
                        <p>FS.simplifier is a free tool and secure to share files </p>
                        <p>Use our FS.simplifier to upload file and start sharing links generated instead .</p>
                    </div>
                </div>
            )
            }
        </div>
        <div className="discription">
            <h2>Faster File Sharing Simplifier</h2>
            <div className="paragraphs">
                <p> FS.simplifier allows to upload file from computer, and generate url that can be share instead of file,
                    Just upload file, add password protection and then click upload you will get a url that you can share instead of File.
                    Generated URL can be shared on websites, chat and e-mail. By generated URL you can <a href="/urlcounter">check download counts it has</a>.
                </p>
            </div>
        </div>
    </>
    );
}

export default BodyComponent;