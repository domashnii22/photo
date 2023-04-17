// Прокрутка навигации

const menuLinks = document.querySelectorAll(".header__link[data-goto");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(event) {
    const menuLink = event.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      event.preventDefault();
    }
  }
}

// Меню бургер

const content = document.querySelector(".content");
const high = document.querySelector(".header");

const headerIcon = document.querySelector(".header__icon");
const headerList = document.querySelector(".header__list");
const headerSpan = document.querySelector(".header__span");
const headerLogo = document.querySelector(".header__logo");

function actionBurgerMenu() {
  if (headerIcon.classList.contains("header__icon_active")) {
    headerIcon.classList.remove("header__icon_active");
    headerSpan.classList.remove("header__span_active");
    headerList.classList.remove("header__list_active");
    headerLogo.classList.remove("header__logo_rotate");
    downPage()
  } else {
    headerIcon.classList.add("header__icon_active");
    headerSpan.classList.add("header__span_active");
    headerList.classList.add("header__list_active");
    headerLogo.classList.add("header__logo_rotate");
    downPage()
  }
}

function rotateLogo() {
  if (headerLogo.classList.contains("header__logo_rotate")) {
    headerLogo.classList.replace("header__logo_rotate", "header__logo_active")
  } else {
    headerLogo.classList.toggle("header__logo_active")
}
}

function rotateLogoWithTime () {
  setTimeout(rotateLogo, 500)
}

function downPage() {
  if (high.offsetHeight > 100) {
    content.style.marginTop = "198px";
  } else {
    content.style.marginTop = "84px";
  }
}

headerIcon.addEventListener("mousedown", actionBurgerMenu);
headerIcon.addEventListener("mouseup", rotateLogoWithTime);

// Кнопки

const buttons = document.querySelectorAll(".section-button[data-goto");
if (buttons.length > 0) {
  buttons.forEach((button) => {
    button.addEventListener("click", onButtonClick);
  });

  function onButtonClick(event) {
    const button = event.target;
    if (
      button.dataset.goto &&
      document.querySelector(button.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(button.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      event.preventDefault();
    }
  }
}
