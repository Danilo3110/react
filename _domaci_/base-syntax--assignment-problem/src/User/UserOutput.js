import React from 'react';
import './UserOutput.css';

const userOutput = ( props ) => {
    return (
        <div className="UserOutput" >
            <p>{props.children} {props.userName}</p>
            <p>Your e-mail: {props.userStateEmail}</p>
        </div>
    );
}

export default userOutput;