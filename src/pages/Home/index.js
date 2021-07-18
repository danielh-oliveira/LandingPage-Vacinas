import React from 'react';
import Header from '../../Components/Header/';
import Desc from '../../Components/Desc/'
import Cient from '../../Components/Cient/'
import Footer from '../../Components/Footer/';
import imgSenhora from './img/imgSenhora.png';
import { Link } from 'react-router-dom';

import * as S from './styled';

export default function Home() {
    return(
        <>
            <Header />
            <S.containerHome>
                <S.H1home>Cadastre-se na nossa newsletter<br/>para receber as últimas novidades<br/>sobre os nossos novos testes</S.H1home>
                <S.H1homeNegrito>Cadastre-se e receba cupons<br/>de <S.SpanCor>desconto!</S.SpanCor></S.H1homeNegrito>
                <S.divFotoFilha>
                    <S.imgBorda src={imgSenhora} alt='Mãe e filha felizes juntas' />
                </S.divFotoFilha>
                <S.divEmail>
                    <S.input placeholder="Clique aqui e digite seu e-mail" type='email' />
                    <Link to="/Formulario">
                        <S.button>CADASTRAR E-MAIL</S.button>
                    </Link>
                </S.divEmail>
            </S.containerHome>
            <Desc />
            <Cient />
            <Footer githLink='https://github.com/danielh-oliveira' linkedinLink='https://www.linkedin.com/in/daniel-santos-96290696'/>
        </>
    );
}