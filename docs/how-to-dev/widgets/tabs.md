<p class="section-text">Widgets</p>

# Tabs

Organize and separate related information into their own individual tabs.

## How to Use

1. Add `<tabs-widget>` to wrap all the tab items.
2. Add `<tab-item>` for each tab item.
3. Add `<tab-title>` to add the title and clickable space for each `<tab-item>`.
4. Add `<tab-content>` to inside of that container add text, images, or any other widgets within this space.

### HTML Example

```html
<tabs-widget>
  <tab-item>
    <tab-title>Tab Title 1</tab-title>
    <tab-content>
      <h4>Tab 1 Heading Inside</h4>
      <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
    </tab-content>
  </tab-item>
  <tab-item>
    <tab-title>Tab Title 2</tab-title>
    <tab-content>
      <h4>Tab 2 Heading Inside</h4>
      <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
    </tab-content>
  </tab-item>
</tabs-widget>
```

### Preview

<div class="example-container">
<tabs-widget>
  <tab-item>
    <tab-title>Tab Title 1</tab-title>
    <tab-content>
      <h4>Tab 1 Heading Inside</h4>
      <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
    </tab-content>
  </tab-item>
  <tab-item>
    <tab-title>Tab Title 2</tab-title>
    <tab-content>
      <h4>Tab 2 Heading Inside</h4>
      <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
    </tab-content>
  </tab-item>
</tabs-widget>
</div>

## CSS

The CSS is located in the `/src/scss/modules/tabs.scss` file. Included is the media query to make tabs responsive on mobile.

```css
tabs-widget {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-bottom: 2.2rem;
  max-width: 860px;
}

tab-item {
  display: contents;
}

tab-item input {
  position: absolute;
  opacity: 0;
}

tab-item input:focus {
  outline: 1px dotted #212121;
  outline: 5px auto -webkit-focus-ring-color;
}

tab-item input:checked + label {
  background-color: var(--color-primary-tint2);
  color: var(--color-pcc-black);
  z-index: 2;
  transition: 0.5s;
}

tab-item input:checked + label + tab-content {
  display: block;
  z-index: 1;
  border: 2px solid var(--color-primary-tint1);
}

tab-item input:checked + label:nth-last-of-type(2) {
  border-radius: 0;
}

tab-item input:checked + label + tab-content:nth-last-of-type(2) {
  border-radius: 0 0 var(--subtle-radius) var(--subtle-radius);
}

tab-item input:checked + label.hide-tab {
  background-color: var(--color-pcc-white);
  color: var(--color-pcc-black);
  text-decoration: underline;
}

tab-item label {
  background-color: var(--color-primary-tint1);
  border-bottom: 1px solid var(--color-pcc-ltgrey);
  padding: 5px;
  width: 100%;
  text-align: center;
  transition: 0.5s;
  color: var(--color-pcc-dkgrey);
}

tab-item label:first-of-type {
  border-radius: var(--subtle-radius) var(--subtle-radius) 0 0;
}

tab-item label:nth-last-of-type(2) {
  border-radius: 0 0 var(--subtle-radius) var(--subtle-radius);
}

tab-item label.hide-tab {
  background-color: transparent !important;
  border: none !important;
  color: var(--color-pcc-black);
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

  tabs-widget label:nth-last-of-type(2),
  tabs-widget input:checked + label:nth-last-of-type(2) {
    border-radius: var(--subtle-radius) var(--subtle-radius) 0 0;
  }

  tab-content,
  tabs-widget input:checked + label + tab-content:nth-last-of-type(2) {
    order: 99;
    border-radius: 0 var(--subtle-radius) var(--subtle-radius) var(--subtle-radius);
  }
}

tab-content {
  display: none;
  background: var(--color-pcc-white);
  padding: 1.1rem 0.6rem;
  overflow: auto;
  width: 100%;
  height: 300px;
}

tab-content > * {
  margin-top: 1.1rem;
}
```

## JS

The JS for the tabs widget is located in `/src/ts/modules/tabs.ts`. The JS adds all the attributes and classes to the different HTML tags. This enables the styling and ensures tabs are accessible for keyboard only users.

The JS also serves, as a way to check the console for errors.

```js
// Define the type for tabsWidgets
const tabsWidgetsGroups: NodeListOf<Element> = document.querySelectorAll("tabs-widget");
// Define the type for callTabsWidget function
const callTabsWidget = () => {
  // Number of tab-items, should increment by 1 for each tab-item (starts at one to represent tab #1)
  let tabItemsNum: number = 1;

  // Loop through each tabs widget
  tabsWidgetsGroups.forEach((tabsWidgetsGroup, tabsWidgetsGroupIndex) => {
    // Reset counter for counting how many tab items are in each tabs-widget group
    let tabItemsPerGroup = 0;

    // Number of tab groups, should increment by 1 for each tabs-widget on the page
    let tabGroupNum: number = tabsWidgetsGroupIndex + 1;

    // Check if tab-items are present for this tabs-widget group
    const tabItems = tabsWidgetsGroup.querySelectorAll("tab-item");

    // If there is a tab container around each tab item
    if (tabItems.length > 0) {
      // Add region and aria-label to parent div
      tabsWidgetsGroup.setAttribute("role", "region");
      tabsWidgetsGroup.setAttribute("aria-label", `tab group ${tabGroupNum}`);

      tabItems.forEach((tabItem, tabItemIndex) => {
        // Create tab input
        const tabInput = document.createElement("input");
        tabInput.classList.add("tab-input");
        tabInput.setAttribute("type", "radio");
        tabInput.setAttribute("id", `tab${tabItemsNum}`);
        tabInput.setAttribute("name", `hint-group-${tabGroupNum}`);
        tabInput.setAttribute("aria-describedby", `tabHeading${tabItemsNum}`);

        // Add tab input to tab item
        tabItem.prepend(tabInput);

        // Create tab label for tab title
        const tabLabel = document.createElement("label");
        tabLabel.classList.add("tab-header");
        tabLabel.setAttribute("for", `tab${tabItemsNum}`);

        // Check for tab-title tag and add it to tab label
        const tabTitle = tabItem.querySelector("tab-title");

        if (tabTitle) {
          // Add tab title to tab label
          tabLabel.appendChild(tabTitle);
        } else {
          // Error check: if tab-title tag is missing
          console.warn(`Document error: missing tab-title tag for tab-item ${tabItemsNum} in tabs-widget group ${tabGroupNum}`);
        }

        // Target the location right after the input element
        const tabItemSecondChild = tabItem.children[1];

        // Add tab label to tab item
        tabItem.insertBefore(tabLabel, tabItemSecondChild);

        // Add tab-content attributes
        const tabContent = tabItem.querySelector("tab-content");
        if (tabContent) {
          tabContent.classList.add("tab-panel");
          tabContent.setAttribute("tabindex", "0");
          tabContent.setAttribute("id", `tabHeading${tabItemsNum}`);
        } else {
          // Error check: if tab-content tag is missing
          console.warn(`Document error: missing tab-content tag for tab-item ${tabItemsNum} in tabs-widget group ${tabGroupNum}`);
        }

        // Increment the number of tab items since last one is added dynamically
        tabItemsNum++;

        // Check and add hide tab dynamically
        if (tabItemIndex + 1 == tabItems.length) {
          const hideTabCheck = tabItem.querySelector("tab-title");
          if (hideTabCheck) {
            if (hideTabCheck.textContent !== "Hide") {
              // If last tab doesn't say "hide" then create last tab item as hide tab
              const hideTabItem = document.createElement("tab-item");

              // Add hide tab item to tab items
              tabsWidgetsGroup.appendChild(hideTabItem);

              // Create hide tab title
              const hideTabTitle = document.createElement("tab-title");
              hideTabTitle.textContent = "Hide";

              // Create label for hide tab
              const hideTabLabel = document.createElement("label");
              hideTabLabel.classList.add("tab-header");
              hideTabLabel.classList.add("hide-tab");
              hideTabLabel.setAttribute("for", `tab${tabItemsNum}`);

              // Add hide title to hide tab label
              hideTabLabel.appendChild(hideTabTitle);

              // Create hide input
              const hideTabInput = document.createElement("input");
              hideTabInput.classList.add("tab-input");
              hideTabInput.setAttribute("type", "radio");
              hideTabInput.setAttribute("id", `tab${tabItemsNum}`);
              hideTabInput.setAttribute("name", `hint-group-${tabGroupNum}`);
              hideTabInput.setAttribute("aria-describedby", `tabHeading${tabItemsNum}`);
              hideTabInput.classList.add("hide-tab");

              // Add hide input to hide tab item
              hideTabItem.prepend(hideTabInput);

              // Target the location right after the input element
              const hideSecondItem = hideTabItem.children[1];

              // Add hide tab label to hide tab item
              hideTabItem.insertBefore(hideTabLabel, hideSecondItem);

              // After creating a new tab item, increment count by one
              tabItemsNum++;
            } else {
              // If the last tab says "hide" then assume it is the hide tab
              tabItemsNum++;
            }
          }
        }

        // Add attributes ensure the first tab is open
        if (tabItemsPerGroup === 0) {
          tabInput.checked = true; // Check the first tab input and set checked to true
        } else {
          tabInput.checked = false;
        }
        // Increment the number of tab items per group
        tabItemsPerGroup++;
      });
    } else {
      // Error check: if tab-item container is missing
      console.warn(`Document error: missing tab-item container within the tabs-widget group ${tabGroupNum}`);
    }

    // Error check: check if there is only one tab in the tabs-widget group
    if (tabItemsPerGroup == 1) {
      console.warn(`Document error: tabs-widget group ${tabGroupNum} is only using one tab. Consider using the accordion widget instead or adding more tabs`);
    }
  });
};

// Check if tabsWidgets exist before calling callTabsWidget function
if (tabsWidgetsGroups.length > 0) {
  callTabsWidget();
}
```

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
