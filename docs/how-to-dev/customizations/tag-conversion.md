# Tag Conversion

This file will take the `customTagPairs` object and swap custom tags for the semantic HTML tag along with any existing attributes and classes.

## config.ts

### Editing Tag Conversions

You do not need to edit the `tagConversion.ts` file. If you need to change any tags, please edit the object in `config.ts`

```js
export const customTagPairs: { [customTagName: string]: string } =  {
  "vocab-cards-widget": "ul",
  "vocab-card": "li",
}
```

## tagConversion.ts

```js
// Imported object mapping custom tag names to standard tag names
import { customTagPairs } from '../config'; // Adjust path as per your project structure

// Wrap setTimeout in a Promise for asynchronous behavior
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Refactored event listener using async/await
document.addEventListener("DOMContentLoaded", async () => {

  try {
    await delay(500); // Wait for 500ms

    // Replace custom tags using imported object
    Object.keys(customTagPairs).forEach(customTagName => {
      const standardTagName: string = customTagPairs[customTagName];
      replaceCustomTags(customTagName, standardTagName);
    });

  } catch (error) {
    console.error("Error occurred:", error);
  }
});

// Function to replace custom tags
export function replaceCustomTags(customTagName: string, standardTagName: string) {

  // Get all custom elements
  const customElements: NodeListOf<HTMLElement> = document.querySelectorAll(customTagName);

  customElements.forEach(customElement => {
    // Create the new standard element
    const newElement: HTMLElement = document.createElement(standardTagName);

    // Copy the attributes from the custom element to the new element
    for (const attribute of customElement.attributes) {
      newElement.setAttribute(attribute.name, attribute.value);
    }

    // Move the children from the custom element to the new element
    while (customElement.firstChild) {
      newElement.appendChild(customElement.firstChild);
    }

    // Replace the custom element with the new element in the DOM
    customElement.replaceWith(newElement);
  });
}
```