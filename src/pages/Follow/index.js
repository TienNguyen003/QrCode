import classNames from 'classnames/bind';
import styles from './follow.module.scss';

const cx = classNames.bind(styles);

function Follow() {
    return <h1 className={cx('follow')}>Follow</h1>;
}

export default Follow;