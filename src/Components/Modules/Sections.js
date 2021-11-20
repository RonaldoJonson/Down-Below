import React from 'react';
import styled from 'styled-components';

import { FullWidthImage } from '../Assets/image';

const CoverStyle = styled.section`
    width:100%;
    background-color:${props => props.color};
    padding: 64px ${props => props.theme.margins.desktop.half};
`

export function Cover (props) {
    return <CoverStyle color={props.color}>
        <FullWidthImage src={props.src}></FullWidthImage>
    </CoverStyle>
}

const MainContainerStyle = styled.section`
    width:100%;
    background-color:${props => props.color};
    padding: 64px ${props => props.theme.margins.desktop.half};
    display:flex;
    flex-direction:column;
    align-items:center;

    & h1{
        margin-bottom:64px;
    }
`

export function MainContainer (props) {
    return <MainContainerStyle color={props.color}>
        {props.children}
    </MainContainerStyle>
}
