import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgbdptk-xD-k1jJXo9Idiu3xJrvPQOJnA",
  authDomain: "houseofnoor-12a33.firebaseapp.com",
  projectId: "houseofnoor-12a33",
  storageBucket: "houseofnoor-12a33.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
