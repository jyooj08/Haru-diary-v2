import React from 'react';
import Header from '../header/header';
import styles from './login.module.css';

const Login = (props) => {
    return (<div className={styles.container}>
        <Header />
        <button className={styles.loginBtn}>Google Login</button>
    </div>)
}

export default Login;