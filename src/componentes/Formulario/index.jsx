import { useState } from "react";
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css';

const Formulario = (props) => {

  const comidas = [
    'Hamburguer',
    'Batata',
    'Chocolate',
    'Cerveja',
    'Lasanha',
    'Doce de Leite', 
    'Agua de coco'
  ]  

  const [comida, setComida] = useState('');
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log('Foi feito o salvar', nome, cargo, imagem, comida)
  }

  return(
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha com os dados mulher referência para criar um card</h2>
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
            placeholder='Digite o endereço da sua imagem'
            valor={imagem}
            aoAlterarCampo={valor => setImagem(valor)}    
        />

        <ListaSuspensa
          label = 'Comidas'
          itens={comidas}
          valor={comida}
          aoAlterarCampo={valor => setComida(valor) }
        />
        <Botao>Cadastrar</Botao>
      </form>
    </section> 
  )
}
export default Formulario