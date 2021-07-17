import React from 'react';
import logo from "./img/Logo.jpg"
import * as S from './styled'


export default function Header() {
    return(
        <S.container>
            <div>
                <img src={logo} alt='Logo da empresa' />
            </div>
            <S.ul>
                <S.li>Sobre</S.li>
                <S.li>Funcionários</S.li>
                <S.li>Valores</S.li>
            </S.ul>
        </S.container>
    );
}