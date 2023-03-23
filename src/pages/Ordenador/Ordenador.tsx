import React, { useState } from 'react';
import styles from './Ordenador.module.scss';
import opcoes from './Opcoes-ordenador.json';

const Ordenador = () => {

    const [aberto, setAberto] = useState(false);

    return (
        <div>
        <button className={styles.ordenador} onClick={() => setAberto(!aberto)}>
            <span>Ordenar por</span>
            <div className={styles.ordenador__options}>
                {opcoes.map((opcao) => (
                    <div className={styles.ordenador__option} key={opcao.value}>
                        <h1>{opcao.nome}</h1>
                        <h1>{opcao.value}</h1>
                    </div>
                ))}
            </div>
        </button>
        </div>
    )
}

export default Ordenador
