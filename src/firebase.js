// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBl4a1eShpkenfaGOEXqPOmciAVp0dXMas",
    authDomain: "cellinfo-a4e89.firebaseapp.com",
    projectId: "cellinfo-a4e89",
    storageBucket: "cellinfo-a4e89.appspot.com",
    messagingSenderId: "218985066787",
    appId: "1:218985066787:web:36fb7f836f1034ac409c96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
