import React from 'react';
import Form from '../../Components/Form/';
import Footer from '../../Components/Footer/'
import { Link } from 'react-router-dom';

import * as S from './styled';

export default function PagForm() {

    function limpeza() {
        localStorage.clear();
    }
    
    return (
        <>
            <S.mainF>
                <S.h1F>Falta pouco para concluir sua inscrição!</S.h1F>
                    <Form />
                <Link to="/">
                    <S.buttonV onClick={limpeza}>Voltar</S.buttonV>
                </Link>
            </S.mainF>
            <Footer />
        </>
    );
}