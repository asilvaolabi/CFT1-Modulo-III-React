    import { useState } from "react";
    import Botao from "../Botao"
    import CampoTexto from "../CampoTexto"
    import ListaSuspensa from '../ListaSuspensa'
    import './Formulario.css';

    const Formulario = (props) => {

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
      ]  

      const [nome, setNome] = useState('');
      const [cargo, setCargo] = useState('');
      const [imagem, setImagem] = useState('');
      const [time, setTime] = useState('');
      const [cards, setCard] = useState([]);

      const aoSalvar = (evento) => {
        evento.preventDefault();
        const novoCard = {
          nome,
          cargo, 
          imagem,
          time
        }

        setCard([...cards, novoCard]);
      }

      return(
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
              label = 'Sua referência trabalha com:'
              itens={areas}
              valor={time}
              aoAlterarCampo={valor => setTime(valor) }
            />
            <Botao>Cadastrar</Botao>
          </form>

          <div className='cards-container'>
            {cards.map((card, index) => (
              <div className='card'>
                <img src={card.imagem} alt="Imagem do Card" />
                <p>Nome: {card.nome}</p>
                <p>Cargo: {card.cargo} </p>
                <p>Time: {card.time} </p>
              </div>
            ))}
          </div>
          
          
        </section> 
      )
    }
    export default Formulario