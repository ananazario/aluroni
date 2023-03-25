import styles from "./Item.module.scss";
import { Prato } from "../../../../types/Prato";
import TagsPrato from "../../../../components/TagsPrato/TagsPrato";

const Item = (props : Prato) => {

    const {photo, titulo, descricao} = props;

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
                <TagsPrato {...props} />
            </div>
        </div>
    )
}

export default Item
