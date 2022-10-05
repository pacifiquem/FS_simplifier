import React, {useRef, useState} from 'react';
import axios from 'axios';
import '../assets/styles/style.css';
import Spinner from 'react-bootstrap/Spinner';

const ClickCounterBody:React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const [styles, setStyles] = useState({
        fontSize: '1.2em'
    });

    const [inputUrl, setInputUrl] = useState('');
    const [exampleUrl, setExampleUrl] = useState('Example: atshorturl.herokuapp.com/AbCdE');
    const [buttonMessage, setButtonMessage] = useState('Submit');
    const [readOnly, setReadOnly] = useState(false);
    const [paraStyles, setParaStyles] = useState({
        display: 'none'
    });

    const returnUrlCounter = () => {
        if(inputUrl !== '') {

            axios.post('', {
                url: inputUrl
            }).then((response) => {
                setStyles({
                    fontSize: '2.2em'
                });

                setButtonMessage(`Dowload Counts`);
                setInputUrl(response.data.data);
                setReadOnly(!readOnly);
                setExampleUrl(`URL: ${inputUrl}`);

            }).catch((error) =>{
                setParaStyles({
                    display: 'block'
                });
            });

        }else {

            setParaStyles({
                display: 'block'
            });

        }
    }

    return (
        <>
            <div className="clickCounterContainer">
                <div className='clickCounterHeader'>
                    <h1>File Downloads Counter</h1>
                    <p>Enter the URL to find out how many visits it has received so far.</p>
                    <p id='countererror' style={paraStyles}>Invalid link .</p>
                </div>
                <div className='clickCounterBody'>
                    <div className="input" id='clickCounterInput'>
                        <input type="text" required readOnly={readOnly} placeholder="Enter the link here" style={styles} ref={inputRef} value={inputUrl} onChange={(e) => {
                            e.preventDefault();
                            setInputUrl(e.target.value)
                            }} />
                        <button type="submit" onClick={returnUrlCounter} id="clickCounterButton">{buttonMessage}</button>
                    </div>
                    <p>{exampleUrl}</p>
                </div>
                <p>* Track the total downloads of the uploaded FILE in real time, you do not have to register.</p>
            </div>
        </>
    );
}

export default ClickCounterBody;