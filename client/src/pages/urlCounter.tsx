import React from "react";
import NavComponent from "../component/homeNav";
import '../assets/styles/style.css';
import ClickCounterBody from "../component/clickCounterBody";
import ClickCounterFooter from "../component/clickCounterFooter";

const UrlCounterPage:React.FC = () => {


    return (
        <>
            <div className="clickCounterNav">
                <NavComponent />
            </div>
            <ClickCounterBody />
            <ClickCounterFooter />
        </>
    );
}

export default UrlCounterPage;