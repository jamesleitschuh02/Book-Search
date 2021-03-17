import React from 'react';

function Button(props) {
    return (
        <button onClick={props.function}>{props.buttonTxt}</button>
    );
}

export default Button;