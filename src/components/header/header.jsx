import React from 'react';
import styles from './header.module.css';
import store from '../../services/store';
import { useNavigate } from 'react-router-dom';

const Header = ({login}) => {
    let user = store.getState().user;
    const navi = useNavigate();

    const onLogout = () => {
        store.dispatch({
            type: 'LOGOUT',
        });
        navi('/');
    }

    return (<>
        <div className={styles.container}>
            <img className={styles.logo} src="/image/logo.png" alt="" />
            <h1 className={styles.title}>하루일기</h1>
        </div>
        { 
            user && !login && <div className={styles.userInfo}>
                <span className={styles.userName}>{user && user.name}님</span>
                <button className='haruBtn' onClick={onLogout}>Log Out</button>
            </div>
        }
    </>);
    }

export default Header;