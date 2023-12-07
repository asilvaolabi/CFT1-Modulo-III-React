import './CampoTexto.css';

const CampoTexto = (props) => {

    // Aqui criamos a const que está escutando o usuário digitar no campo
    const aoDigitarNoCampo = (evento) => {
        props.aoAlterarCampo(evento.target.value)      
    }

    // Aqui estamos criando uma props que permite que escrevamos a placeholder no campo texto
    const placeholderModificada = `${props.placeholder}...`;

    return(
        <div className="campo-texto">
            {/* hard coded, tá marretada a label 
            <label>Nome</label> */}

            {/* Aqui nós melhoramos a label, com as props */}
            <label>{props.label}</label> 
            {/* Aqui nós melhoramos a label, com as props */}
            <input onChange={aoDigitarNoCampo} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto;
