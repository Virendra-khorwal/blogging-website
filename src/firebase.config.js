
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAHauLMg1IHjCF5kdwRhyfUpyOgfJxf2zs",
    authDomain: "devblog-78bf2.firebaseapp.com",
    projectId: "devblog-78bf2",
    storageBucket: "devblog-78bf2.appspot.com",
    messagingSenderId: "378384381942",
    appId: "1:378384381942:web:e9021ba9365d96aae679d7"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore()