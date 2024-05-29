// Function to define a custom element
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
}

// Subclass of BaseWidget, specific for the "columns-widget" element
export class ColumnsWidget extends BaseWidget {
  // Override the getStyles method to provide custom styles for ColumnsWidget
  getStyles() {
    return "";
  }
}
