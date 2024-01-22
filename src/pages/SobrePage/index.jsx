import React from 'react';
import styles from './SobrePage.module.css';

const SobrePage = () => {
    return (
        <div className={styles.SobrePage}>
            <main>
                <section>
                    <article className={`${styles.subcontainerPrincipal} ${styles.container}`}>
                        <div>
                            <img src="/imagens/foto-perfil.png" alt="Foto de Perfil" />
                        </div>
                        <div className={styles.informacoes}>
                            <h1 className={styles.nomeCompleto}>Amanda Silva</h1>
                            <h2 className={styles.profissao}>Desenvolvedora Front-End</h2>
                            <p>
                                Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. 
                                Paisis, filhis, espiritis santis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. 
                                Nam vulputate dapibus. Detraxit consequat et quo num tendi nada.
                            </p>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    )
};
export default SobrePage;