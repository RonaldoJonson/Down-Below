import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
    padding:16px;
    background-color: ${props => props.theme.colors.primary};
    height:100px;
    width:200px;
    &:hover {
       
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        width:100%;
    }  
`

const PlayButtonStyle = styled.button`
    background-color: ${props => props.theme.colors.secondary};
    height:40px;
    width:120px;
    &:hover {
        background-color: ${props => props.theme.colors.secondaryHover};
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        width:100%;
    }  
`

export function Button (props) {
    return <ButtonBase variant={props.InputVariant} color={props.buttonColor} onClick={props.handleClick}>
        {props.buttonText}
    </ButtonBase>
}

export function ButtonIcon (props) {
    return <ButtonBase variant={props.InputVariant} onClick={props.handleClick} 
        edge={props.edge}
        color={props.buttonColor}
        aria-label={props.label}>
        {props.icon}
    </ButtonBase>
}

export function PlayButton (props) {
    return <PlayButtonStyle>Play Now</PlayButtonStyle>
}
