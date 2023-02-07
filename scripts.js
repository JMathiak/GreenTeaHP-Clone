function addHover() {
  let dropdown = document.querySelector("#sem-dropdown");
  let semNavBar = document.querySelector("#sem");
  semNavBar.addEventListener("mouseover", function (e) {
    dropdown.classList.remove("hidden");
  });
  semNavBar.addEventListener("mouseout", function (e) {
    dropdown.classList.add("hidden");
  });
}

addHover();
