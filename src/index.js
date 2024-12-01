import "./styles.css";
import loadHomePage from "./loadHomePage";
import loadContactPage from "./loadContactPage";
import loadMenuPage from "./loadMenuPage";
import switchPageContent from "./switchPageContent";

// First Home page load
document.addEventListener("DOMContentLoaded", () => {
  loadHomePage();
});

// Nav Buttons
const contactPageBtn = document.querySelector("#contact");
const menuPageBtn = document.querySelector("#menu");
const homePageBtn = document.querySelector("#home");

// Home page - EventListener
homePageBtn.addEventListener("click", () => {
  switchPageContent(loadHomePage);
});

// Menu Page - EventListener
menuPageBtn.addEventListener("click", () => {
  switchPageContent(loadMenuPage);
});

// Contact page - EventListener
contactPageBtn.addEventListener("click", () => {
  switchPageContent(loadContactPage);
});
