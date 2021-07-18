import React from 'react';
import * as S from './styled'

export default function Form() {
    return(
        <S.formF>
            <S.labelF>Nome</S.labelF>
            <S.inputF placeholder='Nome completo' type='text'/>
            <S.labelF>Telefone</S.labelF>
            <S.inputF placeholder='Inserir sem DDD' type='tel'/>
            <S.labelF>E-mail</S.labelF>
            <S.inputF placeholder='E-mail aqui' type='email'/>
            <S.buttonF>Enviar</S.buttonF>
        </S.formF>
    );
}