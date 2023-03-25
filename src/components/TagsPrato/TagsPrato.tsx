import classNames from 'classnames';
import styles from './TagsPrato.module.scss';
import { Prato } from '../../types/Prato';

const TagsPrato = ({ categoria, tamanho, servindo, preco} : Prato ) => {
  return (
    <div className={styles.tags}>
        <div className={classNames({
            [styles.tipo]: true,
            [styles[`tipo__${categoria.label.toLowerCase()}`]]: true
        })}>{categoria.label}</div>
        <div className={styles.porcao}>{tamanho}g</div>
        <div className={styles.qtdpessoas}>{servindo} 2 pessoas{servindo === 1 ? '' : 's'}</div>
        <div className={styles.valor}>R$ {preco.toFixed(2)}</div>
    </div>
  )
}

export default TagsPrato
