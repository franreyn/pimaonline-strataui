# Custom Elements

In Strata CSS, we use JS and HTML to create custom HTML tags that are semantic and accessible. 

## Create a New Custom Element

In order to create a new custom element, you'll need 2 things to start. 

1. The name of the JSX Component in React.
2. The name of the custom HTML tag.

1. JSX React Component

For our test environment, create a new component for each custom element or widget. For this step, just ensure you have a name for the component. The name of the component is needed for the `config.ts` file. 

#### BorderWidget.tsx

```jsx
import React from "react";
import customElements from "./CreateCustomElement";

const BorderWrapper: React.FC<any> = customElements["BorderWidget"]; // Accessing BorderWidget from customElements

export default function BorderWidget(): React.ReactElement {
  return (
    <BorderWrapper>
      <h3>Border Widget</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada, laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh sed imperdiet.
      </p>
    </BorderWrapper>
  )
}
```

2. Custom HTML Tag

The custom HTML tag will render in the final output of the HTML and will allow instructional designers to code the course and utilize them instead of having to remember classes and other tag attributes.

### Custom HTML Tag Rules

In order to ensure custom HTML tags are semantic and work, please follow these rules when deciding on an HTML custom tag name.

1. Has to have a `-` and two words in the tag. 
2. Unless it is a `div` or `span`, you'll most likely need aria information. 
3. Must be declared to the DOM.
4. Must consist of all lowercase letters.
5. If display is not `inline`, ensure to specify that value in CSS.
6. Do not use custom tags to replace core semantic HTML tags (buttons, headings, header, etc.)

#### customElements.ts

This Javascript is responsible for converting any custom HTML elements into defined DOM elements. 

**(do not edit this code)**

```js
import React from "react";
import { customElementsData } from "../../../ts/config";

// Function to generate custom element. Returns a function that renders a ReactElement with children.
const createCustomElement = (elementName: string) => {
  return (props: React.PropsWithChildren<any>): React.ReactElement => {
    return React.createElement(elementName, props, props.children);
  };
};

// Create an object to store custom elements
const customElements: { [key: string]: React.FC<any> } = {};

// Iterate through customElementsData and create custom elements dynamically
customElementsData.forEach((customElement: { jsxName: string, customHtmlTag: string }) => {
  customElements[customElement.jsxName] = createCustomElement(customElement.customHtmlTag);
});

// Export the object containing all custom elements
export default customElements;

```

## Add New Custom Element to Strata CSS

After having a valid custom element name, and after creating a React test component, you'll be ready to add it to Strata CSS officially. 

1. Go to `config.ts`

This file holds all the variables that the user can edit and configure. 

2. Add the object to the array named `customElementsData`

This array takes an object as element. It consists of two strings. The JSX name and custom element HTML tag name.

```js
export const customElementsData: { jsxName: string, customHtmlTag: string }[] = [
  { jsxName: "BorderWidget", customHtmlTag: "border-widget" },
  { jsxName: "AssignmentsWidget", customHtmlTag: "assignments-widget" },
  { jsxName: "AssignmentItem", customHtmlTag: "assignment-item" },
];
```

3. If aria information is needed, add the information to the array named `customElementAria`

This array takes an object as an element. It consists of three strings. The HTML tag name, the aria property, and the value for that aria property. 

```js
// Variable used to know which custom elements  (jsx name, aria property ,aria value)
export const customElementAria: { customHtmlTag: string, ariaProp: string, ariaValue: string }[] = [
  { customHtmlTag: "assignments-widget", ariaProp: "role", ariaValue: "list" },
  { customHtmlTag: "assignment-item", ariaProp: "role", ariaValue: "listItem" },
];
```