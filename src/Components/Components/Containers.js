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

const ContainerColumnsStyle = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:repeat(${props => props.columns}, 1fr);
    grid-column-gap:64px;

    @media (max-width: 768px) {
        grid-template-columns:1fr;
        align-items:center;
    }
`

export function ContainerColumns (props) {
    return <ContainerColumnsStyle columns={props.columns}>
       {props.children}
    </ContainerColumnsStyle>
}

const ContainerInlineFlexwrapStyle = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;
`

export function ContainerInlineFlexwrap (props) {
    return <ContainerInlineFlexwrapStyle>
       {props.children}
    </ContainerInlineFlexwrapStyle>
}