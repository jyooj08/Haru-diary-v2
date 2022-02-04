import React, { useState } from 'react';
import styles from './diary.module.css';
import store from '../../services/store';

const Diary = (props) => {
    const [date, setDate] = useState(store.getState().diary_date);

    store.subscribe(()=>{
        setDate({...store.getState().diary_date});
    })

    return (<div className={styles.diary}>
        <h1 className={styles.title}>Title {date.y}-{date.m}-{date.d}</h1>
        <span className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus modi, libero explicabo, facere culpa repudiandae aut earum eius cum voluptas numquam possimus et, sint nihil id veniam. Molestias, blanditiis.</span>
    </div>)
}

export default Diary;