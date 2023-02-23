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
  let banner = document.querySelector("#banner");

  carouselForward.onclick = function (event) {
    event.preventDefault();
    i = i + 1;
    if (i == 2) {
      carouselItem1.classList.remove("block");
      carouselItem2.classList.remove("hidden");
      carouselItem1.classList.add("hidden");
      carouselItem2.classList.add("block");
      currSlide = "bg-banner2";
    } else if (i == 3) {
      carouselItem2.classList.remove("block");
      carouselItem3.classList.remove("hidden");
      carouselItem2.classList.add("hidden");
      carouselItem3.classList.add("block");
      currSlide = "bg-banner3";
    } else if (i > 3) {
      carouselItem3.classList.remove("block");
      carouselItem1.classList.remove("hidden");
      carouselItem3.classList.add("hidden");
      carouselItem1.classList.add("block");
      currSlide = "bg-banner3";
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
      currSlide = "bg-banner2";
    } else if (i == 1) {
      carouselItem2.classList.remove("block");
      carouselItem1.classList.remove("hidden");
      carouselItem2.classList.add("hidden");
      carouselItem1.classList.add("block");
      currSlide = "bg-banner1";
    } else if (i == 0) {
      carouselItem1.classList.remove("block");
      carouselItem3.classList.remove("hidden");
      carouselItem1.classList.add("hidden");
      carouselItem3.classList.add("block");
      currSlide = "bg-banner3";
      i = 3;
    }
  };
}

addHover();
carouselButtons();
