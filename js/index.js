/*==============================================
MODAL - LOGIN
==============================================*/
btnLogin.addEventListener("click", () => {
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
