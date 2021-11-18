import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../../Modules/Navbar';
import { Footer } from '../../Modules/Footer';
import { Cover, TitledContent } from '../../Modules/Sections';

import  Video  from '../../../Assets/video.mp4';

const MainSection = styled.main`
    margin-top:${props => props.theme.height.header};

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
            <Cover color="white" src="https://picsum.photos/1600/900"></Cover>
            <TitledContent color="lightgrey" src={Video}></TitledContent>
        </MainSection>
        <Footer/>
    </div> 
   
}