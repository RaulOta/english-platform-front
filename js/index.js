/*==============================================
MODAL - LOGIN
==============================================*/
btnShowLogin.addEventListener("click", () => {
  modalLogin.style.display = "block";
});

modalLogin.addEventListener("click", function (e) {
  if (!modalLoginBody.contains(e.target)) {
    modalLogin.style.display = "none";
  }
});

btnCancelModalLogin.addEventListener("click", () => {
  modalLogin.style.display = "none";
});

/*==============================================
MODAL - SIGN UP
==============================================*/
btnShowSignUp.addEventListener("click", () => {
  modalSignUp.style.display = "block";
});

modalSignUp.addEventListener("click", (e) => {
  if (!modalSignUpBody.contains(e.target)) {
    modalSignUp.style.display = "none";
  }
});

btnCancelModalSignUp.addEventListener("click", () => {
  modalSignUp.style.display = "none";
});
