import React from "react";
import '../assets/styles/styles.css';


const HomeForm:React.FC = () => {
    return (
        <>
            <div className="homeform">
                <h1>Upload file to FS.simplifier</h1>
                <form action="" method="post" encType="multipart/formdata">
                    <div className="input-label">
                        <label htmlFor="password" id="pass-input">Password</label>
                        <input type="password" />
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