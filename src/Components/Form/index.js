import React, { useState } from 'react';
import * as S from './styled'

export default function Form() {
    const emailString = localStorage.getItem('email');
    const value = emailString != null;

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState(value? emailString : '');

    function handleEnvio(e) {
        e.preventDefault();
        const dados = JSON.stringify({nome, telefone, email});
        localStorage.setItem('DadosCliente', dados);
    }

    return(
        <S.formF>
            <S.labelF>Nome</S.labelF>
            <S.inputF placeholder='Nome completo' type='text' onChange={e => setNome(e.target.value)} value={nome}/>
            <S.labelF>Telefone</S.labelF>
            <S.inputF placeholder='Inserir sem DDD' type='tel' onChange={e => setTelefone(e.target.value)} value={telefone}/>
            <S.labelF>E-mail</S.labelF>
            <S.inputF placeholder='E-mail aqui' type='email' onChange={e => setEmail(e.target.value)} value={email}/>
            <S.buttonF id='que' onClick={handleEnvio}>Enviar</S.buttonF>
        </S.formF>
    );
}