import React from 'react';
import styled from 'styled-components';

import Logo from '../../Assets/Logo.png';

const LogoStyle = styled.div`
    background-image: url(${Logo});
    width: 229px;
    height: 101px;
    position:absolute;
    top:0px;
    left:${props => props.theme.margins.desktop.half};
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
`

export function MainLogo (props){
    return <LogoStyle>
    </LogoStyle>
}
