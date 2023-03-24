import cardapio from '../../data/lista-cardapio.json';
import styles from './Inicio.module.scss';

const Inicio = () => {

    let pratosRecomendados = [...cardapio]
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3)

    return (
        <section>
            <h3 className={styles.titulo}>
                Recomendações de cozinha
            </h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(item => (
                    <div key={item.id} className={styles.recomendado}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.titulo} />
                        </div>
                        <button className={styles.recomendado__botao}>
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Inicio
