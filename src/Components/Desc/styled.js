import styled from 'styled-components';

//2 parte

export const divDesc = styled.div`
    margin-top: 190px;
    z-index: 2;
    background-color: #5CCDBB;
    height: 400px;
    padding: 40px 0 40px 0;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const desc = styled.div`
    max-width: 330px;
    color: #FFF;
    text-align: center;

    & > h2 {
        margin-bottom: 35px;
    }
    z-index: 1;
`

export const divCirculo = styled.div`
    background-color: #FFF;
    width: 115px;
    height: 115px;
    border-radius: 50%;
    margin: 0 auto 35px auto;
    & > img {
        margin-top: 17px;
    }
`

export const spanPreto = styled.span`
    color: #585858;
    font-weight: bold;
`