import BreadBoardImg from "./assets/BreadBoard.png";
import CitrusBeetImg from "./assets/CitrusBeetSalad.png";
import HarissaPlatterImg from "./assets/HarissaPlatter.png";
import DumplingsImg from "./assets/Dumplings.png";
import MushroomStroganoffImg from "./assets/MushroomStroganoff.png";
import CauliflowerSteakImg from "./assets/CauliflowerSteak.png";
import ShepherdsPieImg from "./assets/ShepherdsPie.png";
import PotatoLeekGratinImg from "./assets/PotatoLeekGratin.png";
import GnocciImg from "./assets/Gnocci.png";
import TofuBowlImg from "./assets/TofuBowl.png";
import ChocoCocoTartImg from "./assets/ChocoCocoTart.png";
import FruitCrumbleImg from "./assets/FruitCrumble.png";
import PearTartImg from "./assets/PearTart.png";
import LemongrassIcedTeaImg from "./assets/LemongrassIcedTea.png";
import RosemaryCitrusImg from "./assets/RosemaryCitrus.png";
import SignatureMocktailImg from "./assets/SignatureMocktail.png";

// Load Menu Page
const loadMenuPage = (container) => {
  // Get content div
  const contentDiv = document.querySelector(".content");
  //   contentDiv.innerHTML = "";

  // Menu Page - Div
  const menuPageDiv = document.createElement("div");
  contentDiv.appendChild(menuPageDiv);

  // Make h2 for menu
  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "Menu";
  menuPageDiv.appendChild(menuTitle);

  // Make Menu Category div's to append menu item's to
  const createMenuCategoryDivs = (menuCategoryTitle) => {
    const menuCategoryDiv = document.createElement("div");
    menuCategoryDiv.setAttribute("data-category", menuCategoryTitle);
    menuPageDiv.appendChild(menuCategoryDiv);

    const menuCategoryTitleElement = document.createElement("h3");
    menuCategoryTitleElement.textContent = menuCategoryTitle;
    menuCategoryDiv.appendChild(menuCategoryTitleElement);
  };

  // - Appetizers
  createMenuCategoryDivs("Appetizers");
  // - Main Dishes
  createMenuCategoryDivs("Main Dishes");
  // - Desserts
  createMenuCategoryDivs("Desserts");
  // - Drinks
  createMenuCategoryDivs("Drinks");

  // Make function to create menu items with:
  const createMenuItem = (
    menuItemName,
    menuItemDescription,
    menuItemPrice,
    menuItemImage,
    menuItemCategory
  ) => {
    // Get Category Div
    const menuItemCategoryDiv = document.querySelector(
      `[data-category="${menuItemCategory}"]`
    );

    // Menu Item Div
    const menuItemDiv = document.createElement("div");
    menuItemCategoryDiv.appendChild(menuItemDiv);

    // - Menu Item Name
    const menuItemNameElement = document.createElement("h4");
    menuItemNameElement.textContent = menuItemName;
    menuItemDiv.appendChild(menuItemNameElement);

    // - Description
    const menuItemDescElement = document.createElement("p");
    menuItemDescElement.textContent = menuItemDescription;
    menuItemDiv.appendChild(menuItemDescElement);

    // - Price
    const menuItemPriceElement = document.createElement("p");
    menuItemPriceElement.textContent = menuItemPrice;
    menuItemDiv.appendChild(menuItemPriceElement);

    // - Image (?)
    const menuItemImageElement = document.createElement("img");
    menuItemImageElement.src = menuItemImage;
    menuItemImageElement.classList.add("menu-item--image");
    menuItemDiv.appendChild(menuItemImageElement);
  };

  // MENU ITEMS

  // -- APPETIZERS --
  // Bread Board
  createMenuItem(
    "'Willow Bread Board'",
    "House-made sourdough, focaccia, and flatbread served with garlic confit, vegan herbed butter, and olive tapenade.",
    "8.00 Ɇ",
    BreadBoardImg,
    "Appetizers"
  );

  // Golden Beet & Citrus Salad
  createMenuItem(
    "Golden Beet & Citrus Salad",
    "Roasted golden beets, arugula, orange slices, candied walnuts, and a maple-mustard vinaigrette.",
    "12 Ɇ",
    CitrusBeetImg,
    "Appetizers"
  );

  // Harissa Roasted Veggie Platter
  createMenuItem(
    "Harissa Roasted Veggie Platter",
    "A colorful assortment of roasted seasonal vegetables, served with a creamy tahini sauce and grilled flatbread.",
    "14 Ɇ",
    HarissaPlatterImg,
    "Appetizers"
  );

  //Sesame Edamame Dumplings
  createMenuItem(
    "Sesame Edamame Dumplings",
    "Handmade dumplings stuffed with a savory mix of edamame, shiitake mushrooms, garlic, and ginger, steamed to perfection and drizzled with a sesame-soy glaze. Served with a side of tangy chili dipping sauce.",
    "9 Ɇ",
    DumplingsImg,
    "Appetizers"
  );

  // -- MAIN DISHES --
  // Creamy Wild Mushroom Stroganoff
  createMenuItem(
    "Creamy Wild Mushroom Stroganoff",
    "Cashew cream sauce, sautéed wild mushrooms, caramelized onions, and ribbon pasta.",
    "18 Ɇ",
    MushroomStroganoffImg,
    "Main Dishes"
  );

  // Hearty Lentil Shepherd’s Pie
  createMenuItem(
    "Hearty Lentil Shepherd’s Pie",
    "A rich lentil and root vegetable filling, topped with fluffy mashed potatoes and baked golden.",
    "16 Ɇ",
    ShepherdsPieImg,
    "Main Dishes"
  );

  // Charred Cauliflower Steak
  createMenuItem(
    "Charred Cauliflower Steak",
    "Served with a smoky red pepper sauce, crispy chickpeas, and a side of quinoa pilaf.",
    "17 Ɇ",
    CauliflowerSteakImg,
    "Main Dishes"
  );

  // Rustic Potato & Leek Gratin
  createMenuItem(
    "Rustic Potato & Leek Gratin",
    "Layers of thinly sliced potatoes and caramelized leeks baked in a creamy cashew sauce, topped with a golden, herbed breadcrumb crust. Served with a side of roasted seasonal vegetables.",
    "18 Ɇ",
    PotatoLeekGratinImg,
    "Main Dishes"
  );

  // Sweet Potato Gnocchi
  createMenuItem(
    "Sweet Potato Gnocchi",
    "Pan-seared gnocchi tossed in a sage brown “butter” sauce with toasted hazelnuts and wilted spinach.",
    "19 Ɇ",
    GnocciImg,
    "Main Dishes"
  );

  // Sticky Sesame Tofu Bowl
  createMenuItem(
    "Sticky Sesame Tofu Bowl",
    "Marinated tofu, jasmine rice, steamed greens, and a drizzle of sticky sesame-ginger glaze.",
    "15 Ɇ",
    TofuBowlImg,
    "Main Dishes"
  );

  // -- DESSERTS --
  // Choco-Coconut Tart
  createMenuItem(
    "Choco-Coconut Tart",
    "A rich dark chocolate ganache in a coconut crust, topped with fresh berries.",
    "10 Ɇ",
    ChocoCocoTartImg,
    "Desserts"
  );

  // Seasonal Fruit Crumble
  createMenuItem(
    "Seasonal Fruit Crumble",
    "Warm, spiced fruit with an oat-almond topping, served with a dollop of coconut cream.",
    "11 Ɇ",
    FruitCrumbleImg,
    "Desserts"
  );

  // Cardamom Pear Tart
  createMenuItem(
    "Cardamom Pear Tart",
    "A delicate tart filled with almond cream and poached pears, lightly spiced with cardamom and finished with a drizzle of maple syrup.",
    "12 Ɇ",
    PearTartImg,
    "Desserts"
  );

  // -- DRINKS --
  // Lemongrass Iced Tea
  createMenuItem(
    "Lemongrass Iced Tea",
    "Refreshing and lightly sweetened with agave syrup.",
    "6 Ɇ",
    LemongrassIcedTeaImg,
    "Drinks"
  );

  // Rosemary Citrus Spritz
  createMenuItem(
    "Rosemary Citrus Spritz",
    "A refreshing sparkling drink made with orange and grapefruit juices, rosemary syrup, and sparkling water. Garnished with a sprig of fresh rosemary.",
    "7 Ɇ",
    RosemaryCitrusImg,
    "Drinks"
  );

  // Willow Signature Mocktail
  createMenuItem(
    "Willow Signature Mocktail",
    "A mix of cucumber, elderflower, lime, and soda water for a fresh, bubbly treat.",
    "8 Ɇ",
    SignatureMocktailImg,
    "Drinks"
  );
};

export default loadMenuPage;
