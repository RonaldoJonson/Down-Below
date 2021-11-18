import React from 'react';
import styled from 'styled-components';
import { MainLogo } from '../Assets/Logo';
import { NavLinks } from '../Components/NavLinks';
import { Link } from '../Assets/typography';
import {PlayButton} from '../Assets/button';

const Navbar = styled.header`
    width:100%;
    height: ${props => props.theme.height.header};
    background-color: ${props => props.theme.colors.primary};
    position:fixed;
    top: 0;
`

const NavbarContainer = styled.div `
    width: calc(100% - ${props => props.theme.margins.desktop.full});
    height:100%;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`

const NavContent = styled.nav`
    display:flex;
`

const ListItem = styled.li`
    margin-left:57px;
`


export function NavBar (props) {
    return <Navbar>
        <MainLogo/>
        <NavbarContainer>
            <NavContent>
                <NavLinks>
                    <ListItem><Link>Home</Link></ListItem>
                    <ListItem><Link>DBToken</Link></ListItem>
                    <ListItem><Link>Game</Link></ListItem>
                    <ListItem><Link>Whitepaper</Link></ListItem>
                    <ListItem><Link>NFT</Link></ListItem>
                </NavLinks>
                <PlayButton></PlayButton>
            </NavContent>
        </NavbarContainer>
    </Navbar>
}