// close icon clicked
const closeBtn = document.querySelector("#close");
closeBtn.addEventListener("click", () => {
  handleClicks(closeBtn);
});
// menu icon clicked
const menuBtn = document.querySelector("#menu");
menuBtn.onclick = () => {
  handleClicks(menuBtn);
};

//handles all the links of navigation
const handleClicks = (button) => {
  const menu = document.querySelector(".mobile-menu");
  const menuIcon = document.querySelector(".menu-icon");

  //menu icon is clicked
  if (button.id === "menu") {
    menu.classList.add("display-mobile-menu");
    menuIcon.classList.add("hide-icon");

    //any item clicked
    const navs = document.querySelectorAll("#nav");
    console.log(navs);
    navs.forEach((item) => {
      item.onclick = () => {
        menu.classList.remove("display-mobile-menu");
        menuIcon.classList.remove("hide-icon");
      };
    });
  }

  //close icon is clicked
  if (button.id === "close") {
    menu.classList.remove("display-mobile-menu");
    menuIcon.classList.remove("hide-icon");
  }
};

const date = new Date().getFullYear();

console.log(date);
document.getElementById("em").innerHTML = date;
