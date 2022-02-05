import React from 'react';
import Header from '../header/header';
import styles from './write.module.css';

const Write = (props) => {
    return (<div className={styles.window}>
        <Header />
        <div className={styles.write}>
            <input className={styles.title} type="text" placeholder='제목' />
            <textarea className={styles.content}></textarea>
            <button className={styles.saveBtn}>저장하기</button>
        </div>
    </div>)
}

export default Write;