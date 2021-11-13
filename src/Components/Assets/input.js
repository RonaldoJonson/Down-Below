import React from 'react';

export function input_text (props) {
    return <input color={props.buttonColor} onClick={props.handleClick}>
        {props.buttonText}
    </input>
}

export function input_check (props) {
    return <checkbox/> 
}

export function input_date (props) {
    return <input type="date"/>
}
