
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyCWFA1RjhAd72e73uiPtmFgMKyi5FJ0j2U",
  authDomain: "react-hannah.firebaseapp.com",
  projectId: "react-hannah",
  storageBucket: "react-hannah.appspot.com",
  messagingSenderId: "629974641699",
  appId: "1:629974641699:web:bcb02e666c75d80c34d596"
};


const app = initializeApp(firebaseConfig);

 
export const db = getFirestore(app)


