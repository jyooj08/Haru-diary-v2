import React from 'react';
import styles from './main.module.css';
import store from '../../services/store';
import Header from '../header/header';
import Calendar from '../calendar/calendar';
import Diary from '../diary/diary';


const Main = (props) => {
    const user = store.getState().user;

    if(user == null) throw new Error('No User Information');
    
    return (<>
        <Header />
        <div className={styles.userInfo}>
            <span className={styles.userName}>{user.name}님</span>
            <button className={styles.logout}>Log Out</button>
        </div>
        <section className={styles.main}>
            <Calendar />
            <Diary />
        </section>
    </>);
};

export default Main;