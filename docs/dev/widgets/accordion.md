<p class="section-text">Widgets</p>

# Accordion

Displays content in drop-down containers that users can interact with.

_Note: The accordion widget uses custom tags and are defined in the `CustomElements.ts file`._

## How to Use

1. Add the `<accordion-widget>`. This will wrap all the accordions and group them together.
2. For each accordion add `<accordion-item>`. This will be the container for each accordion dropdown.
3. Add an `<h3>` with the text for the accordion title within the `<accordion-item>` container. This will be what the student will click on to trigger the accordion toggling open and close.
4. Add `<accordion-content>` right after the `<h3>`. The `<accordion-content>` container holds all the content visible after the accordion is open. You may also use any other widgets within this container.

### Utility Class

You can also adjust the assignment title font size to be smaller by adding the `font-size-h4` class. This class changes the font size to the `<h4>` font size.

```html
<accordion-item>
  <h3 class="font-size-h4">Accordion 1</h3>
  <accordion-content>
    <p>Accordion content 1</p>
  </accordion-content>
</accordion-item>
```

### HTML Example

```html
<accordion-widget>
  <accordion-item>
    <h3>Accordion 1</h3>
    <accordion-content>
      <p>Accordion content 1</p>
    </accordion-content>
  </accordion-item>
  <accordion-item>
    <h3>Accordion 2</h3>
    <accordion-content>
      <p>Accordion content 2</p>
    </accordion-content>
  </accordion-item>
  <accordion-item>
    <h3>Accordion 3</h3>
    <accordion-content>
      <p>Accordion content 3</p>
    </accordion-content>
  </accordion-item>
</accordion-widget>
```

### Preview

<div class="example-container">
  <accordion-widget>
  <accordion-item>
    <h3>Accordion 1</h3>
    <accordion-content>
      <p>Accordion content 1</p>
    </accordion-content>
  </accordion-item>
  <accordion-item>
    <h3>Accordion 2</h3>
    <accordion-content>
      <p>Accordion content 2</p>
    </accordion-content>
  </accordion-item>
  <accordion-item>
    <h3>Accordion 3</h3>
    <accordion-content>
      <p>Accordion content 3</p>
    </accordion-content>
  </accordion-item>
</accordion-widget>
</div>

## CSS

_The accordion CSS is in the `accordion.scss` file._

The styles help ensure that the accordion title and content are distinct and separated. The styles also help control the display values for the accordion content.

```css
accordion-widget {
  margin: 2rem 0;
  display: block;

  accordion-content {
    display: block;
    padding: 10px;

    h4:first-child {
      padding: 0;
    }

    p {
      margin: 0;
    }
  }

  accordion-item {
    display: block;
    border: 1px solid;
    border-bottom: none;

    & > h3,
    > h4 {
      margin: 0;
      padding: 10px;
      display: flex;
      justify-content: space-between;

      p {
        margin: 0;
      }
    }

    &:first-child {
      border-radius: var(--top-radius);
    }

    &:last-child {
      border-radius: var(--bottom-radius);
      border-bottom: 1px solid;
    }
  }

  .arrow-right:after {
    content: "\f054";
    font-family: "FontAwesome";
    display: inline-block;
    font-weight: 900;
    height: 16px;
    transform-origin: center;
    margin-right: 10px;
    width: 16px;
  }

  .arrow-down:after {
    content: "\f078";
    font-family: "FontAwesome";
    display: inline-block;
    font-weight: 900;
    height: 16px;
    margin-right: 10px;
    transform-origin: center;
    width: 16px;
  }
}
```

## JS

_The javascript can be found in the `accordion.ts` file._

The first line is a query selector to select all accordion widgets on the page.

```js
const accordionWidgets: NodeListOf<HTMLElement> = document.querySelectorAll("accordion-widget");

//...more code here
```

The next item in the file is the `validateAccordion()` function which reviews each accordion widget and ensures it has all the necessary HTML elements.

```js
const accordionWidgets: NodeListOf<HTMLElement> = document.querySelectorAll("accordion-widget");

const validateAccordion = (accordionWidget: HTMLElement) => {
  // Check if there are any accordion items inside the accordion widget
  const accordionItems = accordionWidget.querySelectorAll("accordion-item");

  // If there are no accordion items, log a warning
  if (accordionItems.length === 0) {
    console.warn("Document Error: no accordion items found inside the accordion widget.");
    return;
  }

  // Check if there are any headings and content inside each accordion item
  accordionItems.forEach((item, index) => {
    const heading = item.querySelector("h3, h4");
    const content = item.querySelector("accordion-content");

    // If there are no heading for the accordion item, log a warning
    if (!heading) {
      console.warn(`Document Error: no heading found for accordion item ${index + 1}.`);
      return;
    }

    // If there are no content for the accordion item, log a warning
    if (!content) {
      console.warn(`No content found for accordion item ${index + 1}.`);
      return;
    }
  });
};
```

After the validation, we define the main function that is going to add all the necessary attributes to the HTML elements. This function is called at the bottom of the file if any accordion widgets are found on the page.

```js
// Handle accordions
const handleAccordions = () => {
  // Iterate over each accordion widget
  accordionWidgets.forEach((accordionWidget) => {
    // Validate the accordion widget
    validateAccordion(accordionWidget);

    const accordionItems: NodeListOf<HTMLElement> = accordionWidget.querySelectorAll("accordion-item");

    // Iterate over each accordion item
    if (accordionItems.length > 0) {
      accordionItems.forEach((accordionItem) => {
        const accordionHeading: HTMLHeadingElement | null = accordionItem.querySelector("accordion-item>h3, accordion-item>h4");

        // Add classes and attributes to the accordion heading and content
        if (accordionHeading) {
          accordionHeading.setAttribute("tabindex", "0");
          accordionHeading.classList.add("toggle-btn");
          accordionHeading.classList.add("accordion-title");
          accordionHeading.classList.add("arrow-right");
        }

        const accordionContent: HTMLElement | null = accordionItem.querySelector("accordion-content");

        // Add class to the accordion content
        if (accordionContent) {
          accordionContent.classList.add("toggle-btn-content");
        }
      });
    }
  });
};

// If there are any accordion widgets, call handleAccordions
if (accordionWidgets.length > 0) {
  handleAccordions();
}
```

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
