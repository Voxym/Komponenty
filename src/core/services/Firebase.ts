import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDl1u6RnXGg3OLuv-xs8xhE4HvhwbMXe0E",
    authDomain: "aiook-4ddd5.firebaseapp.com",
    projectId: "aiook-4ddd5",
    storageBucket: "aiook-4ddd5.appspot.com",
    messagingSenderId: "842425932207",
    appId: "1:842425932207:web:d21c2dd12cb3e5c93db75a"
  };



class FirebaseService {
 db: any = null;

 constructor() {
    initializeApp(firebaseConfig)
    this.db  = getFirestore()
 }
}


export default new FirebaseService()