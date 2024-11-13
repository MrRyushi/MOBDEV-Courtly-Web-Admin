import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA2irxbjks8SL_sU24q5AMNSokAAKpiB74",
  authDomain: "courtly-60306.firebaseapp.com",
  databaseURL: "https://courtly-60306-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "courtly-60306",
  storageBucket: "courtly-60306.firebasestorage.app",
  messagingSenderId: "388723023242",
  appId: "1:388723023242:web:84b896525916b1a956fc73",
  measurementId: "G-Z2PDR9FF1E"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database }