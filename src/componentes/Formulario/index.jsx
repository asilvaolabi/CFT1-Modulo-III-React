import Botao from "../Botao"
import CampoTexto from "../CampoTexto"

const Formulario = (props) => {
  return(
    <section className="formulario">
      <form>
        <h2>Preencha com os dados mulher referência para criar um card</h2>
        <CampoTexto
            obrigatorio={true} 
            label='Nome' 
            placeholder='Digite seu nome'
            aoAlterarCampo={valor => setNome(valor)}
        />
        <CampoTexto 
            obrigatorio={true} 
            label='Cargo' 
            placeholder='Digite seu cargo'
            aoAlterarCampo={valor => setCargo(valor)}
        />
        <CampoTexto 
            obrigatorio={true} 
            label='Imagem' 
            placeholder='Digite o endereço da sua imagem'
            aoAlterarCampo={valor => setImagem(valor)}    
        />
        <Botao>Cadastrar</Botao>
      </form>
    </section> 
  )
}
export default Formulario