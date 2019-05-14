import React from 'react';

const validationComponent = ( props ) => {
    return (
        <div>
            <p>{props.text} because length of text is {props.length} characters</p>
        </div>
    );
};

export default validationComponent;