// Toggle footnotes
const toggleBtns: NodeListOf<HTMLElement> = document.querySelectorAll(".toggle-btn, .toggle-footnotes");

const handleToggleButtons = () => {
  // Check if there are any elements with the class "toggle-btn" or "toggle-footnotes"
  if (document.querySelector(".toggle-btn") || document.querySelector(".toggle-footnotes")) {
    // Iterate over each toggle button
    for (let toggleBtn = 0; toggleBtn < toggleBtns.length; toggleBtn++) {
      // Add tabindex
      toggleBtns[toggleBtn].setAttribute("tabindex", "0");
      // Show/hide on click
      toggleBtns[toggleBtn].addEventListener("click", () => {
        const nextElement: Element | null = toggleBtns[toggleBtn].nextElementSibling;
        if (nextElement) {
          nextElement.classList.toggle("show");
        }
      });

      // Show/hide on enter for users who use tab
      toggleBtns[toggleBtn].addEventListener("keydown", (enter: KeyboardEvent) => {
        if (enter.key === "Enter") {
          const nextElement: Element | null = toggleBtns[toggleBtn].nextElementSibling;
          if (nextElement) {
            nextElement.classList.toggle("show");
          }
        }
      });
    }
  }
}

if (toggleBtns.length > 0) { handleToggleButtons(); }