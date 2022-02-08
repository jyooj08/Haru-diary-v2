import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref } from "firebase/database";
import store from './store';

class Database {
    constructor(){
        this.firebaseConfig = {
            apiKey: process.env.REACT_APP_API_KEY,
            authDomain: process.env.REACT_APP_AUTH_DOMAIN,
            databaseURL: process.env.REACT_APP_DB_URL,
            projectId: process.env.REACT_APP_PROJECT_ID,
            storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
            appId: process.env.REACT_APP_APP_ID
          };

          this.app = initializeApp(this.firebaseConfig);
          this.db = getDatabase(this.app);
          this.dbref = ref(this.db);
    }

    getDiary() {
        const date = store.getState().diary_date;
        const uid = store.getState().user.uid;
        return get(child(this.dbref, `${uid}/${date.y}-${date.m}-${date.d}`)).then(snapshot => {
            if(snapshot.exists()){
                return snapshot.val();
            }else return null;
        })
    }
}

export default Database;