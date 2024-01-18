import React from 'react';
import { Link } from 'react-router-dom';
import Botao from '../../componentes/Botao';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.containerBotao}>
            <Link to="/formulario"> <Botao>Ir para o Formulário</Botao></Link>
        </div>
    );
}

export default HomePage;