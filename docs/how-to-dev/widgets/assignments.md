<p class="section-text">Widgets</p>

# Assignments

Organizes each assignment into cards that subtly animate on mouse hover.

## How to Use

1. Add `<assignments-widget>`. This container will wrap all assignment items.
2. Add `<assignment-item>` container for each individual assignment.
3. Within each `<assignment-item>` add an `<h3>` which act as the title of the assignment, a `<p>` element that describes the assignment, and an `<a>` element which is a link styled as a button using `class="button"` that will direct the user to the assignment page.

### HTML Example

```html
<assignments-widget>
  <assignment-item>
    <h3>Module 1 Readings</h3>
    <p>The readings in the list have interactive exercises that will help you determine if you are fully understanding the material.</p>
    <a href="#" class="button">Link To Assignment</a>
  </assignment-item>
  <assignment-item>
    <h3>Reading Review Activity 1</h3>
    <p>Revision and Editing Review Activity</p>
    <a href="#" class="button">Link To Assignment</a>
  </assignment-item>
  <assignment-item>
    <h3>Information Literacy Discussion 1</h3>
    <p>The Importance of Listening</p>
    <a href="#" class="button">Link To Assignment</a>
  </assignment-item>
</assignments-widget>
```

### Preview

<div class="example-container">
  <assignments-widget>
    <assignment-item>
      <h3>Module 1 Readings</h3>
      <p>The readings in the list have interactive exercises that will help you determine if you are fully understanding the material.</p>
      <a href="#" class="button">Link To Assignment</a>
    </assignment-item>
    <assignment-item>
      <h3>Reading Review Activity 1</h3>
      <p>Revision and Editing Review Activity</p>
      <a href="#" class="button">Link To Assignment</a>
    </assignment-item>
    <assignment-item>
      <h3>Information Literacy Discussion 1</h3>
      <p>The Importance of Listening</p>
      <a href="#" class="button">Link To Assignment</a>
    </assignment-item>
  </assignments-widget>
</div>

## CSS

The `assignments widget` uses flexbox to responsively display the cards. The CSS for this component can be found in `/src/scss/modules/assignments.scss`.

```css
#second-column assignments-widget,
#second-column assignments-widget {
  margin: 0;
  padding: 0;
}

#content-wrapper assignments-widget,
#content-wrapper assignments-widget {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

assignment-item {
  display: block;
  background-color: transparent;
  border: 1px solid var(--color-docs-primary);
  border-radius: var(--subtle-radius);
  margin: 0;
  margin-bottom: 0.8rem;
  padding: 0.6rem 0.6rem 1.5rem;
  transition: 0.3s;
}

assignment-item:hover {
  transform: translate(0, -5px);
}

assignment-item h2,
assignment-item h3,
assignment-item h4 {
  background-color: var(--color-accent-tint);
  font-size: 1.15rem;
  font-weight: 600;
  margin: -0.6rem -0.6rem 0.6rem -0.6rem !important;
  padding: 0.3rem 0.6rem;
  border-radius: var(--top-radius);
}

assignment-item ol li,
assignment-item ul li {
  margin: 0;
}

assignment-item p,
assignment-item ol,
assignment-item ul {
  font-size: 00.95rem;
  margin-bottom: 1.5rem;
}

assignment-item::before,
assignment-item::marker {
  content: none;
}

@media screen and (min-width: 576px) {
  #content-wrapper assignment-item {
    flex-basis: 45%;
  }
}

@media screen and (min-width: 768px) {
  #content-wrapper assignment-item {
    flex-basis: 30%;
  }
}
```

## JS

_There is no JS for this widget._

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
