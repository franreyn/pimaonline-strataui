# Footer

Footers are used to display footnotes or citations related to the content.

## HTML

The following is an example of the HTML used for the `footer`.

```html
<footer>
  <p className="text-center toggle-footnotes">[Show Footnotes]</p>
  <div className="footnotes">
    <p>
      Definition of Rhetorical Analysis: Rhetorical analysis involves examining how authors or speakers use words to influence an audience. It focuses on understanding the strategies employed to convey messages and
      achieve desired effects<sup>1</sup>.
    </p>
    <p>"Rhetorical Analysis," Purdue Online Writing Lab (OWL), accessed June 24, 2024, https://owl.purdue.edu/owl/general_writing/the_writing_process/rhetorical_analysis/index.html.</p>
  </div>
</footer>
```

## CSS

Styles for `footer` are found in `_grid.scss`.

```css
footer {
  margin: 0 auto;
  max-width: 998px;
  width: 100%;
  grid-area: footer;
  padding: 5px 0;
  background-color: var(--color-white);

  .footnotes {
    padding: 15px;
  }
}

#one-column .footnotes {
  padding: 15px 95px;
}

#two-column footer {
  max-width: 1170px;
}

.toggle-footnotes {
  background-color: transparent;
  color: var(--color-link-blue);
  text-decoration: underline;
}

.toggle-footnotes:hover {
  background-color: transparent;
  color: var(--color-footnotes-blue);
  text-decoration: underline;
}

.toggle-footnotes:hover {
  cursor: pointer;
  text-decoration: none;
}

.toggle-footnotes {
  margin: 5px;
  text-decoration: none;
}

.footnotes {
  display: none;
}

.show {
  display: block;
}
```

## JS

The JS can be found in `/src/ts/toggleButtons.ts`. The functionality to expand and collapse the footer is the same as the accordion widget, so the JS below targets both and toggles the `.show` class on the `.toggle-footnotes` element to show/hide the content.

```js
const toggleBtns: NodeListOf<HTMLElement> = document.querySelectorAll(".toggle-btn, .toggle-footnotes");

const handleToggleButtons = () => {
  // Check if there are any elements with the class "toggle-btn" or "toggle-footnotes"
  if (document.querySelector(".toggle-btn") || document.querySelector(".toggle-footnotes")) {
    // Iterate over each toggle button
    for (let toggleBtn = 0; toggleBtn < toggleBtns.length; toggleBtn++) {
      // Add tabindex
      toggleBtns[toggleBtn].setAttribute("tabindex", "0");
      // Show/hide on click
      toggleBtns[toggleBtn].addEventListener("click", () => {
        const nextElement: Element | null = toggleBtns[toggleBtn].nextElementSibling;
        if (nextElement) {
          nextElement.classList.toggle("show");
        }
      });

      // Show/hide on enter for users who use tab
      toggleBtns[toggleBtn].addEventListener("keydown", (enter: KeyboardEvent) => {
        if (enter.key === "Enter") {
          const nextElement: Element | null = toggleBtns[toggleBtn].nextElementSibling;
          if (nextElement) {
            nextElement.classList.toggle("show");
          }
        }
      });
    }
  }
};

if (toggleBtns.length > 0) {
  handleToggleButtons();
}
```

  <div class="footer">
    <p>&copy; 2024 StrataCSS</p>
  </div>
