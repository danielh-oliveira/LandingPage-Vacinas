import styled from 'styled-components';

//3 Parte

export const divCien = styled.div`
    height: 760px;
    display: flex;
    justify-content: flex-end;

    & > div {
        max-width: 610px;
        max-height: 600px;
        margin: 100px 15% 0 0;
    }

    & > div > h1:first-child {
        font-weight: normal;
        font-size: 34px;
        letter-spacing: 0.045em;
    }
    & > div > h1:nth-child(2) {
        font-weight: bold;
    }
`

export const buttonCien = styled.button`
    border-radius: 40px;
    width: 390px;
    height: 50px;
    z-index: 1;
    cursor: pointer;
    margin: 80px 0 0 140px;

    background-image: linear-gradient(#7ACFC1, #54B8A8);
    &:active{
        background-image: linear-gradient(#54B8A8, #7ACFC1);
    }
    box-shadow: 0px 10px 25px #7ACFC1;

    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.07em;
    color: #FFFFFF;
`

export const divFotoCien = styled.div`
    position: absolute;
    left: 0;
    top: 1240px;
    z-index: -100;

    @media (max-width: 1665px) and (min-width: 1430px) {
        top: 1200px;
    }
`

export const SpanCor = styled.span`
    color: #7ACFC1;
`