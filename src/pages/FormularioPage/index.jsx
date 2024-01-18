import React, { useState } from 'react';
import Card from '../../componentes/Card';
import Formulario from '../../componentes/Formulario';

const FormularioPage = () => {
     // criar um estado para receber o card
     const [referencias, setReferencias] = useState ([])

     // funcao para cadastrar o card
     const aoNovaReferenciaAdicionada = (referencia) => {
         setReferencias([...referencias, referencia])
     }

     return (
        <div>
            <Formulario aoReferenciaCadastrada={aoNovaReferenciaAdicionada} />
            <div className="cards-container">
                {referencias.map((referencia, index) => (
                    <Card key={index} referencia={referencia}/>
                ))}
            </div>
        </div>
     )


}
export default FormularioPage;