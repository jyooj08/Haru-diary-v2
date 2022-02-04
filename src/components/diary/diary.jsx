import React, { useState } from 'react';
import styles from './diary.module.css';
import store from '../../services/store';
import { useNavigate } from 'react-router-dom';

const Diary = (props) => {
    const [date, setDate] = useState(store.getState().diary_date);
    const content = null;
    const navi = useNavigate();

    store.subscribe(() => {
        setDate({...store.getState().diary_date});
    })

    const goToWrite = () => {
        navi('/write');
    }

    return (<div className={styles.diary}>
        {
            content && <div className={styles.content}>
                <h1 className={styles.title}>Title {date.y}-{date.m}-{date.d}</h1>
                <span className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus modi, libero explicabo, facere culpa repudiandae aut earum eius cum voluptas numquam possimus et, sint nihil id veniam. Molestias, blanditiis.</span>
            </div>
        }
        {
            !content && <div className={styles.noContent}>
                <span>작성된 일기가 없습니다.</span>
                <button className={styles.goToWrite} onClick={goToWrite}>일기 작성하기</button>
            </div>
        }
    </div>)
}

export default Diary;