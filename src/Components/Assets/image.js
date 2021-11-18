import React from 'react';
import styled from 'styled-components';

const BackgroundImage = styled.div`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size:cover;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        width:100%;
    }  
`

export function Background (props) {
    return <BackgroundImage src={props.src}>
        {props.children}
    </BackgroundImage>
}

export const FullWidthImageStyle = styled.img`
    width:100%;
    height:100%:
`

export function FullWidthImage (props) {
    return <FullWidthImageStyle src={props.src}>
    </FullWidthImageStyle>
}
