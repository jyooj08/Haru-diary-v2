import React, { useState } from 'react';
import styles from './diary.module.css';
import store from '../../services/store';
import { useNavigate } from 'react-router-dom';

const Diary = (props) => {
    const [date, setDate] = useState(store.getState().diary_date);
    const [diary, setDiary] = useState(store.getState().diary);
    const navi = useNavigate();

    store.subscribe(() => {
        setDate({...store.getState().diary_date});
        setDiary(store.getState().diary);
    })

    const goToWrite = () => {
        navi('/write');
    }

    return (<div className={styles.diary}>
        {
            diary && <div className={styles.content}>
                <h1 className={styles.title}>{diary.title} {date.y}-{date.m}-{date.d}</h1>
                <span className={styles.content}>{diary.content}</span>
            </div>
        }
        {
            !diary && <div className={styles.noContent}>
                <span>작성된 일기가 없습니다.</span>
                <button className={styles.goToWrite} onClick={goToWrite}>일기 작성하기</button>
            </div>
        }
    </div>)
}

export default Diary;