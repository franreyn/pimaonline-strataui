<p class="section-text">Widgets</p>

# Assignments

Organizes each assignment into cards that subtly animate on mouse hover.

## How to Use

1. Add a `<div>` element with `class="assignments-widget"` to wrap all assignment items together.
2. For each assignment, create a `<li>` element with `class="assignment-item"`.
3. Inside each `<li>`, include a `<h3>` element for the assignment title, a `<p>` element for the description, and a `<a>` element with `class="button"` to link to the assignment page.

### HTML Example

```html
<div class="assignments-widget">
	<div class="assignment-item">
		<h3>Assignment Item</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada,
			laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh
			sed imperdiet.</p>
		<a href="javascript:void(0);" class="button">Link To Assignment</a>
	</div>
	<div class="assignment-item">
		<h3>Assignment Item</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada,
			laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh
			sed imperdiet.</p>
		<a href="javascript:void(0);" class="button">Link To Assignment</a>
	</div>
	<div class="assignment-item">
		<h3>Assignment Item</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada,
			laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh
			sed imperdiet.</p>
		<a href="javascript:void(0);" class="button">Link To Assignment</a>
	</div>
</div>
```

### Preview

<div class="example-container">
	<div class="assignments-widget">
		<div class="assignment-item">
			<h3>Assignment Item</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada,
				laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh
				sed imperdiet.</p>
			<a href="javascript:void(0);" class="button">Link To Assignment</a>
		</div>
		<div class="assignment-item">
			<h3>Assignment Item</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada,
				laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh
				sed imperdiet.</p>
			<a href="javascript:void(0);" class="button">Link To Assignment</a>
		</div>
		<div class="assignment-item">
			<h3>Assignment Item</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada,
				laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh
				sed imperdiet.</p>
			<a href="javascript:void(0);" class="button">Link To Assignment</a>
		</div>
	</div>
</div>

## CSS

The `assignments widget` uses flexbox to responsively display the cards. The CSS for this component can be found in `/src/scss/modules/assignments.scss`.

```css

.column-two .assignments-widget,.column-two .assignments-widget {
  margin: 2rem 0;
  padding: 0
}

#content-wrapper .assignments-widget,#content-wrapper .assignments-widget {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between
}

.assignment-item {
  display: block;
  background-color: transparent;
  border: 1px solid;
  border-radius: var(--subtle-radius);
  margin: 0;
  margin-bottom: .8rem;
  padding: .6rem .6rem 1.5rem;
  transition: .3s;
}

.assignment-item:hover {
  transform: translate(0, -5px)
}

.assignment-item h2,.assignment-item h3,.assignment-item h4 {
  font-size: 1.15rem;
  font-weight: 600;
  margin: -0.6rem -0.6rem .6rem -0.6rem !important;
  padding: .3rem .6rem;
  border-radius: var(--top-radius);
}

.assignment-item ol li,.assignment-item ul li {
  margin: 0
}

.assignment-item p,.assignment-item ol,.assignment-item ul {
  font-size: .95rem;
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.assignment-item::before,.assignment-item::marker {
  content: none
}

@media screen and (min-width: 576px) {
  #content-wrapper .assignment-item {
      flex-basis:45%
  }
}

@media screen and (min-width: 768px) {
  #content-wrapper .assignment-item {
      flex-basis:30%
  }
}
```

## JS

_There is no JS for this widget._

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
