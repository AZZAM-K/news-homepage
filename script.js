let menu = document.querySelector("nav")
let menuButton = document.getElementById("menu")
menuButton.addEventListener("click", () => {
  if (menuButton.getAttribute("src") === "images/icon-menu.svg") {
    menu.style.display = "block"
    menuButton.src = "images/icon-menu-close.svg"
  } else {
    menu.style.display = "none"
    menuButton.src = "images/icon-menu.svg"
  }
})
