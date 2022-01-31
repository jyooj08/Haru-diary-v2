import React from 'react';
import styles from './diary.module.css';

const Diary = (props) => {
    return (<div className={styles.diary}>
        <h1 className={styles.title}>Title</h1>
        <span className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus modi, libero explicabo, facere culpa repudiandae aut earum eius cum voluptas numquam possimus et, sint nihil id veniam. Molestias, blanditiis.</span>
    </div>)
}

export default Diary;