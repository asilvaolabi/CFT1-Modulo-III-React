import { useState } from "react"
import Banner from "./componentes/Banner"
import Formulario from "./componentes/Formulario"
import Card from "./componentes/Card"
import { Route, Routes } from "react-router-dom"
import SobrePage from "./pages/SobrePage"
import ErrorPage from "./pages/ErrorPage"

function App() {
    // criar um estado para receber o card
    const [referencias, setReferencias] = useState ([])

    // funcao para cadastrar o card
    const aoNovaReferenciaAdicionada = (referencia) => {
        setReferencias([...referencias, referencia])
    }
    
    return (
            <div>
                <Banner />
                <Formulario aoReferenciaCadastrada={aoNovaReferenciaAdicionada} />
                <div className="cards-container">
                    {referencias.map((referencia, index) => (
                        <Card key={index} referencia={referencia}/>
                    ))}
                </div>

                <Routes>
                    <Route path="/sobre" element={<SobrePage />}/>
                    <Route path="/*" element={<ErrorPage />}/>
                </Routes>
            </div>
    
    )
}

export default App
