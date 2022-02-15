import React, { useRef } from 'react';
import Header from '../header/header';
import styles from './write.module.css';
import Database from '../../services/database';
import { useNavigate } from 'react-router-dom';

const Write = (props) => {
    const titleRef = useRef();
    const contentRef = useRef();
    const db = new Database();
    const navi = useNavigate();

    const onSubmitClick = () => {
        console.log(titleRef.current.value);
        console.log(contentRef.current.value);
        db.setDiary(titleRef.current.value, contentRef.current.value)
        .then(() => {
            console.log('set diary finish');
            navi('/main');
        })
    }
    return (<div className={styles.window}>
        <Header />
        <div className={styles.write}>
            <input ref={titleRef} className={styles.title} type="text" placeholder='제목' />
            <textarea ref={contentRef} className={styles.content}></textarea>
            <button className={styles.saveBtn} onClick={onSubmitClick}>저장하기</button>
        </div>
    </div>)
}

export default Write;