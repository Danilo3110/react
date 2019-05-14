import React from 'react';
import './UserOutput.css';

const timeShow = ( props ) => {
    return (
        <div id="clock" className="UserOutput" onClick={props.click}>Click here to show time</div>
    );
}

export default timeShow;