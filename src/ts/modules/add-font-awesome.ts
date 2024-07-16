import { fontAwesomeVersionNum } from "../config";

// Create a link element
const fontAwesomeLink = document.createElement('link');

// Get the document head
const documentHead = document.head;

// Define the Font Awesome CDN URL
const fontAwesomeCdn = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${fontAwesomeVersionNum}/css/all.min.css`;

// Add Font Awesome attributes and add the link to the document head
fontAwesomeLink.setAttribute("href", `${fontAwesomeCdn}`);
fontAwesomeLink.setAttribute("rel", "stylesheet");

// Append the link to the document head
documentHead.appendChild(fontAwesomeLink);