// close icon clicked
const closeBtn = document.querySelector("#close-icon");
closeBtn.addEventListener("click", () => {
  handleClicks(closeBtn);
  console.log("close icon clicked.." + closeBtn.id);
});
// // menu icon clicked
const menuBtn = document.querySelector("#menu-icon");
menuBtn.onclick = () => {
  console.log("menu icon clicked");
  handleClicks(menuBtn);
};

// //handles all the links of navigation
const handleClicks = (button) => {
  const menu = document.querySelector("#mobile-menu");
  const menuIcon = document.querySelector("#menu-icon");

  //   //menu icon is clicked
  if (button.id === "menu-icon") {
    menu.classList.add("show-menu");
    menuIcon.classList.add("hide-menu-icon");

    //     //any item clicked
    const navs = document.querySelectorAll("#nav");
    console.log(navs);
    navs.forEach((item) => {
      item.onclick = () => {
        menu.classList.remove("display-mobile-menu");
        menuIcon.classList.remove("hide-icon");
        console.log("nav item clicked..");
        menu.classList.remove("show-menu");
        menu.classList.add("hide-menu");
        menuIcon.classList.remove("hide-menu-icon");
      };
    });
  }

  //close icon is clicked
  if (button.id === "close-icon") {
    menu.classList.remove("show-menu");
    menu.classList.add("hide-menu");
    menuIcon.classList.remove("hide-menu-icon");
  }
};

const date = new Date().getFullYear();

console.log(date);
document.getElementById("em").innerHTML = date;
