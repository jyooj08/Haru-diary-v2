import React, { useEffect, useState } from "react";
import styles from "./main.module.css";
import store from "../../services/store";
import Header from "../header/header";
import Calendar from "../calendar/calendar";
import Diary from "../diary/diary";
import { useNavigate } from "react-router-dom";

const Main = (props) => {
  let user = store.getState().user;
  const navi = useNavigate();
  let [loading, setloading] = useState(false);

  const setLoading = (val) => {
    setloading(val);
  };

  useEffect(() => {
    if (!user) navi("/");
  }, []);

  return (
    <>
      <Header />
      <section className={styles.main}>
        <Calendar loading={loading} setLoading={setLoading} />
        <Diary loading={loading} setLoading={setLoading} />
      </section>
    </>
  );
};

export default Main;
