// Edit Font Awesome Version Number
export const fontAwesomeVersionNum: string = "6.5.2";



/* Configure changing custom tag names into semantic normal HTML tags. key should be the custom tag you are targetting, and the value should be the standard HTML tag you want to replace it with.
 */
export const customTagPairs: { [customTagName: string]: string } =  {
  "vocab-cards-widget": "ul",
  "vocab-card": "li",
}

// Variable used to define custom HTML tags
// To add new custom elements, add new objects here
export const customElementsData: { jsxName: string, customHtmlTag: string }[] = [
  { jsxName: "CallOutWidget", customHtmlTag: "callout-widget" },
  { jsxName: "AssignmentsWidget", customHtmlTag: "assignments-widget" },
  { jsxName: "AssignmentItem", customHtmlTag: "assignment-item" },
  { jsxName: "AccordionWidget", customHtmlTag: "accordion-widget" },
  { jsxName: "AccordionItem", customHtmlTag: "accordion-item" },
  { jsxName: "AccordionContent", customHtmlTag: "accordion-content" },
  { jsxName: "ColumnOne", customHtmlTag: "column-one" },
  { jsxName: "ColumnTwo", customHtmlTag: "column-two" },
  { jsxName: "ContentBlock", customHtmlTag: "content-block" },
  { jsxName: "MediaWidget", customHtmlTag: "media-widget" },
  { jsxName: "MediaObject", customHtmlTag: "media-object" },
  { jsxName: "MediaInfo", customHtmlTag: "media-info" },
  { jsxName: "ColumnsWidget", customHtmlTag: "columns-widget" },
  { jsxName: "SliderWidget", customHtmlTag: "slider-widget" },
  { jsxName: "SliderItem", customHtmlTag: "slider-item" },
  { jsxName: "TabsWidget", customHtmlTag: "tabs-widget" },
  { jsxName: "TabTitle", customHtmlTag: "tab-title" },
  { jsxName: "TabContent", customHtmlTag: "tab-content" },
  { jsxName: "VocabCardsWidget", customHtmlTag: "vocab-cards-widget" },
  { jsxName: "VocabCard", customHtmlTag: "vocab-card" },
  { jsxName: "MutedLabel", customHtmlTag: "muted-label" },
  { jsxName: "DefaultLabel", customHtmlTag: "default-label" },
  { jsxName: "SuccessLabel", customHtmlTag: "success-label" },
  { jsxName: "WarningLabel", customHtmlTag: "warning-label" },
  { jsxName: "DangerLabel", customHtmlTag: "danger-label" },
  { jsxName: "InfoLabel", customHtmlTag: "info-label" },
];

// Variable used to know which custom elements  (jsx name, aria property ,aria value)
export const customElementAria: { customHtmlTag: string, ariaProp: string, ariaValue: string }[] = [
  { customHtmlTag: "assignments-widget", ariaProp: "role", ariaValue: "list" },
  { customHtmlTag: "assignment-item", ariaProp: "role", ariaValue: "listItem" },
  { customHtmlTag: "column-one", ariaProp: "role", ariaValue: "main" },
  { customHtmlTag: "column-two", ariaProp: "role", ariaValue: "region" },
];