export const toggleButtonsJs = () => {
  // Toggle footnotes
  const toggleBtns = document.querySelectorAll(".toggle-btn, .toggle-footnotes");

  const handleToggleButtons = () => {
    // Check if there are any elements with the class "toggle-btn" or "toggle-footnotes"
    if (document.querySelector(".toggle-btn") || document.querySelector(".toggle-footnotes")) {
      // Iterate over each toggle button
      toggleBtns.forEach((toggleBtn) => {
        // Add tabindex
        toggleBtn.setAttribute("tabindex", "0");

        // Show/hide on click
        toggleBtn.addEventListener("click", () => {
          const nextElement = toggleBtn.nextElementSibling;
          if (nextElement) {
            nextElement.classList.toggle("show");
          }
        });

        // Show/hide on enter for users who use tab
        toggleBtn.addEventListener("keydown", (enter) => {
          if (enter.key === "Enter") {
            const nextElement = toggleBtn.nextElementSibling;
            if (nextElement) {
              nextElement.classList.toggle("show");
            }
          }
        });
      });
    }
  }

  if (toggleBtns.length > 0) { handleToggleButtons(); }
}