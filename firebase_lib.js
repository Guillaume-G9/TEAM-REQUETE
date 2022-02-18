import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyCq7PKqWeXlFrHRcsB0eimm5gawA1I3sOU",
authDomain: "team-requete.firebaseapp.com",
projectId: "team-requete",
storageBucket: "team-requete.appspot.com",
messagingSenderId: "732316134519",
appId: "1:732316134519:web:36c26016e5145f1d1f6a72"
};

const app = initializeApp(firebaseConfig);

const email = document.querySelector("#email-input")
const password = document.querySelector("#password-input")
const signIn = document.querySelector("#sign-in-btn")


export function sign() {
    signIn.addEventListener("click", () => {
    login(email.value, password.value)
    })
}


function login(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    });
}