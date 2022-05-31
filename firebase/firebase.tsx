import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";


const firebaseConfig = {

  apiKey: "AIzaSyAFQK4K7WEjf7pSQDjDgDRDPLhI6qK_Bso",

  authDomain: "app-cham.firebaseapp.com",

  databaseURL: "https://app-cham-default-rtdb.firebaseio.com",

  projectId: "app-cham",

  storageBucket: "app-cham.appspot.com",

  messagingSenderId: "140948675348",

  appId: "1:140948675348:web:8de936cad4d20045c64001"

};

const initFire = initializeApp(firebaseConfig);
export const db = getDatabase(initFire);