import React from 'react';
import styled from 'styled-components';
import { MainTitle } from '../../Assets/typography';
import { FullWidthImage } from '../../Assets/image';
import { VideoPlayer } from '../../Assets/video';
import { ContainerColumns, ContainerInlineFlexwrap } from '../../Components/Containers';
import { Cover, MainContainer } from '../../Modules/Sections';
import { NavBar } from '../../Modules/Navbar';
import { Footer } from '../../Modules/Footer';


import  Video  from '../../../Assets/video.mp4';

const MainSection = styled.main`
    margin-top:${props => props.theme.height.header};

    @media (max-width: 480px) {
        
    }  
`

export function Home (props) {
    return <div>
        <NavBar/>
        <MainSection>
            <Cover color="white" src="https://picsum.photos/1600/900"></Cover>
            <MainContainer>
                <MainTitle>PLAY-TO-EARN RPG</MainTitle>
                <VideoPlayer src={Video}></VideoPlayer>
            </MainContainer>
            <MainContainer>
                <ContainerColumns columns="2">
                    <div>
                        <MainTitle>DOWN BELOW TOKEN</MainTitle>
                        <p>Official contact address</p>
                        <p>0xE34da6s54das51das6d4daads1a</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                    </div>
                    <FullWidthImage src="https://picsum.photos/1600/900"></FullWidthImage>
                </ContainerColumns>
            </MainContainer>
            <MainContainer>
                <MainTitle>COIN INFORMATION</MainTitle>
                <ContainerColumns columns="3">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                </ContainerColumns>
            </MainContainer>
            <MainContainer>
                <MainTitle>GAME MODES</MainTitle>
                <ContainerColumns columns="3">
                    <div>
                        <img src="https://picsum.photos/400/225" width="100%" height="225"/>
                        <h4>0xE34da6s54das51das6d4daads1a</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/400/225" width="100%" height="225"/>
                        <h4>0xE34da6s54das51das6d4daads1a</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/400/225" width="100%" height="225"/>
                        <h4>0xE34da6s54das51das6d4daads1a</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                    </div>
                </ContainerColumns>
            </MainContainer>
            <MainContainer>
                <MainTitle>CHAMPIONS</MainTitle>
                <ContainerInlineFlexwrap>
                    <div>
                        <img src="https://picsum.photos/200/300" height="100%"/>
                        <p>Assassin</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/200/300" height="100%"/>
                        <p>Mage</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/200/300" height="100%"/>
                        <p>Fighter</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/200/300" height="100%"/>
                        <p>Priest</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/200/300" height="100%"/>
                        <p>Knight</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/200/300" height="100%"/>
                        <p>Unkown</p>
                    </div>
                </ContainerInlineFlexwrap>       
            </MainContainer>
            <MainContainer>
                <MainTitle>PARTNERS</MainTitle>
                <ContainerInlineFlexwrap>
                    <img src="https://picsum.photos/320/120"></img>
                    <img src="https://picsum.photos/320/120"></img>
                    <img src="https://picsum.photos/320/120"></img>
                    <img src="https://picsum.photos/320/120"></img>
                    <img src="https://picsum.photos/320/120"></img>
                    <img src="https://picsum.photos/320/120"></img>
                    <img src="https://picsum.photos/320/120"></img>
                    <img src="https://picsum.photos/320/120"></img>
                    <img src="https://picsum.photos/320/120"></img>
                    <img src="https://picsum.photos/320/120"></img>
                    <img src="https://picsum.photos/320/120"></img>
                    <img src="https://picsum.photos/320/120"></img>
                </ContainerInlineFlexwrap>
            </MainContainer>
        </MainSection>
        <MainContainer>
            <MainTitle>DOWN BELOW TOKEN</MainTitle>
            <ContainerColumns columns="2">
                <FullWidthImage src="https://picsum.photos/1600/900"></FullWidthImage>
                <div>                       
                    <p><b>60%</b> Lorem ipsum dolor</p>
                    <p><b>60%</b> Lorem ipsum dolor</p>
                    <p><b>60%</b> Lorem ipsum dolor</p>
                    <p><b>60%</b> Lorem ipsum dolor</p>
                    <p><b>60%</b> Lorem ipsum dolor</p>
                    <p><b>60%</b> Lorem ipsum dolor</p>
                </div>
            </ContainerColumns>
        </MainContainer>
        <MainContainer>
            <MainTitle>DOWN BELOW TOKEN</MainTitle>
            <h4>subtitle</h4>
            <ContainerInlineFlexwrap>
                <img src="https://picsum.photos/104/104"></img>
                <img src="https://picsum.photos/104/104"></img>
                <img src="https://picsum.photos/104/104"></img>
                <img src="https://picsum.photos/104/104"></img>
            </ContainerInlineFlexwrap>
        </MainContainer>
        <Footer/>
    </div> 
   
}