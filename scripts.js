let i = 1;
let currSlide = "bg-banner1";
function addHover() {
  let semDropdown = document.querySelector("#sem-dropdown");
  let semNavBar = document.querySelector("#sem");
  let mlDropdown = document.querySelector("#ml-dropdown");
  let mlNavBar = document.querySelector("#ml");
  let sogtDropdown = document.querySelector("#sogt-dropdown");
  let sogtNavBar = document.querySelector("#sogt");
  let myAccountNav = document.querySelector("#my-account");
  let signInDropDown = document.querySelector("#sign-in-button");
  semNavBar.addEventListener("mouseover", function (e) {
    semDropdown.classList.remove("hidden");
  });
  semNavBar.addEventListener("mouseout", function (e) {
    semDropdown.classList.add("hidden");
  });
  mlNavBar.addEventListener("mouseover", function (e) {
    mlDropdown.classList.remove("hidden");
  });
  mlNavBar.addEventListener("mouseout", function (e) {
    mlDropdown.classList.add("hidden");
  });
  sogtNavBar.addEventListener("mouseover", function (e) {
    sogtDropdown.classList.remove("hidden");
  });
  sogtNavBar.addEventListener("mouseout", function (e) {
    sogtDropdown.classList.add("hidden");
  });
  myAccountNav.addEventListener("mouseover", function (e) {
    signInDropDown.classList.remove("hidden");
  });
  myAccountNav.addEventListener("mouseout", function (e) {
    signInDropDown.classList.add("hidden");
  });
}

function carouselButtons() {
  let carouselForward = document.querySelector("#carousel-forward");
  let carouselBackward = document.querySelector("#carousel-back");
  let carouselItem1 = document.querySelector("#carousel-1");
  let carouselItem2 = document.querySelector("#carousel-2");
  let carouselItem3 = document.querySelector("#carousel-3");
  let button1 = document.querySelector("#carousel-button-1");
  let button2 = document.querySelector("#carousel-button-2");
  let button3 = document.querySelector("#carousel-button-3");
  let banner = document.querySelector("#banner");

  carouselForward.onclick = function (event) {
    event.preventDefault();
    i = i + 1;
    if (i == 2) {
      carouselItem1.classList.remove("block");
      carouselItem2.classList.remove("hidden");
      carouselItem1.classList.add("hidden");
      carouselItem2.classList.add("block");
      button1.classList.remove("bg-grayText");
      button1.classList.add("bg-lightGrayBox");
      button2.classList.remove("bg-lightGrayBox");
      button2.classList.add("bg-grayText");
    } else if (i == 3) {
      carouselItem2.classList.remove("block");
      carouselItem3.classList.remove("hidden");
      carouselItem2.classList.add("hidden");
      carouselItem3.classList.add("block");
      button2.classList.remove("bg-grayText");
      button2.classList.add("bg-lightGrayBox");
      button3.classList.remove("bg-lightGrayBox");
      button3.classList.add("bg-grayText");
    } else if (i > 3) {
      carouselItem3.classList.remove("block");
      carouselItem1.classList.remove("hidden");
      carouselItem3.classList.add("hidden");
      carouselItem1.classList.add("block");
      button3.classList.remove("bg-grayText");
      button3.classList.add("bg-lightGrayBox");
      button1.classList.remove("bg-lightGrayBox");
      button1.classList.add("bg-grayText");

      i = 1;
    }
  };

  carouselBackward.onclick = function (event) {
    event.preventDefault();
    i = i - 1;
    if (i == 2) {
      carouselItem3.classList.remove("block");
      carouselItem2.classList.remove("hidden");
      carouselItem3.classList.add("hidden");
      carouselItem2.classList.add("block");
      button3.classList.remove("bg-grayText");
      button3.classList.add("bg-lightGrayBox");
      button2.classList.remove("bg-lightGrayBox");
      button2.classList.add("bg-grayText");
    } else if (i == 1) {
      carouselItem2.classList.remove("block");
      carouselItem1.classList.remove("hidden");
      carouselItem2.classList.add("hidden");
      carouselItem1.classList.add("block");
      button2.classList.remove("bg-grayText");
      button2.classList.add("bg-lightGrayBox");
      button1.classList.remove("bg-lightGrayBox");
      button1.classList.add("bg-grayText");
    } else if (i == 0) {
      carouselItem1.classList.remove("block");
      carouselItem3.classList.remove("hidden");
      carouselItem1.classList.add("hidden");
      carouselItem3.classList.add("block");
      button1.classList.remove("bg-grayText");
      button1.classList.add("bg-lightGrayBox");
      button3.classList.remove("bg-lightGrayBox");
      button3.classList.add("bg-grayText");
      i = 3;
    }
  };
}

function goToSlide(target, event) {
  let button1 = document.querySelector("#carousel-button-1");
  let button2 = document.querySelector("#carousel-button-2");
  let button3 = document.querySelector("#carousel-button-3");
  let carouselItem1 = document.querySelector("#carousel-1");
  let carouselItem2 = document.querySelector("#carousel-2");
  let carouselItem3 = document.querySelector("#carousel-3");
  event.preventDefault();
  if (i == 1) {
    button1.classList.remove("bg-grayText");
    button1.classList.add("bg-lightGrayBox");
    carouselItem1.classList.remove("block");
    carouselItem1.classList.add("hidden");
  } else if (i == 2) {
    button2.classList.remove("bg-grayText");
    button2.classList.add("bg-lightGrayBox");
    carouselItem2.classList.remove("block");
    carouselItem2.classList.add("hidden");
  } else if (i == 3) {
    button3.classList.remove("bg-grayText");
    button3.classList.add("bg-lightGrayBox");
    carouselItem3.classList.remove("block");
    carouselItem3.classList.add("hidden");
  }

  if (target == 1) {
    button1.classList.remove("bg-lightGrayBox");
    button1.classList.add("bg-grayText");
    carouselItem1.classList.remove("hidden");
    carouselItem1.classList.add("block");
    i = 1;
  } else if (target == 2) {
    button2.classList.remove("bg-lightGrayBox");
    button2.classList.add("bg-grayText");
    carouselItem2.classList.remove("hidden");
    carouselItem2.classList.add("block");
    i = 2;
  } else if (target == 3) {
    button3.classList.remove("bg-lightGrayBox");
    button3.classList.add("bg-grayText");
    carouselItem3.classList.remove("hidden");
    carouselItem3.classList.add("block");
    i = 3;
  }
}

addHover();
carouselButtons();
