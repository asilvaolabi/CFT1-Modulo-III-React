import { BrowserRouter } from 'react-router-dom';
import './Banner.Module.css';
import Menu from './Menu';

const Banner = () => {
    return(
        <div>  
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
            
            <header className="banner">
                <img src="/imagens/banner.png" alt="O banner principal da minha aplicação"/>
            </header> 
        </div>
    )
}

export default Banner;