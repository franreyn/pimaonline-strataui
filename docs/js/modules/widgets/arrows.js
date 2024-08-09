export const arrowsWidgetJs = () => {
  // This code runs without needing any specific widgets to be on the page and just handles the animation for arrows turning when clicked
  const arrowRightElements = document.querySelectorAll(".arrow-right");

  const handleArrowRotation = () => {

    // Loop through all elements that have the "arrow-right" class and add event listener
    arrowRightElements.forEach((arrow) => {

      // Add an event listener for any HTML elements that have the ".arrow-right" class
      arrow.addEventListener("click", (event) => {

        // Cast event target type to HTML element and access classes and toggl the "arrow-down" class
        (event.target).classList.toggle("arrow-down");
      });
    });
  }

  if (arrowRightElements.length > 0) {
    handleArrowRotation();
  }
}