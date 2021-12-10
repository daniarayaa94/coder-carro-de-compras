
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAMGQRJFy9OlJsRW6rk2otcjxLzFGlXfTw",
  authDomain: "coderhousecarrito.firebaseapp.com",
  projectId: "coderhousecarrito",
  storageBucket: "coderhousecarrito.appspot.com",
  messagingSenderId: "239072923002",
  appId: "1:239072923002:web:5343731bb9687ec6a71ac3",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
export const appFirebase = () =>{
    initializeApp(firebaseConfig);
} 
//const analytics = getAnalytics(app);