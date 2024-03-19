const copyrightYear = () => {
  console.log("running..");
  const yearLabel = document.getElementById("year");
  // initialize the year object , get current year and set the copyright year
  let year = new Date().getFullYear();
  yearLabel.innerHTML = year;
};

// runs the copyrightYear function once the window loads the page
window.addEventListener("load", () => copyrightYear());

// toggles the menu - to open/close the menu links
const toggleMenu = (e) => {
  const menu = document.getElementById("menu");
  const menuLinks = document.getElementById("menu-links");
  const isMenuOpened = menu.classList.contains("fa-bars");

  console.log(window.innerWidth);

  if (isMenuOpened) {
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-xmark");
  } else {
    menu.classList.remove("fa-xmark");
    menu.classList.add("fa-bars");
  }
  menuLinks.classList.toggle("menu-links-open");
};

// add event to all links in the menu instead of add it to each link individually - by use of event bubbling
const Links = document.getElementById("menu-links");
Links.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll("a[id ^='link']");

// add active class to the active link
const showActiveLink = (e) => {
  menuLinks.forEach((link) => link.classList.remove("active"));
  e.target.classList.toggle("active");
  console.log(e.target);
};

// adding event listener to the links using event delegation - event bubbling
menuLinks.addEventListener("click", showActiveLink);
