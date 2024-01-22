import Banner from "./componentes/Banner"
import { Route, Routes } from "react-router-dom"
import SobrePage from "./pages/SobrePage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import FormularioPage from "./pages/FormularioPage"

function App() {
    
    return (
            <div>
                <Banner />
                <Routes>
                    <Route path="/" element={<HomePage /> }/>
                    <Route path="/formulario" element={<FormularioPage/>} />
                    <Route path="/sobre" element={<SobrePage />}/>
                    <Route path="/*" element={<ErrorPage />}/>
                </Routes>
            </div>
    
    )
}

export default App
