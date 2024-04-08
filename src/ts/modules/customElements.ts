import { customElementsData } from "../config";

// Create base class (in order to use a custom element, you need a constructor)
class CustomElementBase extends HTMLElement {
  constructor() {
    super();
  }
}

// Loops through the customElementsData variable that is imported and defines it to the DOM
customElementsData.forEach((customElement: { jsxName: string, customHtmlTag: string }) => {

  // This takes the base constructor and uses it to create an HTML Object that is tied to each custom element
  class CustomElement extends CustomElementBase {
    constructor() {
      super();
    }
  }

  customElements.define(customElement.customHtmlTag, CustomElement); // This defines the tag as a custom element to the DOM
});