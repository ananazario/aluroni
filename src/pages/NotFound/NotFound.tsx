import styles from './NotFound.module.scss';
import classNames from 'classnames';
import stylesTema from '../../styles/Tema.module.scss';
import { ReactComponent as NotFoundImage} from '../../assets/not_found.svg';

const NotFound = () => {
    return (
        <div className={classNames({
            [styles.container]: true,
            [stylesTema.container]: true,
        })}>
            <NotFoundImage />
        </div>
    )
}

export default NotFound