<p class="section-text">Widgets</p>

# Tabs

Organize and separate related information into their own individual tabs.

## How to Use

1. Add a `<div>` with `class="tabs-widget"` to wrap all the tab items.
2. Add a `<div>` with `class="tab-item"` for each tab item.
3. Add a `<span>` with `class="tab-title"` to add the title and clickable space for each `tab-item`.
4. Directly after adding the `tab-title` container add a `<div>` with `class="tab-content"` to the inside of that container. Add text, images, or any other widgets within this space.

_Note: Tabs are best used when there are multiple tabs. If there is only one item hidden, please use an accordion_

### HTML Example

```html
<div class="tabs-widget">
	<div class="tab-item">
		<span class="tab-title">
			Tab Title 1
		</span>
		<div class="tab-content">
			<h4>Tab 1 Heading Inside</h4>
			<p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or
				as short as a couple of sentences.</p>
		</div>
	</div>
	<div class="tab-item">
		<span class="tab-title">
			Tab Title 2 and how long can I make it?
		</span>
		<div class="tab-content">
			<h4>Tab 2 Heading Inside</h4>
			<p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or
				as short as a couple of sentences.</p>
		</div>
	</div>
	<div class="tab-item">
		<span class="tab-title">
			Tab Title 3
		</span>
		<div class="tab-content">
			<h4>Tab 3 Heading Inside</h4>
			<p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or
				as short as a couple of sentences.</p>
		</div>
	</div>
</div>
```

### Preview

<div class="example-container">
	<div class="tabs-widget">
		<div class="tab-item">
			<span class="tab-title">
				Tab Title 1
			</span>
			<div class="tab-content">
				<h4>Tab 1 Heading Inside</h4>
				<p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or
					as short as a couple of sentences.</p>
			</div>
		</div>
		<div class="tab-item">
			<span class="tab-title">
				Tab Title 2 and how long can I make it?
			</span>
			<div class="tab-content">
				<h4>Tab 2 Heading Inside</h4>
				<p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or
					as short as a couple of sentences.</p>
			</div>
		</div>
		<div class="tab-item">
			<span class="tab-title">
				Tab Title 3
			</span>
			<div class="tab-content">
				<h4>Tab 3 Heading Inside</h4>
				<p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or
					as short as a couple of sentences.</p>
			</div>
		</div>
	</div>
</div>

## CSS

The CSS is located in the `/src/scss/modules/tabs.scss` file. Included is the media query to make tabs responsive on mobile.

```css
.tabs-widget {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 2rem 0;
  max-width: 860px;
}

.tab-item {
  display: contents;
}

.tab-item input {
  position: absolute;
  opacity: 0;
}

.tab-item input:focus {
  outline: 1px dotted #212121;
  outline: 5px auto -webkit-focus-ring-color;
}

.tab-item input:checked + label {
  z-index: 2;
  transition: .5s;
}

.tab-item input:checked + label + .tab-content {
  display: block;
  z-index: 1;
}

.tab-item input:checked + label:nth-last-of-type(2) {
  border-radius: 0;
}

.tab-item input:checked + label + .tab-content:nth-last-of-type(2) {
  border-radius: 0 0 var(--subtle-radius) var(--subtle-radius);
}

.tab-item input:checked + label.hide-tab {
  text-decoration: underline;
}

.tab-item label {
  border: 1px solid;
  border-bottom: none;
  padding: 5px;
  width: 100%;
  text-align: center;
  transition: .5s;
}

.tab-item label:first-of-type {
  border-radius: var(--subtle-radius) var(--subtle-radius) 0 0;
}

.tab-item label:nth-last-of-type(2) {
  border-radius: 0 0 var(--subtle-radius) var(--subtle-radius);
}

.tab-item label.hide-tab {
  background-color: transparent !important;
  color: var(--color-black);
  border: none !important;
}

.tab-item input:checked + label.hide-tab {
  color: var(--color-black);
  font-weight: 500;
}



.tab-panel {
  border: 1px solid;
  padding: 20px;
}

.hide-panel {
  background-color: transparent !important;
  display: none !important;
}

.tab-header:hover {
  cursor: pointer;
}

@media (min-width: 700px) {
  .tabs-widget label {
      width: fit-content;
      margin-right: 5px;
      border-radius: var(--subtle-radius) var(--subtle-radius) 0 0;
  }

  .tabs-widget label:nth-last-of-type(2),
  .tabs-widget input:checked + label:nth-last-of-type(2) {
      border-radius: var(--subtle-radius) var(--subtle-radius) 0 0;
  }

  .tab-content,
  .tabs-widget input:checked + label + .tab-content:nth-last-of-type(2) {
      order: 99;
      border-radius: 0 var(--subtle-radius) var(--subtle-radius) var(--subtle-radius);
  }
}

.tab-content {
  display: none;
  padding: 1.1rem .6rem;
  overflow: auto;
  width: 100%;
  height: fit-content;

  h3,h4,h5 {
    margin-top: 0;
  }

}

.tab-content > * {
  margin-top: 1.1rem;
}
```

## JS

The JS for the tabs widget is located in `/src/ts/modules/tabs.ts`. The JS adds all the attributes and classes to the different HTML tags. This enables the styling and ensures tabs are accessible for keyboard only users.

The JS also serves, as a way to check the console for errors.

```js
const vocabCardsWidgets: NodeListOf<HTMLElement> = document.querySelectorAll(".vocab-cards-widget");

const handleVocabCards = () => {
  // Add aria attributes to ul.vocab-cards
  vocabCardsWidgets.forEach((vocabCardsWidget: HTMLElement) => {
    vocabCardsWidget.setAttribute("role", "region");
    vocabCardsWidget.setAttribute("aria-label", "vocabulary list");

    const vocabGroups: NodeListOf<HTMLElement> = vocabCardsWidget.querySelectorAll("li");

    if (vocabGroups.length > 0) {
      // Add aria attributes to li.vocab
      vocabGroups.forEach((vocabGroup: HTMLElement) => {
        vocabGroup.setAttribute("role", "group");
        vocabGroup.setAttribute("aria-label", "vocabulary term and definition");
      })
    }
  })
}

if (vocabCardsWidgets.length > 0) {
  handleVocabCards();
}
```

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
