import { fontAwesomeVersionNum } from "../config";

// Define the Font Awesome CDN URL
const fontAwesomeCdn: string = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${fontAwesomeVersionNum}/css/all.min.css`;

// Helper function to set multiple attributes
const setAttributes = (element: HTMLElement, attributes: { [key: string]: string }) => {
  Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
}

// Function to load Font Awesome
const loadFontAwesome = () => {
  // Ensure document.head exists
  const documentHead: HTMLElement | null = document.head;
  if (!documentHead) {
    console.error('Document Error: document.head is not available.');
    return;
  }

  // Create a link element
  const fontAwesomeLink: HTMLLinkElement = document.createElement('link');

  // Set attributes
  setAttributes(fontAwesomeLink, {
    href: fontAwesomeCdn,
    rel: "stylesheet"
  });

  // Append the link to the document head
  documentHead.appendChild(fontAwesomeLink);
}

// Load Font Awesome after the document is fully loaded
document.addEventListener('DOMContentLoaded', loadFontAwesome);