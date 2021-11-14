import React from 'react';
import styled from 'styled-components';
import { MainLogo } from '../Assets/image';
import { NavLinks } from '../Components/NavLinks';
import { Link } from '../Assets/typography';
import {PlayButton} from '../Assets/button';

const Navbar = styled.header`
    width:100vw;
    padding:16px;
    background-color: ${props => props.theme.colors.primary};
    height:80px;
`

const NavbarContainer = styled.div `
    width:80%;
    margin:0 auto;
    display:grid;
    grid-template-columns:1fr 3fr 1fr;
    align-items:center;
    justify-items:center;
`

const NavContent = styled.nav`
    width:100%;
`

export function NavBar (props) {
    return <Navbar>
        <NavbarContainer>
            <MainLogo/>
            <NavContent>
                <NavLinks>
                    <li><Link href="https://ronaldojonson.gitbook.io/api-docs/" target="_self">Home</Link></li>
                    <li><Link href="https://ronaldojonson.gitbook.io/api-docs/" target="_self">Battle</Link></li>
                    <li><Link href="https://ronaldojonson.gitbook.io/api-docs/" target="_self">land</Link></li>
                    <li><Link href="https://ronaldojonson.gitbook.io/api-docs/" target="_self">AXS</Link></li>
                    <li><Link href="https://ronaldojonson.gitbook.io/api-docs/" target="_self">News</Link></li>
                    <li><Link href="https://ronaldojonson.gitbook.io/api-docs/" target="_self">Marketplace</Link></li>
                    <li><Link href="https://ronaldojonson.gitbook.io/api-docs/" target="_self">More</Link></li>
                </NavLinks>
            </NavContent>
            <PlayButton>Play Now</PlayButton>
        </NavbarContainer>
    </Navbar>
}