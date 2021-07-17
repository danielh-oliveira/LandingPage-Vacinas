import styled from 'styled-components';

export const containerHome = styled.div`
    margin-left: 10%;
    margin-top: 11%;
`

export const H1home = styled.h1`
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 45px;
    letter-spacing: 0.045em;
    color: #000000;
`

export const H1homeNegrito = styled.h1`
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 45px;
    letter-spacing: 0.045em;
    color: #000000;
    font-weight: bold;
`

export const divFotoFilha = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    z-index: -100;
`
export const imgBorda = styled.img`
    z-index: -10;
`

export const input = styled.input`
    border-radius: 40px;
    width: 450px;
    height: 40px;

    border-style: solid;
    border-color: #7ACFC1;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #585858;

    text-indent: 15px;
`
export const button = styled.button`
    border-radius: 40px;
    width: 195px;
    height: 48px;
    z-index: 2;
    top: -1px;

    position: relative;
    right: 40px;
    cursor: pointer;

    background-image: linear-gradient(#7ACFC1, #54B8A8);
    &:active{
        background-image: linear-gradient(#54B8A8, #7ACFC1);
    }
    box-shadow: 0px 10px 25px #7ACFC1;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.07em;
    color: #FFFFFF;
`

export const divEmail = styled.div`
    margin-top: 64px;
`

export const SpanCor = styled.span`
    color: #7ACFC1;
`