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

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
