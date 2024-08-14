// Contains function to add id attributes to create the page's grid.
import { courseBody, columnOne, columnTwo } from "./variables";

const addGrid = (): void => {

  // Typescript requires checking for courseBody
  if (courseBody !== null) {
    if (columnOne && columnTwo) {
      courseBody.id = "two-column";
    }
    // If only columnOne exists and columnTwo, thirdColumn, columnWidget, and videoWrapper do not exist, the id of courseBody is set to "one-column"
    else if (columnOne && !columnTwo) {
      courseBody.id = "one-column";
      // If columnOne exists, columnTwo does not exist, and either thirdColumn or columnWidget exists, an error message is logged stating that <body> is missing an id because column-two doesn’t exist
    }
    else {
      // Error message for when there are no layout classes present
      console.warn("Document error: unable to determine the page layout for setting <body> id.");
    }

    const topLevelElements: HTMLCollection = document.body.children;
    let foundNestedElement = false;

    // Check for additional content outside #content-wrapper, column-two, #third-column, or footer. 
    for (let i: number = 0; i < topLevelElements.length; i++) {
      const element: Element = topLevelElements[i];

      // Checks each element in the topLevelElements array. If an element doesn’t match certain id, tagName, or className conditions, it sets foundNestedElement to true and stops the loop. Essentially, it’s searching for a specific type of element in the array.
      if (
				!element.classList.contains("column-one") &&
				!element.classList.contains("column-two") &&
        element.tagName !== "HEADER" &&
        element.tagName !== "FOOTER" &&
        element.tagName !== "SCRIPT" &&
        element.id !== "loom-companion-mv3" &&
        element.className !== "focus-reader-switches" // (review - should this be removed?)
      ) {
        foundNestedElement = true;
        break;
      }
    }

    // Checks the foundNestedElement variable. If it’s true, it logs an error message indicating there’s additional content outside specified elements.
    if (foundNestedElement) {
      // Error message for there are elements outside of the grid structure
      console.warn("Document error: additional content outside #content-wrapper, column-two, #third-column, or footer.");
    }
    // If foundNestedElement is false, it logs an error message indicating no <body> element was found in the document.
  } else {
    // Error message for when there is no body element in the document
    console.warn("Document error: no <body> element found.");
  }
};
// Call function to add grid styles to page
addGrid();