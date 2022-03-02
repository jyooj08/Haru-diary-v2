import React, { useEffect, useRef, useState } from "react";
import Header from "../header/header";
import styles from "./write.module.css";
import Database from "../../services/database";
import { useNavigate } from "react-router-dom";

const Write = (props) => {
  let submit = false;
  const titleRef = useRef();
  const contentRef = useRef();
  const db = new Database();
  const navi = useNavigate();

  const onSubmitClick = () => {
    if (titleRef.current.value === "") {
      alert("Error: 제목을 입력해 주세요.");
      return;
    }
    if (contentRef.current.value === "") {
      alert("Error: 내용을 입력해 주세요.");
      return;
    }
    db.setDiary(titleRef.current.value, contentRef.current.value).then(() => {
      submit = true;
      navi("/main");
    });
  };

  const onDeleteClick = () => {
    db.deleteDiary().then(() => {
      navi("/main");
    });
  };

  useEffect(() => {
    db.getDiary().then((val) => {
      if (val) {
        titleRef.current.value = val.title;
        contentRef.current.value = val.content;
      }
    });
  });

  return (
    <div className={styles.window}>
      <Header />
      <div className={styles.write}>
        <input
          ref={titleRef}
          className={styles.title}
          type="text"
          placeholder="제목"
        />
        <textarea ref={contentRef} className={styles.content}></textarea>
        <div className={styles.buttons}>
          <button className="haruBtn" onClick={onSubmitClick}>
            저장하기
          </button>
          <button className="haruBtn" onClick={onDeleteClick}>
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Write;
