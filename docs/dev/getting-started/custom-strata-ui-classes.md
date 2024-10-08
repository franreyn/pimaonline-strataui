<p class="section-text">Getting Started</p>

# Custom HTML Elements

Strata UI utilizes custom HTML Elements to make the course development process easy and simple.

## Adding the HTML Structure

To create the structure of the document, you can use the `<div class="column-one">` tag to create a vertical container to hold your content. To change the layout to a two-column layout please see the [two-column example](/layouts/two-column.md)

In order to add content to the column, add a `<content-block>` tag to create nested containers that exist within the columns. All widgets and text should be contained within a `<content-block>` tag.

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
    <callout-widget>
      <h3>Think while you read</h3>
      <p>How do we create effective and persuasive writing?</p>
    </callout-widget>
    <!-- Widget added here -->
    <accordion-widget>
      <accordion-item>
        <h3>Module Learning Objectives</h3>
        <accordion-content>
          <p>After successful completion of the module, the student will be able to:</p>
          <ul>
            <li>Identify concepts and terms needed for rhetorical analysis</li>
            <li>Identify rhetorical appeals in an ad</li>
            <li>Evaluate persuasiveness of ads based on ethos, pathos and logos</li>
            <li>Prewrite a rhetorical analysis essay, including the thesis statement</li>
            <li>Analyze each other's writing for the application of ethos, pathos, and logos in peer reviews</li>
            <li>Write a draft of a rhetorical analysis essay</li>
          </ul>
        </accordion-content>
      </accordion-item>
    </accordion-widget>
  </div>
</div>
```

## Adding Content

Some HTML elements are not custom. When adding text content, images, or lists. They should exist within an HTML tag.

1. Text content - `<h1>, <h2>, <h3>, <h4>, <p>, etc.`
2. Lists - `<ul>, <ol>, <li>`
3. Widgets - see **widget** docs for specific usage of custom tags
4. Images - `<img>`

_Note: If you encounter problems please refer to the [quick start template](getting-started/quick-start) or documentation to ensure your HTML is correct._

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
