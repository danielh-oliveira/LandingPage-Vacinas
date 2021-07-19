import styled from 'styled-components';

export const formF = styled.form`
    border: 2px solid #7ACFC1;
    background: #7ACFC1;
    box-shadow: 0px 0px 15px #7ACFC1;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 30px 0;
    width: 500px;
    margin: 0 auto;

    @media (max-width: 500px) {
        width: 300px;
    }
`

export const inputF = styled.input`
    margin: 0 auto;
    font-family: Roboto Slab;
    font-size: 15px;
    border: 3px solid #59C3B2;
    box-sizing: border-box;
    border-radius: 52px;
    width: 350px;
    height: 35px;
    text-align: center;
    margin-bottom: 40px;
    background: #FFF;

    @media (max-width: 500px) {
        width: 250px;
    }
`

export const labelF = styled.label`
    font-style: normal;
    font-weight: bold;
    font-size: 22.652px;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: #FFF;
    margin-bottom: 15px;
`

export const buttonF = styled.button`
    font-family: Roboto Slab;
    font-size: 20px;
    background: #F2935C;
    box-shadow: 0px 6px 10px rgba(227, 134, 80, 0.57);
    border-radius: 52px;
    color: #FFF;
    height: 38px;
    width: 150px;
    margin: 0 auto;
    cursor: pointer;
`

export const h1 = styled.h1`
    color: #FFF;
`
