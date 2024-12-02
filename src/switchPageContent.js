// Switch Page content for smooth transition
const switchPageContent = (newPageFunction) => {
  // Get content div
  const contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = "";

  // Make new temporary content container
  const newContentDiv = document.createElement("div");
  newContentDiv.classList.add("new-content");

  contentDiv.appendChild(newContentDiv);

  setTimeout(() => {
    newContentDiv.classList.add("visible");
  }, 0);

  newPageFunction(newContentDiv);

  setTimeout(() => {
    newContentDiv.classList.remove("new-content");
  }, 500);

  console.log(newContentDiv);
};

export default switchPageContent;
