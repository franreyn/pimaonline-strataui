// Contains function to add id attributes to create the page's grid.
import { courseBody, contentWrapper, secondColumn, columnWidget, videoWrapper } from "./variables";

const addGrid = (): void => {

  // Typescript requires checking for courseBody
  if (courseBody !== null) {
    if (contentWrapper && secondColumn && !columnWidget) {
      courseBody.id = "two-column";
      // If contentWrapper, secondColumn, and columnWidget all exist, the id of courseBody is set to "two-col-widget"
    } else if (contentWrapper && secondColumn && columnWidget) {
      courseBody.id = "two-col-widget";
      // If contentWrapper and videoWrapper both exist, the id of courseBody is set to "video-grid"
    } else if ((contentWrapper && videoWrapper)) {
      courseBody.id = "video-grid";
      // If only contentWrapper exists and secondColumn, thirdColumn, columnWidget, and videoWrapper do not exist, the id of courseBody is set to "one-column"
    } else if (contentWrapper && !secondColumn && !columnWidget && !videoWrapper) {
      courseBody.id = "one-column";
      // If contentWrapper exists, secondColumn does not exist, and either thirdColumn or columnWidget exists, an error message is logged stating that <body> is missing an id because #second-column doesn’t exist
    } else if (contentWrapper && !secondColumn && columnWidget) {
      // Error message for when the second column's container does not contain #second-column
      console.log("Document error: <body> is missing id because #second-column doesn't exist.");
      // If none of the above conditions are met, an error message is logged stating that the page layout could not be determined for setting <body> id
    } else {
      // Error message for when there are no layout classes present
      console.log("Document error: unable to determine the page layout for setting <body> id.");
    }

    const topLevelElements = document.body.children;
    let foundNestedElement = false;

    // Check for additional content outside #content-wrapper, #second-column, #third-column, or footer. 
    for (let i = 0; i < topLevelElements.length; i++) {
      const element = topLevelElements[i];

      // Checks each element in the topLevelElements array. If an element doesn’t match certain id, tagName, or className conditions, it sets foundNestedElement to true and stops the loop. Essentially, it’s searching for a specific type of element in the array.
      if (
        element.tagName !== "CONTENT-WRAPPER" &&
        element.tagName !== "SECOND-COLUMN" &&
        element.id !== "column-widget" &&
        element.tagName !== "HEADER" &&
        element.tagName !== "FOOTER" &&
        element.tagName !== "SCRIPT" &&
        element.id !== "loom-companion-mv3" &&
        element.className !== "focus-reader-switches"
      ) {
        foundNestedElement = true;
        break;
      }
    }

    // Checks the foundNestedElement variable. If it’s true, it logs an error message indicating there’s additional content outside specified elements.
    if (foundNestedElement) {
      // Error message for there are elements outside of the grid structure
      console.log("Document error: Additional content outside #content-wrapper, #second-column, #third-column, or footer.");
    }
    // If foundNestedElement is false, it logs an error message indicating no <body> element was found in the document.
  } else {
    // Error message for when there is no body element in the document
    console.log("Document error: no <body> element found.");
  }
};
// Call function to add grid styles to page
addGrid();