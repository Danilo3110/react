import React from 'react';

const userInput = ( props ) => {
    const style = {
        width: "20%",
        border: "1.5px solid lightblue",
        padding: "1%",
        margin: "auto"
    }

    return (
        <div>
            <input 
                type="text" 
                style={style} 
                placeholder="Enter username" 
                onChange={props.change} 
                value={props.userName}/>
        </div>
    );
}

export default userInput;