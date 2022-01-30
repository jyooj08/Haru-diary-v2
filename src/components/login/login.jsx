import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import styles from './login.module.css';
import store from '../../services/store';

const Login = ({authService}) => {
    const navi = useNavigate();

    const moveToMain = (userName, userId) => {
        store.dispatch({
            type: 'LOGIN',
            data: {
                name: userName,
                uid: userId
            }
        });
        navi('/main');
    }
    
    const onLogin = () => {
        authService.login()
        .then(result => {
            moveToMain(result.user.displayName, result.user.uid);
        })
    }

    authService.autoLogin(moveToMain);

    return (<div className={styles.container}>
        <Header />
        <button className={styles.loginBtn} onClick={onLogin}>Google Login</button>
    </div>)
}

export default Login;