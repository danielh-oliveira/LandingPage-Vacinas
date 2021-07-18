import React from 'react';
import Form from '../../Components/Form/';
import { Link } from 'react-router-dom';

import * as S from './styled';

export default function PagForm() {
    return (
        <S.mainF>
            <S.h1F>Falta pouco para concluir sua inscrição!</S.h1F>
            <Form />
            <Link to="/">
                <S.buttonV>Voltar</S.buttonV>
            </Link>
        </S.mainF>
    );
}