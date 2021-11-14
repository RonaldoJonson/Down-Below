import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../../Modules/Navbar';
import { Footer } from '../../Modules/Footer';
import { ContainerCenter } from '../../Modules/Containers';
import { TextContainer } from '../../Components/TextContainer';

const MainSection = styled.main`
    height:50vh;

    @media (max-width: 768px) {
        height:120vh;
    }

    @media (max-width: 480px) {
        
    }  
`

export function Home (props) {
    return <div>
        <NavBar/>
        <MainSection>
            <ContainerCenter>
                <TextContainer url="https://picsum.photos/200/300" buttonText="10.000 eth"></TextContainer>
                <TextContainer url="https://picsum.photos/200/300" buttonText="10.000 eth"></TextContainer>
                <TextContainer url="https://picsum.photos/200/300" buttonText="10.000 eth"></TextContainer>
            </ContainerCenter>
        </MainSection>
        <Footer/>
    </div> 
   
}