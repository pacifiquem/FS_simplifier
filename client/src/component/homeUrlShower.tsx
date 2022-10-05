import React, { useRef, useState } from 'react';
import '../assets/styles/style.css';


interface Props {
    url: string
}


const UrlShower:React.FC<Props> = (props) => {

    const buttonRef = useRef(null);
    const [buttonText, setButtonText] = useState('Copy Url')

    const onClickHandler = () => {
        window.navigator.clipboard.writeText(props.url);
        setButtonText('Url Copied');
    }

    return (
        <>
            <div className="url-headers">
                    <h1>This is shortened URL</h1>
            </div>
            <div id='url-shower'>
                <div>
                    <p>{props.url}</p>
                </div>
                <button onClick={onClickHandler} ref={buttonRef}>{buttonText}</button>
            </div>
        </>
    )
}

export default UrlShower;