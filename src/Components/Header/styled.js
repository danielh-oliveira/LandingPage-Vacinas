import styled from 'styled-components';

export const container = styled.div`
    margin-left: 10%;
    margin-top: 1%;
    margin-bottom: 2%;
    display: flex;
    & > div {
        cursor: pointer;
    }
    
    @media (max-width: 1460px) {
        margin-top: 20px;
        margin-left: 30px;
        & > div > img {
            width: 4rem;
        }
    }

`

export const ul = styled.ul`
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1460px) {
        padding-left: 15px;
        padding-top: 0;
    }
`

export const li = styled.li`

    list-style-type: none;
    margin-right: 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 22.652px;
    line-height: 30px;
    color: #545454;
    padding-top: 20px;
    &:first-child {
        margin-left: 81px;
    }
    cursor: pointer;

    @media (max-width: 1460px) {
        padding-top:5px;
        margin-right: 7px;
        font-size: 17px;
        line-height: 30px;
        color: #545454;
        &:first-child {
            margin-left: 0;
        }
    }
`
