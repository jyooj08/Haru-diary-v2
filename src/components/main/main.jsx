import React, { useEffect } from 'react';
import styles from './main.module.css';
import store from '../../services/store';
import Header from '../header/header';
import Calendar from '../calendar/calendar';
import Diary from '../diary/diary';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const Main = (props) => {
    const authService = store.getState().auth;
    let user = store.getState().user;
    const navi = useNavigate();

    useEffect(()=>{
        if(!user) navi('/');
    }, [])

    return (<>
        <Header />
        <section className={styles.main}>
            <Calendar />
            <Diary />
        </section>
    </>);
};

export default Main;