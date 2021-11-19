import React from 'react';
import {useState} from 'react';
import { ethers } from 'ethers';
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

const AcessMetamask = async () => {
    try{
        if(!window.ethereum)
            throw new Error("No Metamask");
        
        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.provider.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
    } catch(err){
        alert(err.message);
    }
}

export function UserPage (props) {
    const Login = async (e) => {
        console.log("TESTE");
        await AcessMetamask();
    }

    return <div>
        <NavBar/>
            <MainSection>
                <button onClick={() => Login()}>LOGIN</button>
            </MainSection>
        <Footer/>
    </div> 
}