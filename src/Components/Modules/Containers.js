import React from 'react';
import styled from 'styled-components';

const ContainCenterStyle = styled.div`
    width:100%;
    background-color:red;
    height:100%;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-column-gap:32px;
    align-items:center;
    padding:32px;

    @media (max-width: 768px) {
        grid-template-columns:1fr;
        grid-template-rows:1fr 1fr 1fr;
        grid-row-gap:32px;
    }
`


export function ContainerCenter (props) {
    return <ContainCenterStyle>
       {props.children}
    </ContainCenterStyle>
}