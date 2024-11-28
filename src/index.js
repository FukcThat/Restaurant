import "./styles.css";
import loadHomePage from "./loadHomePage";
import loadContactPage from "./loadContactPage";

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
  loadHomePage();
});

// Contact page - EventListener
contactPageBtn.addEventListener("click", () => {
  loadContactPage();
});
