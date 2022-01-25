import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
        <div className={styles.container}>
            <img className={styles.logo} src="/image/logo.png" alt="" />
            <h1 className={styles.title}>하루일기</h1>
        </div>
    );

export default Header;