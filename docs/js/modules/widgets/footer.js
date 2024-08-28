export const footerWidgetJs = () => {
  const footer = document.querySelector("footer");

  const handleFooter = footer => {
    // Check if the footer already has a container to avoid adding multiple containers
    let existingFooterContainer = footer.querySelector("#footer");
    if (existingFooterContainer) {
      // If the footer container already exists, just return
      return;
    }

    // Create a new div element for the footer container
    const footerContainer = document.createElement("div");
    footerContainer.setAttribute("id", "footer");

    // Create a new toggle element
    const footerToggle = document.createElement("button");
    footerToggle.classList.add("toggle-footer");
    footerToggle.classList.add("text-center");
    footerToggle.tabIndex = 0;
    footerToggle.innerHTML = "[Show Footnotes]";

    // Create a new div element for footer content
    const footerContent = document.createElement("div");
    footerContent.classList.add("footnotes");

    // Capture all the content in existing footer and move inside footerContentDiv
    const footerTextContent = footer.innerHTML;
    footer.innerHTML = "";
    footerContent.innerHTML = footerTextContent;

    // Append the footerContainer to the footer
    footer.appendChild(footerContainer);

    // Append the footerContentDiv to the footerContainer
    footerContainer.appendChild(footerToggle);
    footerContainer.appendChild(footerContent);

    // Initially hide the footer content
    footerContent.style.display = "none";

    // Show/hide on click
    footerToggle.addEventListener("click", () => {
      const isShowing = footerContent.style.display === "block";
      footerToggle.innerHTML = isShowing ? "[Show Footnotes]" : "[Hide Footnotes]";
      footerContent.style.display = isShowing ? "none" : "block";
    });
  };

  if (footer) {
    handleFooter(footer);
  }
};
