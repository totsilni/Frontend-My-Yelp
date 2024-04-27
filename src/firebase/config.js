import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAGN-dV6IMez8280s_c9bu7p5svuM_4Q_0",
  authDomain: "yelp-clay-70b98.firebaseapp.com",
  projectId: "yelp-clay-70b98",
  storageBucket: "yelp-clay-70b98.appspot.com",
  messagingSenderId: "916089655628",
  appId: "1:916089655628:web:b3d4f3ec33ccab59d7ffe9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
