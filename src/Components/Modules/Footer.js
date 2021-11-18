import React from 'react';
import styled from 'styled-components';

import { LinkFooter } from '../Assets/typography';

const FooterStyle = styled.footer`
    width:100vw;
    padding:32px;
    background-color: ${props => props.theme.colors.primary};
    &:hover {
       
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        width:100%;
    }  
`

const FooterGrid = styled.div`
    display:grid;
    grid-template-columns 1fr 2fr 1fr;
    justify-items:center;

    & > ul {
        display:grid;
        grid-template-columns 1fr 1fr 1fr;
        width: 100%;
        list-style:none;
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        width:100%;
    }  
`

export function Footer (props) {
    return <FooterStyle>
        <FooterGrid>
            <ul>
                <li><LinkFooter href="">Home</LinkFooter></li>
                <li><LinkFooter href="">Battle</LinkFooter></li>
                <li><LinkFooter href="">Land</LinkFooter></li>
                <li><LinkFooter href="">AXS</LinkFooter></li>
                <li><LinkFooter href="">Marketplace</LinkFooter></li>
                <li><LinkFooter href="">GettingStarted</LinkFooter></li>
                <li><LinkFooter href="">News</LinkFooter></li>
                <li><LinkFooter href="">Encyclopedia</LinkFooter></li>
                <li><LinkFooter href="">Land Chest Sale</LinkFooter></li>
                <li><LinkFooter href="">Terms of Use</LinkFooter></li>
                <li><LinkFooter href="">Privacy Policy</LinkFooter></li>
                <li><LinkFooter href="">FAQ</LinkFooter></li>
                <li><LinkFooter href="">Whitepaper</LinkFooter></li>
            </ul>
        </FooterGrid>
    </FooterStyle>
}