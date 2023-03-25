import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';

const PaginaPadrao = ({ children }: { children?: React.ReactNode }) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <div>
                <Outlet />
                {children}
            </div>
        </>
    )
}

export default PaginaPadrao
