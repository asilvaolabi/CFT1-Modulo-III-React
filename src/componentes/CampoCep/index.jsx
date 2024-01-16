// CampoCep.jsx

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './CampoCep.css';

const CampoCep = (props) => {
    // Criar os dois estados cep e endereco, começando vazios
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');

    // Criar o useEffect que consome a api do cep https://viacep.com.br/ws/${cep}/json
    useEffect(() => {
        const fetchEndereco = async () => {
            try {
                const response = await Axios.get(`https://viacep.com.br/ws/${cep}/json`)
                if(response.data && response.data.logradouro){
                    setEndereco(response.data.logradouro);
                    props.aoPreencherEndereco(response.data.logradouro);
                }
            } catch (error) {
                console.error('Erro ao buscar o endereço:', error);
            }
        };

        // Chama a função para buscar o endereço sempre que o CEP for alterado
        if (cep.length === 8) {
            fetchEndereco();
        }
    }, [cep]);

    const aoDigitarNoCampo = (evento) => {
        const valorDigitado = evento.target.value;
        setCep(valorDigitado);

        // Se a função aoAlterarCampo foi fornecida, chama-a com o valor digitado
        if (props.aoAlterarCampo) {
            props.aoAlterarCampo(valorDigitado);
        }
    };

    return (
        // Criar duas labels e dois inputs
        <div className='campo-input'>
            <label>{props.label}</label>
            <input
                onChange={aoDigitarNoCampo}
                required={props.obrigatorio}
                placeholder={props.placeholder}
                value={cep}
                maxLength={8}
            />

            {/* Adicionei um segundo label e input para o endereço */}
            <label>{props.labelEndereco}</label>
            <input
                value={endereco}
                readOnly={true}
            />

        </div>
    );
};

export default CampoCep;