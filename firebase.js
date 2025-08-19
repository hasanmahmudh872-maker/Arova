// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } 
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAlSpW1-twmd94Dtb-3urkLat56tcE3z2g",
  authDomain: "arova-shop-5493e.firebaseapp.com",
  projectId: "arova-shop-5493e",
  storageBucket: "arova-shop-5493e.appspot.com",
  messagingSenderId: "146475125266",
  appId: "1:146475125266:web:8c7f877970b0e58d5126cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up function
export function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => alert("✅ Registered: " + userCredential.user.email))
    .catch(error => alert("❌ Error: " + error.message));
}

// Login function
export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => alert("✅ Logged in: " + userCredential.user.email))
    .catch(error => alert("❌ Error: " + error.message));
}

// Logout function
export function logout() {
  signOut(auth)
    .then(() => alert("✅ Logged out"))
    .catch(error => alert("❌ Error: " + error.message));
}