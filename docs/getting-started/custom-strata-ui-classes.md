<p class="section-text">Getting Started</p>

# Custom Strata UI Classes

Strata UI utilizes custom classes to make the course development process easy and simple.

## Adding the HTML Structure

To create the structure of the document, you can use a `<div>` element with `class="column-one"` to create a vertical container to hold your content. To change the layout into a two-column layout please see the [two-column example](/layouts/two-column.md)

In order to add content to the column, add a `<div>` element with `class="content-block"` to create nested containers that exist within the columns. All widgets and text should be contained within a `content-block` container.

### HTML Example

```html
<div class="column-one">
  <div class="content-block">
    <h2>Content Heading</h2>
    <p>Content paragraph text</p>
  </div>
</div>
```

## Adding Widgets

To add a widget, simply use the corresponding HTML element along with its specific classes. This example uses the `callout-widget` and `accordion-widget` classes.

### HTML Example

```html
<div class="column-one">
  <div class="content-block">
    <h2>Content Heading</h2>
    <p>Content paragraph text</p>
    <!-- Widget added here -->
    <div class="callout-widget">
      <h3>Think while you read</h3>
      <p>How do we create effective and persuasive writing?</p>
    </div>
    <!-- Widget added here -->
    <div class="accordion-widget">
      <div class="accordion-item">
        <span class="tab-title">Module Learning Objectives</span>
        <div class="accordion-content">
          <p>After successful completion of the module, the student will be able to:</p>
          <ul>
            <li>Identify concepts and terms needed for rhetorical analysis</li>
            <li>Identify rhetorical appeals in an ad</li>
            <li>Evaluate persuasiveness of ads based on ethos, pathos and logos</li>
            <li>Prewrite a rhetorical analysis essay, including the thesis statement</li>
            <li>Analyze each other's writing for the application of ethos, pathos, and logos in peer reviews</li>
            <li>Write a draft of a rhetorical analysis essay</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Adding Content

When adding content, please use the correct HTML tags.

1. Text content - `<h1>, <h2>, <h3>, <h4>, <p>, etc.`
2. Lists - `<ul>, <ol>, <li>`
3. Widgets - see **widget** docs for specific usage of HTML elements and classes
4. Images - `<img>`

_Note: If you encounter any issues, check the [quick start template](getting-started/quick-start) to verify your HTML is correct or refer to the relevant documentation._

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
