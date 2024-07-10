// Define the type for tabsWidgets
const tabsWidgets: NodeListOf<Element> = document.querySelectorAll("tabs-widget");

// Define the type for callTabsWidget function
const callTabsWidget = () => {

  // Define the type for tabsWidgetNum
  let tabsWidgetsNum: number = 0;

  tabsWidgets.forEach((tabsWidget, index) => {
    let tabInputs: NodeListOf<HTMLInputElement> = tabsWidget.querySelectorAll("input");
    let tabLabels: NodeListOf<HTMLLabelElement> = tabsWidget.querySelectorAll("label");
    let tabDivs: NodeListOf<HTMLDivElement> = tabsWidget.querySelectorAll("tab-content");

    // Check that there are more than just one tab
    if (tabInputs.length < 2 || tabLabels.length < 2 || tabDivs.length < 2) {
      console.warn("Document error: add more than just one tab for tabs widget");
    }

    // If there is just the hide tab and 1 other tab throw an error
    if (tabInputs.length < 3 || tabLabels.length < 3 || tabDivs.length < 3) {
      let LabelSpan: HTMLElement | null = tabLabels[1].querySelector("tab-title");
      if (LabelSpan) {
        if (LabelSpan.textContent === "Hide" || LabelSpan.textContent === "") {
          console.warn("Document error: add more tabs, than just 1 tab and the hide tab");
        }
      }
    }

    // Check that the last tab is a hide tab 
    let lastTabLabelIndex: number = tabLabels.length - 1;
    let lastTabLabelSpan: HTMLElement | null = tabLabels[lastTabLabelIndex].querySelector("tab-title");
    if (lastTabLabelSpan) {
      if (lastTabLabelSpan.textContent !== "Hide") {
        console.warn("Document error: ensure last tab is a hide tab and label text is 'Hide'")
      }
    }

    // Check amount of tab elements present 
    if (tabInputs.length < tabLabels.length || tabInputs.length < tabDivs.length) {
      console.warn("Document error: missing tab input(s) in tab widget");
    }

    if (tabLabels.length < tabInputs.length || tabLabels.length < tabDivs.length) {
      console.warn("Document error: missing tab label(s) in tab widget");
    }

    let tabGroupNum: number = index + 1;

    // Add region and aria-label to parent div      
    tabsWidget.setAttribute("role", "region");
    tabsWidget.setAttribute("aria-label", `tab group ${tabGroupNum}`);

    // Iterate over the entries of the tabInputs NodeList using a for loop. Inside the loop, tabIndex is the index of the current tab input element. tabInput is the actual input element itself.
    for (let tabIndex: number = 0; tabIndex < tabInputs.length; tabIndex++) {

      // Add the hide-tab class to the "Hide" label
      if (tabLabels[tabIndex]?.textContent?.trim() === "Hide") {
        tabLabels[tabIndex].classList.add("hide-tab");
      }

      let tabNum: number = tabsWidgetsNum + 1;

      // Check on present variables
      if (!tabInputs || !tabDivs) {
        console.warn("Document error: no inputs found for tabs widget");
        console.warn("Document error: no divs (tab panels) found for tabs widget");
      }

      if (!tabLabels) {
        console.warn("Document error: no labels found for tabs widget");
      }

      // Add class, id, name, and aria-described by for inputs
      tabInputs[tabIndex]?.classList.add("tab-input");
      tabInputs[tabIndex]?.setAttribute("type", "radio");
      tabInputs[tabIndex]?.setAttribute("id", `tab${tabNum}`);
      tabInputs[tabIndex]?.setAttribute("name", `hint-group-${tabGroupNum}`);
      tabInputs[tabIndex]?.setAttribute("aria-describedby", `tabHeading${tabNum}`);

      // Add class and for for labels
      tabLabels[tabIndex]?.classList.add("tab-header");
      tabLabels[tabIndex]?.setAttribute("for", `tab${tabNum}`);

      // Add class, tabindex, and id for divs
      if (tabDivs[tabIndex]) {
        tabDivs[tabIndex]?.classList.add("tab-panel");
        tabDivs[tabIndex]?.setAttribute("tabindex", "0");
        tabDivs[tabIndex]?.setAttribute("id", `tabHeading${tabNum}`);
      }

      // Add attributes ensure the first tab is open
      if (tabIndex === 0) {
        tabInputs[tabIndex].checked = true; // Check the first tab input and set checked to true
      } else {
        tabInputs[tabIndex].checked = false;
      }

      //Add attributes for hide tab
      if (tabIndex + 1 == tabInputs.length) {
        tabLabels[tabIndex].classList.add("hide-tab");
        if (tabDivs[tabIndex]) {
          tabDivs[tabIndex].classList.add("hide-panel");
        }
      }
      tabsWidgetsNum++;
    }
  });
};

// Check if tabsWidgets exist before calling callTabsWidget function
if (tabsWidgets.length > 0) {
  callTabsWidget();
}
