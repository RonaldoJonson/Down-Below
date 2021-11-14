import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
    width:100vw;
    background-color: ${props => props.theme.colors.primary};
    &:hover {
       
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        width:100%;
    }  
`

export function Footer (props) {
    return <FooterStyle>
       TESTE
    </FooterStyle>
}