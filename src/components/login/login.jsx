import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
    const navi = useNavigate();
    
    const onLogin = () => {
        authService.login()
        .then(result => {
            const user = result.user;
            console.log(user.displayName, user.uid);
            navi('/main');
        })
    }

    return (<div className={styles.container}>
        <Header />
        <button className={styles.loginBtn} onClick={onLogin}>Google Login</button>
    </div>)
}

export default Login;