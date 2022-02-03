import React from 'react';
import styles from './calendar.module.css';

const Calendar = (props) => {
    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d  = date.getDate();

    let day = new Date(y, m-1, 1).getDay();
    const lastDate = new Date(y, m, 0).getDate();
    console.log(day, lastDate);

    let cal = [[]], w = 0;
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

    return (<div className={styles.calendar}>
        <h1>Calendar</h1>
        <h3>{y}년 {m}월</h3>
        <div className={styles.month}>
            {cal.map(week => {
                return <div className={styles.week}>
                    {
                        week.map(d => {
                            if(d>0) return <span className={styles.date}>{d}</span>;
                            else return <span className={styles.date}></span>
                        })

                    }
                </div>;
            })}
        </div>
    </div>);
}

export default Calendar;