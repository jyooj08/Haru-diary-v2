import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

class AuthService{
    constructor(){
        this.firebaseConfig = {
            apiKey: "AIzaSyCDNu1QRNk27AhmH4E6-S-afBfyxWFh9_g",
            authDomain: "haru-diary-bda69.firebaseapp.com",
            projectId: "haru-diary-bda69",
            storageBucket: "haru-diary-bda69.appspot.com",
            messagingSenderId: "93188198611",
            appId: "1:93188198611:web:23c0128d6ff394b593c426"
          };

          this.app = initializeApp(this.firebaseConfig);
          this.googleProvider = new GoogleAuthProvider();
          this.auth = getAuth();
    }

    print(){
        console.log('hello authservice!');
    }

    login(){
        return signInWithPopup(this.auth, this.googleProvider);
    }

    logout(){
        return signOut(this.auth);
    }
}

export default AuthService;