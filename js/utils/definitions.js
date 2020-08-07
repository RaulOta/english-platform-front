const btnShowLogin = document.querySelector("#btn-show-login");
const modalLogin = document.querySelector("#modal-login");
const modalLoginBody = document.querySelector("#modal-login-body");
const btnCancelModalLogin = document.querySelector("#btn-cancel-modal-login");
const btnShowSignUp = document.querySelector("#btn-show-sign-up");
const modalSignUp = document.querySelector("#modal-sign-up");
const modalSignUpBody = document.querySelector("#modal-sign-up-body");
const btnCancelModalSignUp = document.querySelector(
  "#btn-cancel-modal-sign-up"
);
const btnShowAddWord = document.querySelector("#btn-show-add-word");
const modalAddWord = document.querySelector("#modal-add-word");
const modalAddWordBody = document.querySelector("#modal-add-word-body");
const btnCancelModalAddWord = document.querySelector(
  "#btn-cancel-modal-add-word"
);

const containerWordEnglish = document.querySelectorAll(".container-text-word");
const containerWordSpanish = document.querySelectorAll(
  ".container-word-spanish"
);

let visibilityWordSpanish = false;
let idWordSpanish = 0;

const btnEditProfile = document.querySelector(".btn-edit-profile");
const modalEditProfile = document.querySelector("#modal-edit-profile");
const modalEditProfileBody = document.querySelector("#modal-edit-profile-body");
const btnCancelModalEditProfile = document.querySelector(
  "#btn-cancel-modal-edit-profile"
);
const btnFileNewImg = document.querySelector("#new_img_profile");
const btnMenuLoggedIn = document.querySelector("#btn-menu-logged-in");
const menuLoggedIn = document.querySelector(
  ".principal-container-menu-logged-in"
);
const secundaryMenuLoggedIn = document.querySelector(
  ".secundary-container-menu-logged-in"
);
