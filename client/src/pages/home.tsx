import React from "react";
import NavComponent from '../component/homeNav';
import BodyComponent from '../component/homeBody';
import FooterComponent from '../component/homefooter';

const HomePage:React.FC = () => {
    return (
        <>
            <NavComponent />
            <BodyComponent />
            <FooterComponent />
        </>
    );
}

export default HomePage;