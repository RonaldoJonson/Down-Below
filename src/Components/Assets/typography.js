import React from 'react';
import styled from 'styled-components';

export function MainTitle (props) {
    return <h1 size={props.InputVariant} color={props.buttonColor} onClick={props.handleClick}>
        {props.children}
    </h1>
}

export function Title (props) {
    return <h2 size={props.InputVariant} color={props.buttonColor} onClick={props.handleClick}>
        {props.buttonText}
    </h2>
}

export function SubTitle (props) {
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

const LinkStyle = styled.a`
    text-decoration:none;
    color: ${props => props.theme.colors.secondary};
    &:hover{
        color: ${props => props.theme.colors.secondaryHover};
    }
`

export function Link(props) {
    return <LinkStyle href={props.href} target={props.target}>
        {props.children}
    </LinkStyle>
}

const LinkFooterStyle = styled.a`
    text-decoration:none;
    color: ${props => props.theme.colors.secondary};
    text-decoration:none;
    &:hover{
        color: ${props => props.theme.colors.secondaryHover};
        text-decoration:underline;
    }
`

export function LinkFooter(props) {
    return <LinkFooterStyle href={props.href} target={props.target}>
        {props.children}
    </LinkFooterStyle>
}