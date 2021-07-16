import React from 'react';
import Header from '../../Components/Header/'
import imgHold from './img/imghold.png'
import * as S from './styled'

export default function Home() {
    return(
        <>
            <Header />
            <S.containerHome>
                <S.H1home>Cadastre-se na nossa newsletter<br/>para receber as últimas novidades<br/>sobre os nossos novos testes</S.H1home>
                <S.H1homeNegrito>Cadastre-se e receba cupons<br/>de desconto!</S.H1homeNegrito>
                <S.divFotoFilha>
                    <S.imgBorda src={imgHold} alt='Mãe e filha felizes juntas' />
                </S.divFotoFilha>
                <S.divEmail>
                    <S.input placeholder="Clique aqui e digite seu e-mail"/>
                    <S.button>CADASTRAR E-MAIL</S.button>
                </S.divEmail>
            </S.containerHome>
        </>
    );
}