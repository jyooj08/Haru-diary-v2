import React, { useEffect, useState } from "react";
import style from "./main.module.css";
import styles from "../calendar/calendar.module.css";
import store from "../../services/store";
import Header from "../header/header";
import Calendar from "../calendar/calendar";
import Diary from "../diary/diary";
import { useNavigate } from "react-router-dom";
import Database from "../../services/database";
import { calRef } from "../calendar/calendar";

const Main = (props) => {
  let user = store.getState().user;
  const navi = useNavigate();
  let [loading, setloading] = useState(false);
  const db = new Database();

  const setLoading = (val) => {
    setloading(val);
  };

  const setCalendarMark = () => {
    db.getDiaryInMonth().then((result) => {
      let date = store.getState().date;
      let diary_date = store.getState().diary_date;
      result = Object.keys(result).filter((item) =>
        item.startsWith(`${date.y}-${date.m}`)
      );
      for (let week of calRef.current.children) {
        for (let d of week.children) {
          if (
            `${diary_date.y}-${diary_date.m}-${diary_date.d}` ==
            `${date.y}-${date.m}-${d.innerText}`
          ) {
            d.classList.add(styles.selected);
          } else d.classList.remove(styles.selected);

          if (result.includes(`${date.y}-${date.m}-${d.innerText}`)) {
            d.classList.add(styles.hasDiary);
          } else d.classList.remove(styles.hasDiary);
        }
      }
    });
    console.log("setcalendar");
  };

  useEffect(() => {
    if (!user) navi("/");
  }, []);

  return (
    <>
      <Header />
      <section className={style.main}>
        <Calendar
          loading={loading}
          setCalendarMark={setCalendarMark}
          setLoading={setLoading}
        />
        <Diary
          loading={loading}
          setCalendarMark={setCalendarMark}
          setLoading={setLoading}
        />
      </section>
    </>
  );
};

export default Main;
