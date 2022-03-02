import React, { useEffect, useState } from "react";
import styles from "./diary.module.css";
import store from "../../services/store";
import { useNavigate } from "react-router-dom";
import Database from "../../services/database";

const Diary = (props) => {
  const [date, setDate] = useState(store.getState().diary_date);
  const [diary, setDiary] = useState(store.getState().diary);
  const navi = useNavigate();
  const db = new Database();

  store.subscribe(() => {
    setDate({ ...store.getState().diary_date });
    setDiary(store.getState().diary);
  });

  const goToWrite = () => {
    navi("/write");
  };

  const onDeleteClick = () => {
    props.setLoading(true);
    db.deleteDiary().then(() => {
      store.dispatch({
        type: "SET_DIARY",
        data: null,
      });
      props.setCalendarMark();
      props.setLoading(false);
    });
  };

  const onUpdateClick = () => {
    navi("/write");
  };

  useEffect(() => {
    props.setLoading(true);
    store.getState().user &&
      db.getDiary().then((val) => {
        store.dispatch({
          type: "SET_DIARY",
          data: val,
        });
        props.setLoading(false);
      });
  }, []);

  return (
    <div className={styles.diary}>
      <h3>
        {date.y}년 {date.m}월 {date.d}일
      </h3>
      {props.loading && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
        </div>
      )}
      {!props.loading && diary && (
        <div className={styles.content}>
          <button onClick={onDeleteClick} className={`haruBtn ${styles.btn}`}>
            삭제
          </button>
          <button onClick={onUpdateClick} className={`haruBtn ${styles.btn}`}>
            수정
          </button>
          <h2 className={styles.title}>{diary.title}</h2>
          <pre className={styles.content}>{diary.content}</pre>
        </div>
      )}
      {!props.loading && !diary && (
        <div className={styles.noContent}>
          <span>작성된 일기가 없습니다.</span>
          <button className={styles.goToWrite} onClick={goToWrite}>
            일기 작성하기
          </button>
        </div>
      )}
    </div>
  );
};

export default Diary;
