// Variable used to define custom HTML tags
// To add new custom elements, add new objects here
export const customElementsData: { jsxName: string, customHtmlTag: string }[] = [
  { jsxName: "CallOutWidget", customHtmlTag: "callout-widget" },
  { jsxName: "AssignmentsWidget", customHtmlTag: "assignments-widget" },
  { jsxName: "AssignmentItem", customHtmlTag: "assignment-item" },
  { jsxName: "ContentWrapper", customHtmlTag: "content-wrapper" },
  { jsxName: "SecondColumn", customHtmlTag: "second-column" },
  { jsxName: "ContentBody", customHtmlTag: "content-body" },
];

// Variable used to know which custom elements  (jsx name, aria property ,aria value)
export const customElementAria: { customHtmlTag: string, ariaProp: string, ariaValue: string }[] = [
  { customHtmlTag: "assignments-widget", ariaProp: "role", ariaValue: "list" },
  { customHtmlTag: "assignment-item", ariaProp: "role", ariaValue: "listItem" },
  { customHtmlTag: "content-wrapper", ariaProp: "role", ariaValue: "main" },
  { customHtmlTag: "second-column", ariaProp: "role", ariaValue: "region" },
];