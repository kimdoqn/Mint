import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx('header')}>
      <div className={cx('header-content')}>
        <div className={cx('right')}>
          Header
        </div>
      </div>
    </div>
  );
}

export default Header;