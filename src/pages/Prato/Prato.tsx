import styles from './Prato.module.scss';
import cardapio from '../../data/lista-cardapio.json';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

const Prato = () => {
    
  const { state } = useLocation();
  const { prato } = state as { prato: typeof cardapio[0]};

    return (
      <>
        <button className={styles.voltar}>
          {'< Voltar'}
        </button>

        <section className={styles.container}>
          <h1 className={styles.titulo}>
            {prato.titulo}
          </h1>
          <div className={styles.imagem}>
            <img src={prato.photo} alt={prato.titulo} />
          </div>
          <div className={styles.conteudo}>
            <p className={styles.conteudo__descricao}>
              {prato.descricao}
            </p>
            <div className={styles.tags}>
              <div className={classNames({
                [styles.tags__tipo] : true,
                [styles[`tags__tipo__${prato.categoria.label.toLowerCase()}`]] : true
              })}>
                {prato.categoria.label}
              </div>
              <div className={styles.tags__porcao}>
                {prato.tamanho}g
              </div>
              <div className={styles.tags__qtdpessoas}>
                Serve {prato.servindo} pessoa{prato.servindo === 1 ? '' : 's'}
              </div>
              <div className={styles.tags__valor}>
                R$ {prato.preco.toFixed(2)}
              </div>
            </div>
          </div>
        </section>
      </>
    )
}

export default Prato
