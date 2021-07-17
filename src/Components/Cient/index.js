import React from 'react';
import imgCien from './img/cientistas.png';
import * as S from './styled'

export default function Cient() {
    return(
        <S.divCien>
            <div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla dictum lobortis. Maecenas vel sem id risus pretium aliquam.</h1>
                <h1>Todos os nossos funcionários são formados em enfermagem e nutrição.</h1>
                <S.buttonCien>CADASTRE-SE AGORA E GANHE DESCONTO</S.buttonCien>
            </div>
            <S.divFotoCien>
                <img src={imgCien} alt='Dois cientistas sorrindo' />
            </S.divFotoCien>
        </S.divCien>
    );
}