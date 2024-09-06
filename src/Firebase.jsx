import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "fir-education-391a4.firebaseapp.com",
  projectId: "fir-education-391a4",
  storageBucket: "fir-education-391a4.appspot.com",
  messagingSenderId: "1039042964965",
  appId: "1:1039042964965:web:33d1fe9af3c7cbd65e530c",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
