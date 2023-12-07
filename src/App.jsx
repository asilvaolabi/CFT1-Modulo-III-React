import Banner from "./componentes/Banner"
import CampoTexto from "./componentes/CampoTexto"

function App() {

  return (
   <div>
      <Banner />
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
   </div>
  )
}

export default App
