var navMain = document.querySelector(".main-nav__wrapper");
var navToggle = document.querySelector(".main-nav__button");
var navButtons = document.querySelector(".main-nav__buttons");
var pageHeader = document.querySelector(".page-header");

navToggle.classList.remove("main-nav__button--nojs");
navMain.classList.remove("main-nav__wrapper--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav__wrapper--closed")) {
    navMain.classList.remove("main-nav__wrapper--closed");
    navToggle.classList.remove("main-nav__button--closed");
    navButtons.classList.remove("main-nav__buttons--closed");
    pageHeader.classList.add("page-header--opened");
  } else {
    navMain.classList.add("main-nav__wrapper--closed");
    navToggle.classList.add("main-nav__button--closed");
    navButtons.classList.add("main-nav__buttons--closed");
    pageHeader.classList.remove("page-header--opened");
  }
});


var sliderControll = document.querySelectorAll(".slider__control-button");
if ("sliderItem") {
  var sliderControllLeft = document.querySelector(".slider__control-button--left");
  var sliderControllMiddle = document.querySelector(".slider__control-button--middle");
  var sliderControllRight = document.querySelector(".slider__control-button--right");
  var sliderItem = document.querySelectorAll(".slider__item");
  var sliderItemLeft = document.querySelector(".slider__item--left");
  var sliderItemMiddle = document.querySelector(".slider__item--middle");
  var sliderItemRight = document.querySelector(".slider__item--right");

  sliderControllLeft.addEventListener("click", function() {
    if (sliderItemLeft.classList.contains("visually-hidden")) {
      sliderItemLeft.classList.remove("visually-hidden");
      sliderItemMiddle.classList.add("visually-hidden");
      sliderItemRight.classList.add("visually-hidden");
      sliderControllLeft.classList.add("slider__control-button--active");
      sliderControllMiddle.classList.remove("slider__control-button--active");
      sliderControllRight.classList.remove("slider__control-button--active");
    }
  });

  sliderControllMiddle.addEventListener("click", function() {
    if (sliderItemMiddle.classList.contains("visually-hidden")) {
      sliderItemMiddle.classList.remove("visually-hidden");
      sliderItemLeft.classList.add("visually-hidden");
      sliderItemRight.classList.add("visually-hidden");
      sliderControllMiddle.classList.add("slider__control-button--active");
      sliderControllLeft.classList.remove("slider__control-button--active");
      sliderControllRight.classList.remove("slider__control-button--active");
    }
  });

  sliderControllRight.addEventListener("click", function() {
    if (sliderItemRight.classList.contains("visually-hidden")) {
      sliderItemRight.classList.remove("visually-hidden");
      sliderItemMiddle.classList.add("visually-hidden");
      sliderItemLeft.classList.add("visually-hidden");
      sliderControllRight.classList.add("slider__control-button--active");
      sliderControllMiddle.classList.remove("slider__control-button--active");
      sliderControllLeft.classList.remove("slider__control-button--active");
    }
  });
};

var priceList = document.querySelector(".price__list");
if ("priceList") {
  var sliderControlLeft = document.querySelector(".slider__control-left");
  var sliderControlMiddle = document.querySelector(".slider__control-middle");
  var sliderControlRight = document.querySelector(".slider__control-right");

  sliderControlLeft.addEventListener("click", function() {
    if (priceList.classList.contains("price__list--middle")) {
      priceList.classList.add("price__list--left");
      priceList.classList.remove("price__list--middle");
      sliderControlLeft.classList.add("slider__control-button--active");
      sliderControlMiddle.classList.remove("slider__control-button--active");
    } else if (priceList.classList.contains("price__list--right")) {
      priceList.classList.add("price__list--left");
      priceList.classList.remove("price__list--right");
      sliderControlLeft.classList.add("slider__control-button--active");
      sliderControlRight.classList.remove("slider__control-button--active");
    }
  });

  sliderControlMiddle.addEventListener("click", function() {
    if (priceList.classList.contains("price__list--left")) {
      priceList.classList.remove("price__list--left");
      priceList.classList.add("price__list--middle");
      sliderControlLeft.classList.remove("slider__control-button--active");
      sliderControlMiddle.classList.add("slider__control-button--active");
    } else if (priceList.classList.contains("price__list--right")) {
      priceList.classList.add("price__list--middle");
      priceList.classList.remove("price__list--right");
      sliderControlMiddle.classList.add("slider__control-button--active");
      sliderControlRight.classList.remove("slider__control-button--active");
    }
  });

  sliderControlRight.addEventListener("click", function() {
    if (priceList.classList.contains("price__list--left")) {
      priceList.classList.remove("price__list--left");;
      priceList.classList.add("price__list--right");
      sliderControlLeft.classList.remove("slider__control-button--active");
      sliderControlMiddle.classList.remove("slider__control-button--active");
      sliderControlRight.classList.add("slider__control-button--active");
    } else if (priceList.classList.contains("price__list--middle")) {
      priceList.classList.add("price__list--right");
      priceList.classList.remove("price__list--middle")
      sliderControlRight.classList.add("slider__control-button--active");
      sliderControlMiddle.classList.remove("slider__control-button--active");
    }
  });
};

var sliderArrows = document.querySelector(".slider__arrows");

if ("sliderArrows") {
  var sliderArrowLeft = document.querySelector(".slider__arrow--left");
  var sliderArrowRight = document.querySelector(".slider__arrow--right");
  var sliderItem = document.querySelectorAll(".slider__item");
  var sliderItemLeft = document.querySelector(".slider__item--left");
  var sliderItemMiddle = document.querySelector(".slider__item--middle");
  var sliderItemRight = document.querySelector(".slider__item--right");

  sliderArrowLeft.addEventListener("click", function() {
    if (sliderItemLeft.classList.contains("slider__item--current")) {
      sliderItemRight.classList.remove("visually-hidden");
      sliderItemRight.classList.add("slider__item--current");
      sliderItemLeft.classList.add("visually-hidden");
      sliderItemLeft.classList.remove("slider__item--current");
    } else if (sliderItemMiddle.classList.contains("slider__item--current")) {
      sliderItemLeft.classList.remove("visually-hidden");
      sliderItemLeft.classList.add("slider__item--current");
      sliderItemMiddle.classList.add("visually-hidden");
      sliderItemMiddle.classList.remove("slider__item--current");
    } else {
      sliderItemMiddle.classList.remove("visually-hidden");
      sliderItemMiddle.classList.add("slider__item--current");
      sliderItemRight.classList.add("visually-hidden");
      sliderItemRight.classList.remove("slider__item--current");
    }
  });

  sliderArrowRight.addEventListener("click", function() {
    if (sliderItemLeft.classList.contains("slider__item--current")) {
      sliderItemMiddle.classList.remove("visually-hidden");
      sliderItemMiddle.classList.add("slider__item--current");
      sliderItemLeft.classList.add("visually-hidden");
      sliderItemLeft.classList.remove("slider__item--current");
    } else if (sliderItemMiddle.classList.contains("slider__item--current")) {
      sliderItemRight.classList.remove("visually-hidden");
      sliderItemRight.classList.add("slider__item--current");
      sliderItemMiddle.classList.add("visually-hidden");
      sliderItemMiddle.classList.remove("slider__item--current");
    } else {
      sliderItemLeft.classList.remove("visually-hidden");
      sliderItemLeft.classList.add("slider__item--current");
      sliderItemRight.classList.add("visually-hidden");
      sliderItemRight.classList.remove("slider__item--current");
    }
  });
};
