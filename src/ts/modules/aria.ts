import { m } from "./variables";
import { customElementAria } from "../config";
console.log(m);


// Function to add aria label to custom elements
customElementAria.forEach((customElement) => {

  // For each custom element, find all instances on the page
  let customHtmlAriaElements = document.querySelectorAll(customElement.customHtmlTag);

  customHtmlAriaElements.forEach((customHtmlAriaElement) => {
    // For each instance, set the corresponding aria attribute and value
    if (customHtmlAriaElement instanceof HTMLElement) {
      customHtmlAriaElement.setAttribute(customElement.ariaProp, customElement.ariaValue);
    } else {
      console.error("Element is not an HTMLElement:", customHtmlAriaElement);
    }

  })

})  