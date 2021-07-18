import styled from 'styled-components';

export const mainF = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;

    & > a {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-decoration:none;
    }
`

export const h1F = styled.h1`
    margin: 130px 0;
    text-align: center;
`

export const buttonV = styled.button`
    height: 38px;
    width: 150px;
    margin: 50px auto;
    cursor: pointer;

    font-family: Roboto Slab;
    font-size: 20px;
    color: #FFF;
    background: linear-gradient(180deg, #7ACFC1 0%, #54B8A8 100%);
    box-shadow: 0px 10px 25px #7ACFC1;
    border-radius: 52px;
`
