<p class="section-text">Widgets</p>

# Accordion

Displays content in drop-down containers that users can interact with.

## How to Use

1. Add a `<div>` element with `class="accordion-widget"` to group all the accordion items.
2. For each accordion, create a `<div>` with `class="accordion-item"` as the container.
3. Inside each `accordion-item`, add a `<h3>` for the accordion title. This will be clickable to toggle the accordion.
4. After the `<h3>`, include a `<div>` with `class="accordion-content"` to hold the content visible when the accordion is open. Additional widgets can be added here if needed.

### Utility Class

You can also adjust the assignment title font size to be smaller by adding the `font-size-h4` class to the `<h3>` element. This class changes the font size to the `<h4>` font size.

```html
<div class="accordion-item">
	<h3 class="font-size-h4">Accordion 1</h3>
	<div class="accordion-content">
		<h4>Accordion 1 Title</h4>
		<p>Accordion content 1</p>
	</div>
</div>
```

### HTML Example

```html
<div class="accordion-widget">
	<div class="accordion-item">
		<h3>Accordion 1</h3>
		<div class="accordion-content">
			<h4>Accordion 1 Title</h4>
			<p>Accordion content 1</p>
		</div>
	</div>
	<div class="accordion-item">
		<h3>Accordion 2</h3>
		<div class="accordion-content">
			<h4>Accordion 2 Title</h4>
			<p>Accordion content 2</p>
		</div>
	</div>
	<div class="accordion-item">
		<h3>Accordion 3</h3>
		<div class="accordion-content">
			<p>Accordion content 3</p>
		</div>
	</div>
</div>
```

### Preview

<div class="example-container">
	<div class="accordion-widget">
		<div class="accordion-item">
			<h3>Accordion 1</h3>
			<div class="accordion-content">
				<h4>Accordion 1 Title</h4>
				<p>Accordion content 1</p>
			</div>
		</div>
		<div class="accordion-item">
			<h3>Accordion 2</h3>
			<div class="accordion-content">
				<h4>Accordion 2 Title</h4>
				<p>Accordion content 2</p>
			</div>
		</div>
		<div class="accordion-item">
			<h3>Accordion 3</h3>
			<div class="accordion-content">
				<p>Accordion content 3</p>
			</div>
		</div>
	</div>
</div>

## CSS

_The accordion CSS is in the `accordion.scss` file._

The styles help ensure that the accordion title and content are distinct and separated. The styles also help control the display values for the accordion content.

```css
.accordion-widget {
  margin: 2rem 0;
  display: block;

  h3.font-size-h4 {
    margin-top: 0;
  }

  .accordion-content {
    padding: 10px;

    h4:first-child {
      padding: 0;
    }

    p {
      margin: 0;
    }
  }

  .accordion-item {
    display: block;
    border: 1px solid;
    border-bottom: none;

    &>h3,>h4 {
      margin: 0;
      padding: 10px;
      display:flex;
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

_The Javascript can be found in the `accordion.ts` file._

The first line is a query selector to select all accordion widgets on the page.

```js
const accordionWidgets: NodeListOf<HTMLElement> = document.querySelectorAll(".accordion-widget");

//...more code here
```

The next item in the file is the `validateAccordion()` function which reviews each accordion widget and ensures it has all the necessary HTML elements.

```js
const accordionWidgets: NodeListOf<HTMLElement> = document.querySelectorAll(".accordion-widget");

const validateAccordion = (accordionWidget: HTMLElement) => {
  // Check if there are any accordion items inside the accordion widget
  const accordionItems = accordionWidget.querySelectorAll(".accordion-item");

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

    const accordionItems: NodeListOf<HTMLElement> = accordionWidget.querySelectorAll(".accordion-item");

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

        const accordionContent: HTMLElement | null = accordionItem.querySelector(".accordion-content");

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
