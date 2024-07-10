# Tabs

Tabs create small containers for instructors to separate information.


## HTML 

Tabs follow the standard HTML structure as detailed below. 

```html
 <tabs-widget>
        <input />
        <label>
          <tab-title>Tab Title 1</tab-title>
        </label>
        <tab-content>
          <h4>Tab 1 Heading Inside</h4>
          <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as
            short as a couple of sentences.</p>
        </tab-content>
        <input />
        <label>
          <tab-title>Tab Title 2</tab-title>
        </label>
        <tab-content>
          <h4>Tab 2 Heading Inside</h4>
          <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as
            short as a couple of sentences.</p>
        </tab-content>
        <input />
        <label>
          <tab-title>Hide</tab-title>
        </label>
        <tab-content></tab-content>
      </tabs-widget>
```

## CSS

The CSS is located in the `/src/scss/modules/tabs.scss` file. Included is the media query to make tabs responsive on mobile.

```css
tabs-widget {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-bottom: 2.2rem;
  max-width: 860px;

  input {
    position: absolute;
    opacity: 0;

    &:focus {
      outline: 1px dotted #212121;
      outline: 5px auto -webkit-focus-ring-color;
    }

    &:checked {

      + label {
        background-color: var(--color-primary-tint2);
        color: var(--color-primary);
        z-index: 2;
        transition: .5s;
        
        &:nth-last-of-type(2) {
          border-radius: 0;
        }

        + .tab-panel {
          display: block;
          z-index: 1;
          border: 2px solid var(--color-primary-tint1);
          
          &:nth-last-of-type(2) {
            border-radius: 0 0 var(--subtle-radius) var(--subtle-radius);
          }
        }
        
        &.hide-tab {
          background-color: var(--color-white);
          color: var(--color-primary);
          text-decoration: underline;
        }
      }
    }
  } 

  label {
    background-color: var(--color-primary-tint1);
    border-bottom: 1px solid var(--color-primary-tint2);
    padding: 5px;
    width: 100%;
    text-align: center;
    transition: .5s;
    color: var(--color-grey);

    &:first-of-type {
      border-radius: var(--subtle-radius) var(--subtle-radius) 0 0;
    }

    &:nth-last-of-type(2) {
      border-radius: 0 0 var(--subtle-radius) var(--subtle-radius);
    }

    &.hide-tab {
      background-color: transparent !important;
      border: none !important;
      color: var(--color-black);
    }
  }
}

.hide-panel {
  background-color: transparent !important;
  display: none !important;
}

.tab-header:hover {
  cursor: pointer;
}

@media (min-width: 700px) {

  tabs-widget label {
    width: fit-content;
    margin-right: 5px;
    border-radius: var(--subtle-radius) var(--subtle-radius) 0 0;
  }

  tabs-widget label:nth-last-of-type(2), tabs-widget input:checked + label:nth-last-of-type(2), tabs-widget label:nth-last-of-type(2),tabs-widget input:checked + label:nth-last-of-type(2) {
    border-radius: var(--subtle-radius) var(--subtle-radius) 0 0;
  }

  .tab-panel, tabs-widget input:checked + label + .tab-panel:nth-last-of-type(2), tabs-widget input:checked + label + .tab-panel:nth-last-of-type(2) {
    order: 99;
    border-radius: 0 var(--subtle-radius) var(--subtle-radius) var(--subtle-radius);
  }
}

.tab-panel {
  display: none;
  background: var(--color-white);
  padding: 1.1rem .6rem;
  overflow: auto;
  width: 100%;
  height: 300px;

  > * {
    margin-top: 1.1rem;
  }
}
```

## JS

The JS for the tabs widget is located in `/src/ts/modules/tabs.ts`. The JS adds all the attributes and classes to the different HTML tags. This enables the styling and ensures tabs are accessible for keyboard only users.

The JS also serves, as a way to check the console for errors.

```js
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
```