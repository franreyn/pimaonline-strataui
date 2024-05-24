const docsBody = document.querySelector("body");
const docsDarkModeBtn = document.querySelector(".navbar button");
docsDarkModeBtn.id = "dark-mode-btn";

// Check the stored dark mode preference on page load
let darkMode = localStorage.getItem("darkMode") === "true";

// Apply the dark mode if it was previously enabled
if (darkMode) {
  docsBody.setAttribute("dark-mode", "");
  docsDarkModeBtn.classList.add("active");
}

docsDarkModeBtn.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  darkMode = !darkMode;
  // Update the dark mode attribute and button state
  if (darkMode) {
    docsBody.setAttribute("dark-mode", "");
    docsDarkModeBtn.classList.add("active");
  } else {
    docsBody.removeAttribute("dark-mode");
    docsDarkModeBtn.classList.remove("active");
  }
  // Store the current dark mode preference in localStorage
  localStorage.setItem("darkMode", darkMode);
}