try {
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
} catch (error) {}

try {
  /*==============================================
    MODAL - ADD WORD
  ==============================================*/
  btnShowAddWord.addEventListener("click", () => {
    modalAddWord.style.display = "block";
  });

  modalAddWord.addEventListener("click", (e) => {
    if (!modalAddWordBody.contains(e.target)) {
      modalAddWord.style.display = "none";
    }
  });

  btnCancelModalAddWord.addEventListener("click", () => {
    modalAddWord.style.display = "none";
  });
} catch (error) {}

/*============================================
CONTAINER WORDS - PAGE PROFILE
============================================*/

try {
  containerWordEnglish.forEach((element) => {
    element.addEventListener("click", (element) => {
      if (!visibilityWordSpanish) {
        showWordSpanish(element);
      } else {
        hiddenWordSpanish(element);
      }
    });
  });

  const showWordSpanish = (element) => {
    containerWordSpanish.forEach((elementSpanish) => {
      if (element.target.getAttribute("id") == elementSpanish.id) {
        elementSpanish.style.display = "flex";
        elementSpanish.style.height = "55px";
        elementSpanish.style.transition = "height";
        visibilityWordSpanish = true;
        idWordSpanish = elementSpanish.id;
      }
    });
  };

  const forEachWordSpanish = (element) => {
    element.forEach((e) => {
      if (e.id == idWordSpanish) {
        e.style.height = "0";
        e.style.transition = "height";
        e.style.display = "none";
        visibilityWordSpanish = false;
      }
    });
  };

  const hiddenWordSpanish = (element) => {
    if (element.target.getAttribute("id") == idWordSpanish) {
      forEachWordSpanish(containerWordSpanish);
    } else {
      forEachWordSpanish(containerWordSpanish);
      showWordSpanish(element);
    }
  };

  /*==============================================
  MODAL - EDIT PROFILE
  ==============================================*/
  btnEditProfile.addEventListener("click", () => {
    modalEditProfile.style.display = "block";
  });

  modalEditProfile.addEventListener("click", (e) => {
    if (!modalEditProfileBody.contains(e.target)) {
      modalEditProfile.style.display = "none";
    }
  });

  btnCancelModalEditProfile.addEventListener("click", () => {
    modalEditProfile.style.display = "none";
  });
} catch (error) {}
