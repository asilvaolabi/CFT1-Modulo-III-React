import './Banner.Module.css';
import Menu from './Menu';

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