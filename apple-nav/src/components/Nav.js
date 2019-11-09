import React from 'react';
import BlackStyledDiv from './StyledDiv';
import styled from 'styled-components';

const WhiteDiv = styled(BlackStyledDiv)`
    background: white;
    color: black;
`

export const Mac = () => {

    return (
            <WhiteDiv>
                <span>MacBook Air</span>
                <span>MacBook Pro</span>
                <span>iMac</span>
                <span>iMac Pro</span>
                <span>Mac Pro</span>
                <span>Mac Mini</span>
                <span>Compare</span>
                <span>Pro Display XDR</span>
                <span>Accessories</span>
            </WhiteDiv>
    );
};

export const IPad = () => {

    return (
            <WhiteDiv>
                <span>iPad Pro</span>
                <span>iPad Air</span>
                <span>iPad</span>
                <span>iPad Mini</span>
                <span>Compare</span>
                <span>Apple Pencil</span>
                <span>Smart Keyboard</span>
                <span>Airpods</span>
                <span>Accessories</span>
            </WhiteDiv>
    );
};

export const IPhone = () => {

    return (
            <WhiteDiv>
                <span>iPhone 11 Pro</span>
                <span>iPhone 11</span>
                <span>iPhone Xr</span>
                <span>iPhone 8</span>
                <span>Compare</span>
                <span>Apple Card</span>
                <span>Airpds</span>
                <span>Accessories</span>
            </WhiteDiv>
    );
};
