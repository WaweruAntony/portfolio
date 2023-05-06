// close button clicked
const closeBtn = document.querySelector("#close");
closeBtn.addEventListener("click", () => {
  console.log(closeBtn);
  const menu = document.querySelector(".mobile-menu");
  const menuIcon = document.querySelector(".menu-icon");
  menu.classList.remove("display-mobile-menu");
  menuIcon.classList.remove("hide-icon");
});
// menu button clicked
const menuBtn = document.querySelector("#menu");
menuBtn.onclick = () => {
  const menu = document.querySelector(".mobile-menu");
  const menuIcon = document.querySelector(".menu-icon");
  menu.classList.add("display-mobile-menu");
  menuIcon.classList.add("hide-icon");
};
