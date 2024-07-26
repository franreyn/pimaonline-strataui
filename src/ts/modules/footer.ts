const footer: HTMLElement | null = document.querySelector("footer");

const handleFooter = (footer: HTMLElement) => {

  // Create a new div element
  const footerContainer = document.createElement("div");
  footerContainer.setAttribute("id", "footer");

  // Create a new toggle element
  const footerToggle = document.createElement("button");
  footerToggle.classList.add("toggle-footer");
  footerToggle.classList.add("text-center");
  footerToggle.tabIndex = 0;
  footerToggle.innerHTML = "[Show Footnotes]";

  console.log(footerToggle);

  // Create a new div element
  const footerContent = document.createElement("div");
  footerContent.classList.add("footnotes");

  // Capture all the content in existing footer and move inside footerContentDiv
  const footerTextContent = footer.innerHTML;
  console.log("footer container", footerContainer)
  console.log("footer text content", footerTextContent);
  footer.innerHTML = "";
  footerContent.innerHTML = footerTextContent;

  // Append the footerContainer to the footer
  footer.appendChild(footerContainer);

  // Append the footerContentDiv to the footerContainer
  footerContainer.appendChild(footerToggle);
  console.log("footer appended")
  footerContainer.appendChild(footerContent);

  // Save reference to the next sibling before replacing
  const nextElement: Element | null = footerToggle.nextElementSibling;

  // Show/hide on click
  footerToggle.addEventListener("click", () => {
    footerToggle.textContent = (footerToggle.textContent === "[Show Footnotes]") ? "[Hide Footnotes]" : "[Show Footnotes]";
    if (nextElement) {
      console.log(nextElement);
      nextElement.classList.toggle("show");
    }
  });

};

if (footer) {
  console.log("footer exists");
  handleFooter(footer);
}