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

  /*==============================================
  PREVIEW TEMPORARILY IMAGES
  ==============================================*/
  btnFileNewImg.addEventListener("change", (e) => {
    const image = e.target.files[0];
    const typeImg = e.target.getAttribute("name");

    /* Validate the image format that is JPG or PNG */
    if (image["type"] != "image/jpeg" && image["type"] != "image/png") {
      btnFileNewImg.value = "";
      alert("¡La imágen debe de estar en formato JPG o PNG!");
    } else if (image["size"] > 2000000) {
      btnFileNewImg.value = "";
      alert("¡La imágen no debe pesar más de 2MB!");
    } else {
      let imageData = new FileReader();
      imageData.readAsDataURL(image);
      imageData.addEventListener("load", function (event) {
        const imagePath = event.target.result;
        const previewNewImage = document.querySelector(
          `.previewImg_${typeImg}`
        );
        previewNewImage.src = imagePath;
      });
    }
  });
} catch (error) {}

try {
  /*==============================================
  DROPDOWN MENU - LOGGED IN
  ==============================================*/
  const sizeScreenWidt = () => document.documentElement.clientWidth;

  const menuLoggedInShow = () => {
    if (sizeScreenWidt() > 767) {
      menuLoggedIn.style.display = "block";
      menuMobileAction("-85%");
    } else {
      menuMobileAction("0");
    }
  };

  const menuLoggedInHidden = () => {
    menuLoggedIn.style.display = "none";
  };

  btnMenuLoggedIn.addEventListener("mouseenter", menuLoggedInShow);

  btnMenuLoggedIn.addEventListener("mouseleave", menuLoggedInHidden);

  secundaryMenuLoggedIn.addEventListener("mouseenter", menuLoggedInShow);

  secundaryMenuLoggedIn.addEventListener("mouseleave", menuLoggedInHidden);

  /*==============================================
  DROPDOWN MOBILE MENU- LOGGED IN
  ==============================================*/
  const menuMobileAction = (value) => {
    menuMobileLoggedIn.style.left = value;
  };

  btnHiddenMenuMobile.addEventListener("click", () => {
    menuMobileAction("-85%");
  });
} catch (error) {}
