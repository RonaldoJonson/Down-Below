import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../Modules/Navbar';
import { Footer } from '../Modules/Footer';

const MainSection = styled.main`
    margin-top:${props => props.theme.height.header};

    @media (max-width: 768px) {
        height:120vh;
    }

    @media (max-width: 480px) {
        
    }  
`

const AcesseMetamask = () => {
    
}

export function UserPage (props) {
    return <div>
        <NavBar/>
            <MainSection>
                
            </MainSection>
        <Footer/>
    </div> 
}