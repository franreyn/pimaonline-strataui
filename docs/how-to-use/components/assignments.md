<p class="section-text">Components</p>

# Assignments Widget

Use the `assignments-widget` to organize each assignment into cards that subtly animate on mouse hover.

## Structure

The `<assignments-widget>` wraps all `<assignment-item>` elements. An `<assignment-item>` typically consists of an `<h3>` heading which is the title of the assignment, a `<p>` element that describes the assignment, and an `<a>` element which is a link styled as a button using `class="button"` that will direct the user to the assignment page.

## HTML 

The `assignments widget` should have this HTML structure.

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