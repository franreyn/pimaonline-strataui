// Contains function to add aria roles and aria-labels to div elements that create the page's grid.
import { contentWrapper, secondColumn } from "./variables";

// JS to add role and aria-label to content-wrapper, second-column, and third-column
const addAria = (): void => {
  // This checks if contentWrapper is defined and truthy. If it is, it sets the role attribute of contentWrapper to "main".
  if (contentWrapper) {
    contentWrapper.setAttribute("role", "main");
    // This is the counterpart to the first if statement. It checks if contentWrapper is falsy. If it is, it logs an error message to the console stating that the document does not contain an element with the id content-wrapper.
  } else if (!contentWrapper) {
    console.log("Document error: does not contain #content-wrapper.");
  }
  // This checks if secondColumn is defined and truthy. If it is, it sets the role attribute of secondColumn to "region" and the aria-label to "Second column".
  if (secondColumn) {
    secondColumn.setAttribute("role", "region");
    secondColumn.setAttribute("aria-label", "Second column");
  }
};
// Call function to add accessibility elements to page grid.
addAria();