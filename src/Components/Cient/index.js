import React from 'react';
import imgCien from './img/cientistas.png';
import * as S from './styled'
import { Link } from 'react-router-dom';

export default function Cient() {
    return(
        <S.divCien>
            <div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla dictum lobortis. Maecenas vel sem id risus pretium aliquam.</h1>
                <h1>Todos os nossos funcionários são formados em <S.SpanCor>enfermagem e nutrição.</S.SpanCor></h1>
                    <Link to='/Formulario'>
                        <S.buttonCien>CADASTRE-SE AGORA E GANHE DESCONTO</S.buttonCien>
                    </Link>
            </div>
            <S.divFotoCien>
                <img src={imgCien} alt='Dois cientistas sorrindo' />
            </S.divFotoCien>
        </S.divCien>
    );
}