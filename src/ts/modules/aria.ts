import { customElementAria } from "../config";

// Function to add ARIA labels to custom elements
const addAriaLabels = () => {
  customElementAria.forEach(({ customHtmlTag, ariaProp, ariaValue }) => {
    // Find all instances of the custom element on the page
    const customHtmlAriaElements: NodeListOf<HTMLElement> = document.querySelectorAll(customHtmlTag);

    // Set the ARIA attribute and value for each instance
    customHtmlAriaElements.forEach((customHtmlAriaElement: HTMLElement) => {
      customHtmlAriaElement.setAttribute(ariaProp, ariaValue);
    });
  });
};

// Ensure the script runs after the document is fully loaded
document.addEventListener('DOMContentLoaded', addAriaLabels);