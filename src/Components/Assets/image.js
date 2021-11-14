import React from 'react';
import styled from 'styled-components';

import Logo from '../../Assets/Logo.png';

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
const LogoStyle = styled.div`
    background-image: url(${Logo});
    width: 133px;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
`

export function Background (props) {
    return <BackgroundImage url={props.url}>
        {props.children}
    </BackgroundImage>
}

export function MainLogo (props){
    return <LogoStyle>
    </LogoStyle>
}
