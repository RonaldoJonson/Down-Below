import React from 'react';
import { Background } from '../Assets/image';
import { SubTitle } from '../Assets/typography';

export function TextContainer (props) {
    return <Background url={props.url}>
        <SubTitle buttonText={props.buttonText}></SubTitle>
    </Background>
}