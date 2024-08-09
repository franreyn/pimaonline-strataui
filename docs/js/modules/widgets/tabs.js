export const tabsWidgetJs = () => {
  // Define the type for tabsWidgets
  const tabsWidgetsGroups = document.querySelectorAll("tabs-widget")
  // Define the type for callTabsWidget function
  const callTabsWidget = () => {
    // Number of tab-items, should increment by 1 for each tab-item (starts at one to represent tab #1)
    let tabItemsNum = 1

    // Loop through each tabs widget
    tabsWidgetsGroups.forEach((tabsWidgetsGroup, tabsWidgetsGroupIndex) => {
      // Reset counter for counting how many tab items are in each tabs-widget group
      let tabItemsPerGroup = 0

      // Number of tab groups, should increment by 1 for each tabs-widget on the page
      let tabGroupNum = tabsWidgetsGroupIndex + 1

      // Check if tab-items are present for this tabs-widget group
      const tabItems = tabsWidgetsGroup.querySelectorAll("tab-item")

      // If there is a tab container around each tab item
      if (tabItems.length > 0) {
        // Add region and aria-label to parent div
        tabsWidgetsGroup.setAttribute("role", "reigon")
        tabsWidgetsGroup.setAttribute("aria-label", `tab group ${tabGroupNum}`)

        tabItems.forEach((tabItem, tabItemIndex) => {
          // Create tab input
          const tabInput = document.createElement("input")
          tabInput.classList.add("tab-input")
          tabInput.setAttribute("type", "radio")
          tabInput.setAttribute("id", `tab${tabItemsNum}`)
          tabInput.setAttribute("name", `hint-group-${tabGroupNum}`)
          tabInput.setAttribute("aria-controls", `tabHeading${tabItemsNum}`)
          // Associate tab input with tab label
          tabInput.setAttribute("aria-labelledby", `tabLabel${tabItemsNum}`)

          // Add tab input to tab item
          tabItem.prepend(tabInput)

          // Create tab label for tab title
          const tabLabel = document.createElement("label")
          tabLabel.classList.add("tab-header")
          tabLabel.setAttribute("for", `tab${tabItemsNum}`)
          tabLabel.setAttribute("id", `tabLabel${tabItemsNum}`)

          // Check for tab-title tag and add it to tab label
          const tabTitle = tabItem.querySelector("tab-title")

          if (tabTitle) {
            // Add tab title to tab label
            tabLabel.appendChild(tabTitle)
          } else {
            // Error check: if tab-title tag is missing
            console.warn(
              `Document error: missing tab-title tag for tab-item ${tabItemsNum} in tabs-widget group ${tabGroupNum}`
            )
          }

          // Target the location right after the input element
          const tabItemSecondChild = tabItem.children[1]

          // Add tab label to tab item
          tabItem.insertBefore(tabLabel, tabItemSecondChild)

          // Add tab-content attributes
          const tabContent = tabItem.querySelector("tab-content")
          if (tabContent) {
            tabContent.classList.add("tab-panel")
            tabContent.setAttribute("tabindex", "0")
            tabContent.setAttribute("id", `tabHeading${tabItemsNum}`)
          } else {
            // Error check: if tab-content tag is missing
            console.warn(
              `Document error: missing tab-content tag for tab-item ${tabItemsNum} in tabs-widget group ${tabGroupNum}`
            )
          }

          // Increment the number of tab items since last one is added dynamically
          tabItemsNum++

          // Check and add hide tab dynamically
          if (tabItemIndex + 1 == tabItems.length) {
            const hideTabCheck = tabItem.querySelector("tab-title")
            if (hideTabCheck) {
              if (hideTabCheck.textContent !== "Hide") {
                // If last tab doesn't say "hide" then create last tab item as hide tab
                const hideTabItem = document.createElement("tab-item")

                // Add hide tab item to tab items
                tabsWidgetsGroup.appendChild(hideTabItem)

                // Create hide tab title
                const hideTabTitle = document.createElement("tab-title")
                hideTabTitle.textContent = "Hide"

                // Create label for hide tab
                const hideTabLabel = document.createElement("label")
                hideTabLabel.classList.add("tab-header")
                hideTabLabel.classList.add("hide-tab")
                hideTabLabel.setAttribute("for", `tab${tabItemsNum}`)

                // Add hide title to hide tab label
                hideTabLabel.appendChild(hideTabTitle)

                // Create hide input
                const hideTabInput = document.createElement("input")
                hideTabInput.classList.add("tab-input")
                hideTabInput.setAttribute("type", "radio")
                hideTabInput.setAttribute("id", `tab${tabItemsNum}`)
                hideTabInput.setAttribute("name", `hint-group-${tabGroupNum}`)
                hideTabInput.setAttribute(
                  "aria-describedby",
                  `tabHeading${tabItemsNum}`
                )
                hideTabInput.classList.add("hide-tab")

                // Add hide input to hide tab item
                hideTabItem.prepend(hideTabInput)

                // Target the location right after the input element
                const hideSecondItem = hideTabItem.children[1]

                // Add hide tab label to hide tab item
                hideTabItem.insertBefore(hideTabLabel, hideSecondItem)

                // After creating a new tab item, increment count by one
                tabItemsNum++
              } else {
                // If the last tab says "hide" then assume it is the hide tab
                tabItemsNum++
              }
            }
          }

          // Add attributes ensure the first tab is open
          if (tabItemsPerGroup === 0) {
            tabInput.checked = true // Check the first tab input and set checked to true
          } else {
            tabInput.checked = false
          }
          // Increment the number of tab items per group
          tabItemsPerGroup++
        })
      } else {
        // Error check: if tab-item container is missing
        console.warn(
          `Document error: missing tab-item container within the tabs-widget group ${tabGroupNum}`
        )
      }

      // Error check: check if there is only one tab in the tabs-widget group
      if (tabItemsPerGroup == 1) {
        console.warn(
          `Document error: tabs-widget group ${tabGroupNum} is only using one tab. Consider using the accordion widget instead or adding more tabs`
        )
      }
    })
  }

  // Check if tabsWidgets exist before calling callTabsWidget function
  if (tabsWidgetsGroups.length > 0) {
    callTabsWidget()
  }
}