import React from 'react';
import '../assets/styles/style.css';
import Spinner from 'react-bootstrap/Spinner';

const GrowSpinner:React.FC = ()  =>{

  return(
    <div className='spinnerdiv homeSpinner'>
        <Spinner animation="grow" className='spinner'/>
    </div>
  );

}

export default GrowSpinner;