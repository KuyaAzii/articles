import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBZ7yQgCWnCy7N06JFYiHmwGOsUnIJHEV0",
  authDomain: "article-b5242.firebaseapp.com",
  projectId: "article-b5242",
  storageBucket: "article-b5242.appspot.com",
  messagingSenderId: "1026519417",
  appId: "1:1026519417:web:1e2f3def9e841664263fa8",
  measurementId: "G-LLG52BXWV0"
  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);