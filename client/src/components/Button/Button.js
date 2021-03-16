import React from 'react';

function Button(props) {
    return (
        <button onClick={props.clickLink}>{props.buttonTxt}</button>
    );
}

export default Button;