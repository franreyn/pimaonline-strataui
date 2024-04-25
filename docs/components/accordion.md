# Accordion Widget

## Custom Elements

The accordion widget uses custom tags and are defined in the `CustomElements.ts file`. 

### Accordion Structure

1. `<accordion-widget>` - wraps all accordion groups
2. `<accordion-item>` - wraps each individual accordion
4. `<h3>` or `<h4>` - clickable area and accordion title
4. `<accordion-content>` - the content for the accordion that is hidden and shown

## HTML 

The accordion in the HTML should have this structure. 

```html
<accordion-widget>
  <accordion-item>
    <h4></h4> or <h3></h3>
    <accordion-content>
      <p></p>
    </accordion-content>
  </accordion-item>
</accordion-widget>
```

## CSS

_The accordion CSS is in the `accordion.scss` file._

The styles help ensure that the accordion title and content are distinct and different and also help control the display values for the accordion content. 

```css
accordion-widget {
  margin-bottom: 15px;

  accordion-content {
    display: block;
    border: 1px solid rgba(13, 13, 13, 0.07);
    border-radius: var(--subtle-radius);
    padding: 10px;

    p {
      margin: 0;
    }
  }

  accordion-item {

    display: block;

    &>h3,h4 {
      margin: 0;
      background-color: rgba(13, 13, 13, 0.07);
      padding: 10px;
      display:flex;
      justify-content: space-between;
  
      p {
        margin: 0;
      }
  
      &:hover {
        background-color: rgba(13, 13, 13, 0.1);
      }
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
const validateAccordion = (accordionWidget: HTMLElement) => {

  // Check if there are any accordion items inside the accordion widget
  const accordionItems = accordionWidget.querySelectorAll('accordion-item');

  // If there are no accordion items, log a warning
  if (accordionItems.length === 0) {
    console.warn('Document Error: no accordion items found inside the accordion widget.');
    return;
  }

  // Check if there are any headings and content inside each accordion item
  accordionItems.forEach((item, index) => {
    const heading = item.querySelector('h3, h4');
    const content = item.querySelector('accordion-content');

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
  })

}
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
          accordionHeading.classList.add("arrow-down");
        }

        const accordionContent: HTMLElement | null = accordionItem.querySelector("accordion-content");

        // Add class to the accordion content
        if (accordionContent) {
          accordionContent.classList.add("toggle-btn-content");
        }
      });
    }

  })
}

// If there are any accordion widgets, call handleAccordions
if (accordionWidgets.length > 0) { handleAccordions() }
```

The javascript that controls the functionality for the show and hide part of the accordion widget is actually located in the `toggleButtons.ts`. This same javascript helps control the footer and footnotes.








