/**
  * Define Custom Elements: The customElementsData array specifies custom elements.
  * Base Class: BaseWidget provides common setup for custom elements.
  * Create and Register Elements: createCustomElements function creates new custom element classes and registers them with the browser.
 */

// Data for custom elements
export const customElementsData = [
  { jsxName: "CallOutWidget", customHtmlTag: "callout-widget" },
  { jsxName: "AssignmentsWidget", customHtmlTag: "assignments-widget", ariaProp: "role", ariaValue: "list" },
  { jsxName: "AssignmentItem", customHtmlTag: "assignment-item", ariaProp: "role", ariaValue: "listItem" },
  { jsxName: "AccordionWidget", customHtmlTag: "accordion-widget" },
  { jsxName: "AccordionItem", customHtmlTag: "accordion-item" },
  { jsxName: "AccordionContent", customHtmlTag: "accordion-content" },
  { jsxName: "ColumnOne", customHtmlTag: "column-one", ariaProp: "role", ariaValue: "main" },
  { jsxName: "ColumnTwo", customHtmlTag: "column-two", ariaProp: "role", ariaValue: "region" },
  { jsxName: "ContentBlock", customHtmlTag: "content-block" },
  { jsxName: "MediaWidget", customHtmlTag: "media-widget" },
  { jsxName: "MediaObject", customHtmlTag: "media-object" },
  { jsxName: "MediaInfo", customHtmlTag: "media-info" },
  { jsxName: "ColumnsWidget", customHtmlTag: "columns-widget" },
];

// Function to define a custom element with the given name and class
export function defineCustomElement(name, elementClass) {
  customElements.define(name, elementClass); // Define a custom element with the given name and class
}

// Base class for custom elements that sets up a shadow DOM and common features
export class BaseWidget extends HTMLElement {
  constructor() {
    super(); // Call the parent class's constructor
    this.attachShadow({ mode: "open" }); // Attach a shadow DOM tree to this instance
    this.applyStyles(); // Apply styles to the shadow DOM
    this.createSlot(); // Create a slot for content projection
  }

  // Method to apply styles to the shadow DOM
  applyStyles() {
    const style = document.createElement("style"); // Create a <style> element
    style.textContent = this.getStyles(); // Set its content to the styles provided by getStyles method
    this.shadowRoot.appendChild(style); // Append the style element to the shadow root
  }

  // Method to create a slot for content projection
  createSlot() {
    const slot = document.createElement("slot"); // Create a <slot> element
    this.shadowRoot.appendChild(slot); // Append the slot element to the shadow root
  }

  // Method to get styles, to be overridden by subclasses
  getStyles() {
    // Override this method in subclasses to provide custom styles
    return "";
  }

  // Method to set ARIA attributes
  setAriaAttributes(ariaAttributes) {
    for (const [prop, value] of Object.entries(ariaAttributes)) {
      this.setAttribute(prop, value);
    }
  }
}

// Factory function to create and define custom elements
export function createCustomElements(config) {
  config.forEach(({ customHtmlTag, ariaProp, ariaValue }) => {
    class CustomElement extends BaseWidget {
      constructor() {
        super();
        if (ariaProp && ariaValue) {
          this.setAriaAttributes({ [ariaProp]: ariaValue });
        }
      }

      // Optionally, add custom styles for each element here
      getStyles() {
        return ""; // Add styles as needed
      }
    }

    // Define the custom element
    defineCustomElement(customHtmlTag, CustomElement);
  });
}

// Call the function to define custom elements
createCustomElements(customElementsData);
