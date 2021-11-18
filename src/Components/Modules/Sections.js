import React from 'react';
import styled from 'styled-components';

import { FullWidthImage } from '../Assets/image';
import { MainTitle } from '../Assets/typography';
import { VideoPlayer } from '../Assets/video';

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

const TitledContentStyle = styled.section`
    width:100%;
    background-color:${props => props.color};
    padding: 64px ${props => props.theme.margins.desktop.half};
    display:flex;
    flex-direction:column;
    align-items:center;

    ${MainTitle} & {
        margin-bottom:64px;
    }

    & h1{
        margin-bottom:64px;
    }
`



export function TitledContent (props) {
    return <TitledContentStyle color={props.color}>
        <MainTitle>PLAY-TO-EARN RPG</MainTitle>
        <VideoPlayer src={props.src}></VideoPlayer>
    </TitledContentStyle>
}