// import * as firebase  from "firebase";
import "firebase/auth";
// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  
  apiKey: "AIzaSyCHWQKPpBRNHd3CK9d24-AQO6MpdrZ9keM",
  authDomain: "native4-a2e33.firebaseapp.com",
  projectId: "native4-a2e33",
  storageBucket: "native4-a2e33.appspot.com",
  messagingSenderId: "925610788780",
  appId: "1:925610788780:web:42271113e2366b9f2a9c09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
