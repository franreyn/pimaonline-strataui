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
    <a href="javascript:void(0);" class="button">Link To Assignment</a>
  </assignment-item>
  <assignment-item>
    <h3>Reading Review Activity 1</h3>
    <p>Revision and Editing Review Activity</p>
    <a href="javascript:void(0);" class="button">Link To Assignment</a>
  </assignment-item>
  <assignment-item>
    <h3>Information Literacy Discussion 1</h3>
    <p>The Importance of Listening</p>
    <a href="javascript:void(0);" class="button">Link To Assignment</a>
  </assignment-item>
</assignments-widget>
```

### Preview

<div class="example-container">
  <assignments-widget>
    <assignment-item>
      <h3>Module 1 Readings</h3>
      <p>The readings in the list have interactive exercises that will help you determine if you are fully understanding the material.</p>
      <a href="javascript:void(0);" class="button">Link To Assignment</a>
    </assignment-item>
    <assignment-item>
      <h3>Reading Review Activity 1</h3>
      <p>Revision and Editing Review Activity</p>
      <a href="javascript:void(0);" class="button">Link To Assignment</a>
    </assignment-item>
    <assignment-item>
      <h3>Information Literacy Discussion 1</h3>
      <p>The Importance of Listening</p>
      <a href="javascript:void(0);" class="button">Link To Assignment</a>
    </assignment-item>
  </assignments-widget>
</div>

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
