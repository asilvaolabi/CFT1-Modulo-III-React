import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterarCampo(evento.target.value)} required={props.required}>
                <option value="">Selecione...</option>
                {
                    props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}

export default ListaSuspensa;