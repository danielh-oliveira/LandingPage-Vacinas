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
                <S.p>Sobre</S.p>
                <S.p>Funcionários</S.p>
                <S.p>Valores</S.p>
            </S.ul>
        </S.container>
    );
}