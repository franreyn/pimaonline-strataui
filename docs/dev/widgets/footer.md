<p class="section-text">Widgets</p>

# Footer

Display footnotes or citations related to the content in a collapsible drawer.

## How to Use

Enclose all elements within the footer section using the `<footer>` element. Initially, the content inside the footer will be hidden. When the footer is toggled, the container will expand, revealing all the elements nested within it.

### HTML Example

```html
<footer>
  <p>
    Definition of Rhetorical Analysis: Rhetorical analysis involves examining how authors or speakers use words to influence an audience. It focuses on understanding the strategies employed to convey messages and achieve
    desired effects<sup>1</sup>.
  </p>
  <ul>
    <li>Example text 1</li>
    <li>Example text 2</li>
  </ul>
  <p>"Rhetorical Analysis," Purdue Online Writing Lab (OWL), accessed June 24, 2024, https://owl.purdue.edu/owl/general_writing/the_writing_process/rhetorical_analysis/index.html.</p>
</footer>
```

### Preview

<div class="example-container">
  <footer>
      <p>Definition of Rhetorical Analysis: Rhetorical analysis involves examining how authors or speakers use words to influence an audience. It focuses on understanding the strategies employed to convey messages and achieve desired effects<sup>1</sup>.</p>
        <ul>
    <li>Example text 1</li>
    <li>Example text 2</li>
  </ul>
      <p>"Rhetorical Analysis," Purdue Online Writing Lab (OWL), accessed June 24, 2024, https://owl.purdue.edu/owl/general_writing/the_writing_process/rhetorical_analysis/index.html.</p>
  </footer>
</div>

## CSS

Styles for `footer` are found in `_grid.scss`.

```css
footer {
  padding: 15px 0;
}

.toggle-footer {
  display: block;
  font-size: 1rem;
  margin: 5px;
  text-decoration: none;
  margin: auto;
  background-color: transparent;
  border: none;
}

.toggle-footer:hover {
  cursor: pointer;
  text-decoration: none;
}
```

## JS

The JS can be found in `/src/ts/footer.ts`. The footer JS creates necessary DOM elements and applies necessary classes to make it toggle open and close.

```js
const footer: HTMLElement | null = document.querySelector("footer");

const handleFooter = (footer: HTMLElement) => {
  // Create a new div element
  const footerContainer = document.createElement("div");
  footerContainer.setAttribute("id", "footer");

  // Create a new toggle element
  const footerToggle = document.createElement("button");
  footerToggle.classList.add("toggle-footer");
  footerToggle.classList.add("text-center");
  footerToggle.tabIndex = 0;
  footerToggle.innerHTML = "[Show Footnotes]";

  // Create a new div element
  const footerContent = document.createElement("div");
  footerContent.classList.add("footnotes");

  // Capture all the content in existing footer and move inside footerContentDiv
  const footerTextContent = footer.innerHTML;
  footer.innerHTML = "";
  footerContent.innerHTML = footerTextContent;

  // Append the footerContainer to the footer
  footer.appendChild(footerContainer);

  // Append the footerContentDiv to the footerContainer
  footerContainer.appendChild(footerToggle);
  footerContainer.appendChild(footerContent);

  // Save reference to the next sibling before replacing
  const nextElement: Element | null = footerToggle.nextElementSibling;

  // Show/hide on click
  footerToggle.addEventListener("click", () => {
    footerToggle.textContent = footerToggle.textContent === "[Show Footnotes]" ? "[Hide Footnotes]" : "[Show Footnotes]";
    if (nextElement) {
      nextElement.classList.toggle("show");
    }
  });
};

if (footer) {
  handleFooter(footer);
}
```

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
