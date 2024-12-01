// Contact-page load funcion
const loadContactPage = (container) => {
  // Get content div
  const contentDiv = document.querySelector(".content");
  //   contentDiv.innerHTML = "";

  // Make div for The contact page
  const contactPageDiv = document.createElement("div");
  contactPageDiv.classList.add("contact-page-div");
  contentDiv.appendChild(contactPageDiv);

  // Opening Hours - Div
  const openingHoursDiv = document.createElement("div");
  openingHoursDiv.classList.add("opening-hours-div");
  contactPageDiv.appendChild(openingHoursDiv);

  // Opening Hours - Title
  const openingHoursTitle = document.createElement("h3");
  openingHoursTitle.textContent = "Opening Hours";
  openingHoursTitle.classList.add("opening-hours--title");
  openingHoursDiv.appendChild(openingHoursTitle);

  // Opening Hours - Make p for Mo-Fr 11:00 AM - 9:00 PM
  const openingHoursMoFr = document.createElement("p");
  openingHoursMoFr.textContent = "Monday - Friday:    11:00 AM - 9:00 PM";
  openingHoursDiv.appendChild(openingHoursMoFr);

  // Make p for Sa-Su 10:00 AM - 10:00 PM
  const openingHoursSaSu = document.createElement("p");
  openingHoursSaSu.textContent = "Saturday & Sunday:    10:00 AM - 10:00 PM";
  openingHoursDiv.appendChild(openingHoursSaSu);

  // Contact Info - Div
  const contactInfoDiv = document.createElement("div");
  contactPageDiv.appendChild(contactInfoDiv);

  // Contact Info - Title
  const contactInfoTitle = document.createElement("h3");
  contactInfoTitle.textContent = "Contact Us";
  contactInfoDiv.appendChild(contactInfoTitle);

  // Contact Info - Text
  const contactInfoText = document.createElement("p");
  contactInfoText.textContent = "";
  contactInfoDiv.appendChild(contactInfoText);

  // Contact Info - Adress
  const contactInfoAdress = document.createElement("p");
  contactInfoAdress.textContent =
    "Address:    123 Willow Grove Lane, Greenhaven, Everland. Just steps from the town square, with ample street parking available.";
  contactInfoDiv.appendChild(contactInfoAdress);

  // Contact Info - Phone Number
  const contactInfoPhone = document.createElement("p");
  contactInfoPhone.textContent = "Phone:    +99 123 456 7890";
  contactInfoDiv.appendChild(contactInfoPhone);

  // Contact Info - E-Mail Adress
  const contactInfoEmail = document.createElement("p");
  contactInfoEmail.textContent = "Email:    hello@willowtable.cyou";
  contactInfoDiv.appendChild(contactInfoEmail);

  // Make div for "Follow us"
  const followUsDiv = document.createElement("div");
  contactPageDiv.appendChild(followUsDiv);

  // Make p with link for Platter
  const followUsPlatter = document.createElement("p");
  followUsPlatter.textContent = "Platter:    @TheWillowTable";
  followUsDiv.appendChild(followUsPlatter);

  // Make p with link for LeafLink
  const followUsLeafLink = document.createElement("p");
  followUsLeafLink.textContent = "LeafLink:    The Willow Table";
  followUsDiv.appendChild(followUsLeafLink);

  // Make p with link for Echo
  const followUsEcho = document.createElement("p");
  followUsEcho.textContent = "Echo: #TheWillowTable";
  followUsDiv.appendChild(followUsEcho);

  // Make div for other info
  const otherInfoDiv = document.createElement("div");
  contactPageDiv.appendChild(otherInfoDiv);

  // Make h3 for "Accessability"
  const accessTitle = document.createElement("h3");
  accessTitle.textContent = "Accessability";
  otherInfoDiv.appendChild(accessTitle);

  // Make p for text
  const accessText = document.createElement("p");
  accessText.textContent =
    "We're proud to offer a wheelchair-accessible space and will happily accommodate any dietary needs. Just let us know when you visit!";
  otherInfoDiv.appendChild(accessText);

  // Make h3 for "Helpful notes"
  const notesTitle = document.createElement("h3");
  notesTitle.textContent = "Helpful Notes";
  otherInfoDiv.appendChild(notesTitle);

  // Make p for text
  const notesText = document.createElement("p");
  notesText.textContent =
    "We are a cashless establishment — please bring a card or use your favorite digital payment method.";
  otherInfoDiv.appendChild(notesText);
};

export default loadContactPage;
