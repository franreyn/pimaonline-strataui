<p class="section-text">Getting Started</p>

# Custom HTML Elements

Strata utilizes custom HTML Elements to make the course developmement process easy and simple.

## Adding the HTML Structure

To create the structure of the document, you can use the `<column-one>` tag to create a vertical container to hold your content. To change the layout please see the [layouts article](./layouts.md)

In order to add content to the column, add a `<content-body>` tag to create nested containers that live within the columns. All widgets and text should be contained within a `<content-body>` tag.

### Example

```html
<column-one>
  <content-block>
    <h2>Content Heading</h2>
    <p>Content paragraph text</p>
  </content-block>
</column-one>
```

## Adding Content Widgets

To create a widget, just add an opening tag and closing tag with the intended widget. In this example, the `<callout-widget>` and `<accordion-widget>` are used.

### Example

```html
<column-one>
  <content-block>
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
  </content-block>
</column-one>
```

## Adding Content

Adding actual content should exist within a semantic or custom HTML tag.

1. Heading or paragraph tag - `<h1>, <h2>, <h3>, <h4>, <p>, etc.`
2. List - `<ul>, <ol>, <li>`
3. Widget - see "components" docs for specific usage of custom tags

_Note: If you encounter problems please refer to the [quick start template](getting-started/quick-start?id=main) or documentation to ensure HTML is correct._

  <div class="footer">
    <p>&copy; 2024 StrataCSS</p>
  </div>
