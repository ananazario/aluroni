import styles from "./Item.module.scss";
import itens from "../Itens.json";
import classNames from 'classnames';

type Props = typeof itens[0]

const Item = (props : Props) => {

    const {photo, titulo, descricao, categoria, servindo, tamanho, preco} = props;

  return (
    <div className={styles.item}>
        <div className={styles.item__imagem}>
            <img src={photo} alt={titulo} />
        </div>
        <div className={styles.item__descricao}>
            <div className={styles.item__titulo}>
                <h2> {titulo} </h2>
                <p> {descricao} </p>
            </div>
            <div className={styles.item__tags}>
                <div className={classNames({
                    [styles.item__tipo] : true,
                    [styles[`item__tipo__${categoria.label.toLowerCase()}`]]: true
                })}> 
                    {categoria.label}
                </div>
            <div className={styles.item__porcao}>{tamanho}g</div>
            <div className={styles.item__qtdpessoas}>Serve {servindo} pessoa{servindo === 1 ? "" : "s"}</div>
            <div className={styles.item__valor}>R$ {preco.toFixed(2)}</div>
            </div>
        </div>
    </div>
  )
}

export default Item
