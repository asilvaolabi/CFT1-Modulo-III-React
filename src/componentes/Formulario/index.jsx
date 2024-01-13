import React, { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import SelectPokemon from "../SelectPokemon";
import CampoCep from "../CampoCep";

const Formulario = ({ aoReferenciaCadastrada }) => {
    const areas = [
        'Gestão de Projetos',
        'UX e Design',
        'Desenvolvimento',
        'DevOps',
        'Data Science',
        'Mobile',
        'Inovação e Gestão',
        'Segurança da Informação',
        'Cloud Computing',
        'Redes e Infraestrutura'
    ];

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [pokemonEscolhido, setPokemonEscolhido] = useState(''); // Estado para armazenar o Pokémon escolhido
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        const novoCard = {
            nome,
            cargo,
            imagem,
            time, 
            pokemonEscolhido, // Incluindo o Pokémon escolhido nos dados do card
            cep,
            endereco
        };
        aoReferenciaCadastrada(novoCard);
        console.log(novoCard);
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h3>Preencha com os dados com a sua tech referência para criar um card:</h3>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterarCampo={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterarCampo={valor => setCargo(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    label='Imagem'
                    placeholder='Insira a URL da imagem'
                    valor={imagem}
                    aoAlterarCampo={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    label='Sua referência trabalha com:'
                    itens={areas}
                    valor={time}
                    aoAlterarCampo={valor => setTime(valor)}
                />
                {/* Incluindo o componente SelectPokemon no formulário */}
                <SelectPokemon
                    label='Escolha um Pokemon:'
                    aoSelecionarPokemon={setPokemonEscolhido} 
                /> 

                <CampoCep
                    obrigatorio={true}
                    label='CEP'
                    labelEndereco='Endereco'
                    placeholder='Digite seu CEP'
                    aoAlterarCampo={setCep} // Agora, aoAlterarCampo recebe o setCep diretamente
                    aoPreencherEndereco={setEndereco} // Nova prop para preencher o endereço automaticamente
                />

                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;
