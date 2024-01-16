import './Banner.css';
import Menu from './Menu';

// criando meu componente sempre com letra maiúscula
const Banner = () => {
    return(
        <div>  
            <Menu />
            <header className="banner">
                <img src="/imagens/banner.png" alt="O banner principal da minha aplicação"/>
            </header> 
        </div>
    )
}

export default Banner;