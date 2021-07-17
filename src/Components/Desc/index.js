import React from 'react';
import iconPag from './img/Icone-financa.png';
import iconLim from './img/Icone-limpeza.png';
import iconNv from './img/Icone-nv.png';
import * as S from './styled'

export default function Desc() {
    return(
        <>
            <S.divDesc>
                <S.desc>
                    <S.divCirculo>
                        <img src={iconPag} alt='Icone de pagamento' />
                    </S.divCirculo>
                    <h2>Pagamento Seguro</h2>
                    <p>Com a nossa estrutura de servidores robusta você tem um pagamento <S.spanPreto>100% seguro.</S.spanPreto> A maioria das empresas já usam essa tecnologia.</p>
                </S.desc>
                <S.desc>
                    <S.divCirculo>
                        <img src={iconLim} alt='Icone de limpeza' />
                    </S.divCirculo>
                    <h2>Ambiente Esterilizado</h2>
                    <p>Nossa fábrica e laboratórios são livres do covid-19, todos os ambientes são limpos a cada 5 horas. Cada laboratório segue um rigoroso padrão de limpeza. <S.spanPreto>Supervisionado pela Marie Kondo.</S.spanPreto></p>
                </S.desc>
                <S.desc>
                    <S.divCirculo>
                        <img src={iconNv} alt='Icone de navegador' />
                    </S.divCirculo>
                    <h2>Pagamento Seguro</h2>
                    <p>Nosso site conta com um poderoso firewall para te proteger enquanto cadastra seus <S.spanPreto>cartões de crédito</S.spanPreto> para fazer compras de nossos testes.</p>
                </S.desc>
            </S.divDesc>
        </>
    );
}