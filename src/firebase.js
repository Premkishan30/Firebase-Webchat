import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9P0kAK3F7N-Fz5kAFjwdRNaghnbiFgRM",
  authDomain: "wt-chat-ee12c.firebaseapp.com",
  projectId: "wt-chat-ee12c",
  storageBucket: "wt-chat-ee12c.appspot.com",
  messagingSenderId: "833726596254",
  appId: "1:833726596254:web:d560b7645d04f6ff13a78f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
