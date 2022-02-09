// import React, { useState } from 'react';
import styles from './calendar.module.css';
import store from '../../services/store';
import React, { useRef, useState } from 'react';
import Database from '../../services/database';

const Calendar = (props) => {
    let [date, setDate] = useState(store.getState().date);
    let lastDate = new Date(date.y, date.m, 0).getDate();
    let day = new Date(date.y, date.m-1, 1).getDay();
    let cal = [[]], w = 0;
    const db = new Database();
    
    for(let i=0;i<day;i++) cal[0].push(0);
    for(let i=1;i<=lastDate;i++){
        if(day == 7){
            day = 0;
            w++;
            cal.push([]);
        }
        cal[w].push(i);
        day++;
    }
    for(let i=day;i<7;i++) cal[w].push(0);

    const calRef = useRef();
    
    const moveNext = () => {  
        store.dispatch({
            type:'MOVE_NEXT_MONTH'
        })
        setDate({...store.getState().date});
    }

    const movePast = () => {
        store.dispatch({
            type:'MOVE_PAST_MONTH'
        })
        setDate({...store.getState().date});
    }

    // store.subscribe(() => {
    //     setDate({...store.getState().date});
    // })

    const setLoading = (val) => {
        props.setLoading(val);
    }

    const onCalendarClick = (event) => {
        if(event.target.className.includes('date')){
            let d = Number(event.target.innerText);
            let y = store.getState().date.y;
            let m = store.getState().date.m;
            console.log('select',y,m,d);
            setLoading(true);
            store.dispatch({
                type: 'SELECT_DIARY_DATE',
                data: { y, m, d }
            })
            db.getDiary()
            .then(val => {
                store.dispatch({
                    type: 'SET_DIARY',
                    data: val
                });
                setDate({...store.getState().date});
                setLoading(false);
            })
        }
    }

    return (<div className={styles.calendar}>
        <div className={styles.yearmonth}>
            <button className={styles.toPast} onClick={movePast}><i className="fas fa-caret-square-left"></i></button>
            <h3>{date.y}년 {date.m}월</h3>
            <button className={styles.toNext} onClick={moveNext} ><i className="fas fa-caret-square-right"></i></button>
        </div>
        <div className={styles.month}>
        <div className={styles.day}>
            <span>일</span>
            <span>월</span>
            <span>화</span>
            <span>수</span>
            <span>목</span>
            <span>금</span>
            <span>토</span>
        </div>
        <div ref={calRef} onClick={onCalendarClick}>
            {cal.map((week, idx) => {
                return <div key={week.length*idx} className={styles.week}>
                    {
                        week.map((d, idx) => {
                            if(d>0) return <span key={date.d*idx} className={styles.date}>{d}</span>;
                            else return <span key={idx*date.y} className={styles.blank}></span>
                        })

                    }
                </div>;
            })}
        </div>
        </div>
    </div>);
}

export default Calendar;
