import React, { useRef } from "react";
import '../assets/styles/styles.css';


const HomeForm:React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const passwordLabel = useRef<HTMLLabelElement>(null)

    const focusHandler = () => {
        inputRef.current?.removeAttribute('placeholder');
    }

    const blurHandler = () => {
        inputRef.current?.setAttribute('placeholder', 'Password');
        passwordLabel.current?.setAttribute('style', '{display: none}');
    }

    return (
        <>
            <div className="homeform">
                <h1>Upload file to FS.simplifier</h1>
                <form action="" method="post" encType="multipart/formdata">
                    <div className="input-label">
                        <label htmlFor="password" id="pass-input" ref={passwordLabel}>Password</label>
                        <input type="password" ref={inputRef} placeholder="Password" onFocus={focusHandler} onBlur={blurHandler} />
                    </div>
                    <div className="input-label">
                        <label htmlFor="file">Upload File</label>
                        <input type="file" name="file" id="file"/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default HomeForm;