import React from 'react';
import './Card.css';

const Card = ({referencia}) => {
    return (
        <div className='card'>
            <img src={referencia.imagem} alt="Imagem do Card" />
            <p>Nome: {referencia.nome}</p>
            <p>Cargo: {referencia.cargo} </p>
            <p>Time: {referencia.time} </p>
            <p>Endereço: {referencia.endereco} </p>
            {referencia.pokemonEscolhido && (
                <div className='pokemon-container'>
                    <p>Pokemon Escolhido: </p>
                    <img src={referencia.pokemonEscolhido} alt='Pokemon'/>
                </div>
            )}
            
        </div>
    )
}

export default Card;