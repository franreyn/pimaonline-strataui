const strataBody = document.querySelector("body");
const strataDarkModeBtn = document.querySelector(".navbar button");
strataDarkModeBtn.id = "dark-mode-btn";
const topLogo = document.querySelector('.logo');

// Check the stored dark mode preference on page load
let strataDarkMode = localStorage.getItem("strataDarkMode") === "true";
let strataLocalStorage = localStorage;

// Apply the dark mode if it was previously enabled
if (strataDarkMode) {
  strataBody.setAttribute("dark-mode", "");
  strataDarkModeBtn.classList.add("active");
}

strataDarkModeBtn.addEventListener("click", toggleDarkMode);

// Change the logo based on dark mode
const darkModeLogo = () => {
  let strataBody = document.querySelector("body");

	if (strataBody?.hasAttribute('dark-mode')) {
    topLogo?.setAttribute('src', '../../_images/full-logo_white.png');
  } else {
    topLogo?.setAttribute('src', '../../_images/full-logo_dark.png');
  }
};

if(topLogo) {
  darkModeLogo();
}

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
  console.log("dark mode toggled")
  darkModeLogo();
}