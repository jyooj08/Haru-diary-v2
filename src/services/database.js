import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref, remove, set } from "firebase/database";
import store from "./store";

class Database {
  constructor() {
    this.firebaseConfig = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DB_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
    };

    this.app = initializeApp(this.firebaseConfig);
    this.db = getDatabase(this.app);
  }

  async getDiary() {
    const date = store.getState().diary_date;
    const uid = store.getState().user.uid;
    const snapshot = await get(
      ref(this.db, `${uid}/${date.y}-${date.m}-${date.d}`)
    );
    if (snapshot.exists()) {
      return snapshot.val();
    } else return null;
  }

  async getDiaryInMonth() {
    const date = store.getState().diary_date;
    const uid = store.getState().user.uid;
    const snapshot = await get(ref(this.db, uid));
    if (snapshot.exists()) return snapshot.val();
    else return null;
  }

  setDiary(title, content) {
    const date = store.getState().diary_date;
    const uid = store.getState().user.uid;
    return set(ref(this.db, `${uid}/${date.y}-${date.m}-${date.d}`), {
      title: title,
      content: content,
    });
  }

  deleteDiary() {
    const date = store.getState().diary_date;
    const uid = store.getState().user.uid;
    return remove(ref(this.db, `${uid}/${date.y}-${date.m}-${date.d}`));
  }
}

export default Database;
