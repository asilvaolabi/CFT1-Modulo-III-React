const Card = ({referencia}) => {
    return (
        <div className='card'>
            <img src={referencia.imagem} alt="Imagem do Card" />
            <p>Nome: {referencia.nome}</p>
            <p>Cargo: {referencia.cargo} </p>
            <p>Time: {referencia.time} </p>
        </div>
    )
}

export default Card;