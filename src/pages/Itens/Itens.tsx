import Item from './Item/Item';
import cardapio from './Itens.json';
import styles from './Itens.module.scss'

const Itens = () => {
  return (
    <div className={styles.itens}>
      {cardapio.map((item) => (
        <Item 
            key={item.id} 
            {...item}
        />
      ))}
    </div>
  )
}

export default Itens
