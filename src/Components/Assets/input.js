import React from 'react';

export function InputText (props) {
    return <input color={props.buttonColor} onClick={props.handleClick}>
        {props.buttonText}
    </input>
}

export function InputCheck (props) {
    return <checkbox/> 
}

export function InputDate (props) {
    return <input type="date"/>
}
