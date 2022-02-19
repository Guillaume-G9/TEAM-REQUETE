import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

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
const signUp = document.querySelector("#sign-up-btn")
const emailCreate = document.querySelector("#email-input-create")
const passwordCreate = document.querySelector("#password-input-create")
const passwordVerify = document.querySelector("#password-verify")
const wrongMail = document.querySelector("#wrong-email")
const wrongPass = document.querySelector("#wrong-password")


export function create() {
  signUp.addEventListener("click", () => {
    wrongMail.style.display = "none"
    if (validateEmail(emailCreate) === true && validatePassword(passwordCreate) === true) {
      createUser(emailCreate.value, passwordCreate.value)
      console.log(emailCreate.value, passwordCreate.value)
    } else {

    }
  })
}

export function sign() {
  signIn.addEventListener("click", () => {
    login(email.value, password.value)
  })
}

function createUser(emailCreate, passwordCreate) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, emailCreate, passwordCreate)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
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

function validateEmail(emailCreate) {
  
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailCreate.value.match(validRegex)) {
    return true;
  } else {
    wrongMail.textContent = `Veuillez entrer une adresse e-mail valide !`
    wrongMail.style.display = "inline"
    emailCreate.value = ""
    emailCreate.focus();
    return false;
  }
}

function validatePassword(passwordCreate) {

  let pattern = new RegExp("^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,}).{8,}$");  // password must contain at least 8 characters , 1 number , 1 uppercase char (a-z), 1 lowercase char (a-z)
  if(pattern.test(passwordCreate.value)){
      return true;
  }else{
    wrongPass.textContent = `Votre mot de passe doit contenir au moins 8 caractères, dont 1 chiffre et une majuscule`
    passwordCreate.value = ""
    passwordCreate.focus();
    return false;
  }
};
