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

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
