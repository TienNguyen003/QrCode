import classNames from 'classnames/bind';
import styles from './live.module.scss';

const cx = classNames.bind(styles);

function Live() {
    return <h1 className={cx('live')}>Live</h1>
}

export default Live;