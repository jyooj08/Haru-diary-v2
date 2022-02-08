import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

class AuthService{
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
        this.googleProvider = new GoogleAuthProvider();
        this.auth = getAuth();
    }

    login(){
        return signInWithPopup(this.auth, this.googleProvider);
    }

    autoLogin(moveToMain){
        onAuthStateChanged(this.auth, user => {
            if(user){
                moveToMain(user.displayName, user.uid);
            }
        });
    }

    logout(){
        return signOut(this.auth);
    }

    getUser(){
        return this.auth.currentUser;
    }
}

export default AuthService;