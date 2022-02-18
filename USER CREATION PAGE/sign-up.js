
const email = document.querySelector("#email-input")
const password = document.querySelector("#password-input")
const signUp = document.querySelector("#sign-up-btn")


signUp.addEventListener("click", () => {
    createUser(email, password)
})


function createUser(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}