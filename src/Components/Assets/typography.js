import React from 'react';

export function main_Title (props) {
    return <h1 size={props.InputVariant} color={props.buttonColor} onClick={props.handleClick}>
        {props.buttonText}
    </h1>
}

export function Title (props) {
    return <h2 size={props.InputVariant} color={props.buttonColor} onClick={props.handleClick}>
        {props.buttonText}
    </h2>
}

export function Sub_Title (props) {
    return <h4 size={props.InputVariant} color={props.buttonColor} onClick={props.handleClick}>
        {props.buttonText}
    </h4>
}

export function Support(props) {
    return <p size={props.InputVariant} color={props.buttonColor} onClick={props.handleClick}>
    {props.buttonText}
    </p>
}

export function Countinuos(props) {
    return <p size={props.InputVariant} color={props.buttonColor} onClick={props.handleClick}>
        {props.buttonText}
    </p>
}

export function Featured(props) {
    return <input variant={props.InputVariant} color={props.buttonColor} onClick={props.handleClick}>
        {props.buttonText}
    </input>
}

export function Label(props) {
    return <label variant={props.InputVariant} color={props.buttonColor} onClick={props.handleClick}>
        {props.buttonText}
    </label>
}