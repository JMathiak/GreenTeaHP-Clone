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

addHover();
