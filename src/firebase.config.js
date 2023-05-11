import { getApp ,getApps ,initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig ={
  apiKey: "AIzaSyCQ7P7BPswQapTm77P4yswI2f559cJKEIQ",
  authDomain: "foodapp-5d6c2.firebaseapp.com",
  databaseURL: "https://foodapp-5d6c2-default-rtdb.firebaseio.com",
  projectId: "foodapp-5d6c2",
  storageBucket: "foodapp-5d6c2.appspot.com",
  messagingSenderId: "1077017360186",
  appId: "1:1077017360186:web:cc74d937a25250d8698203",
  measurementId: "G-ZH5BETSWEP"

};

const app=getApp.length>0?getApp():initializeApp(firebaseConfig);
const firestore=getFirestore(app);
const storage =getStorage(app);

export { app , firestore ,storage};