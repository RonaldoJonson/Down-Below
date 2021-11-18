import React from 'react';
import styled from 'styled-components';

const VideoPlayerStyle = styled.video`
    width:60%;
    height:40%;
    aspect-ratio:16/9;
    display:flex;
    align-items:center;
    justify-content:center;

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        width:100%;
    }  
`

export function VideoPlayer (props) {
    return <VideoPlayerStyle controls='true'>
        <source src={props.src} type="video/mp4"/>
        <source src={props.src} type="video/ogg"/>
        Your browser does not support the video tag.
    </VideoPlayerStyle>
}