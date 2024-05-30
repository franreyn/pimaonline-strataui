const strataBody = document.querySelector("body");
const strataDarkModeBtn = document.querySelector(".navbar button");
strataDarkModeBtn.id = "dark-mode-btn";

// Check the stored dark mode preference on page load
let strataDarkMode = localStorage.getItem("strataDarkMode") === "true";
let strataLocalStorage = localStorage;

// Apply the dark mode if it was previously enabled
if (strataDarkMode) {
  strataBody.setAttribute("dark-mode", "");
  strataDarkModeBtn.classList.add("active");
}

strataDarkModeBtn.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  strataDarkMode = !strataDarkMode;
  // Update the dark mode attribute and button state
  if (strataDarkMode) {
    strataBody.setAttribute("dark-mode", "");
    strataDarkModeBtn.classList.add("active");
  } else {
    strataBody.removeAttribute("dark-mode");
    strataDarkModeBtn.classList.remove("active");
  }
  // Store the current dark mode preference in localStorage
  strataLocalStorage.setItem("strataDarkMode", strataDarkMode);
}
