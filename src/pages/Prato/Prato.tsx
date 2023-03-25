import styles from './Prato.module.scss';
import cardapio from '../../data/lista-cardapio.json';
import { useNavigate, useParams } from 'react-router-dom';
import TagsPrato from '../../components/TagsPrato/TagsPrato';
import NotFound from '../NotFound/NotFound';

const Prato = () => {
    
  const navigate = useNavigate();
  const { id } = useParams();
  const prato = cardapio.find(item => item.id === Number(id))

  if (!prato) {
    return <NotFound  />;
  }

    return (
      <>
        <button 
          className={styles.voltar}
          onClick={() => navigate(-1)}
        >
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
            <TagsPrato {...prato} />
          </div>
        </section>
      </>
    )
}

export default Prato
