import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <button className='button' type={props.type || 'button'}>
            {props.children}
        </button>
    )
}

export default Button;
