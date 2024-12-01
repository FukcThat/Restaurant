import WillowTreeLogo from "./assets/TheWillowTable-Logo.png";

// Make load-home-page function
const loadHomePage = (container) => {
  // Get content div
  const contentDiv = document.querySelector(".content");
  // contentDiv.innerHTML = "";

  // Make Home-Page div
  const HomePageDiv = document.createElement("div");
  HomePageDiv.classList.add("home-page--div");
  contentDiv.appendChild(HomePageDiv);

  // Make h2 for name
  const restaurantName = document.createElement("h2");
  restaurantName.textContent = "Welcome to...";
  restaurantName.classList.add("restaurant-name");
  HomePageDiv.appendChild(restaurantName);

  // Make backdrop image
  const logoImg = document.createElement("img");
  logoImg.src = WillowTreeLogo;
  logoImg.classList.add("logo-img");
  HomePageDiv.appendChild(logoImg);

  // Make little p with some fancy words
  const homepageText = document.createElement("p");
  homepageText.textContent =
    "The Willow Table was founded with a simple idea: that plant-based food can be hearty, satisfying, and approachable. Located on Linden Lane in Frankfurt, our restaurant brings together a passion for fresh, seasonal ingredients and a commitment to sustainability. What started as a local project to offer delicious vegan options has grown into a cozy spot where everyone—vegans and non-vegans alike—can enjoy a thoughtfully crafted meal. Come by, take a seat, and let us share our love for good food with you.";
  homepageText.classList.add("homepage-text");
  HomePageDiv.appendChild(homepageText);
};

export default loadHomePage;
