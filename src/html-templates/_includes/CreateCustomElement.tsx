import React from "react";
import { customElementsData } from "../../ts/config";

// Function to generate custom element. Returns a function that renders a ReactElement with children.
const createCustomElement = (elementName: string) => {
  return (props: React.PropsWithChildren<any>): React.ReactElement => {
    const { className, ...otherProps } = props; // Destructure className from props

    // Create an object for props to pass to React.createElement
    const elementProps: any = { ...otherProps };

    // If className is provided, add it to the elementProps object as class
    if (className) {
      elementProps.class = className;
    }

    return React.createElement(elementName, elementProps, props.children);
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
