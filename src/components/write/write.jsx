import React, { useEffect, useRef } from 'react';
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
            navi('/main');
        })
    }

    const onDeleteClick = () => {
        db.deleteDiary()
        .then(() => {
            navi('/main');
        })
    }

    /*useEffect(() => {
        return ((event) => {
            console.log(event);
            if(!window.confirm('unmounted?')){
                window.history.forward();
            }
        })
    })*/

    return (<div className={styles.window}>
        <Header />
        <div className={styles.write}>
            <input ref={titleRef} className={styles.title} type="text" placeholder='제목' />
            <textarea ref={contentRef} className={styles.content}></textarea>
            <div className={styles.buttons}>
                <button className='haruBtn' onClick={onSubmitClick}>저장하기</button>
                <button className='haruBtn' onClick={onDeleteClick}>삭제하기</button>
            </div>
        </div>
    </div>)
}

export default Write;