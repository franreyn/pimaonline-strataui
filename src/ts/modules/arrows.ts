// This code runs without needing any specific widgets to be on the page and just handles the animation for arrows turning when clicked
const arrowRightElements: NodeListOf<HTMLElement> = document.querySelectorAll(".arrow-right");

const handleArrowRotation = () => {

  // Loop through all elements that have the "arrow-right" class and add event listener
  arrowRightElements.forEach((arrow: HTMLElement) => {

    // Add an event listener for any HTML elements that have the ".arrow-right" class
    arrow.addEventListener("click", (event: Event) => {

      // Cast event target type to HTML element and access classes and toggl the "arrow-down" class
      (event.target as HTMLElement).classList.toggle("arrow-down");
    });
  });
}

if (arrowRightElements.length > 0) {
  handleArrowRotation();
}