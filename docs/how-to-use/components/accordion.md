# Accordion Widget

Use the `accordion-widget` to display content in drop-downs that users can interact with.

## Structure

1. `<accordion-widget>` - wraps all accordion groups
2. `<accordion-item>` - wraps each individual accordion group
3. `<h3>` or `<h4>` - clickable area and accordion title
4. `<accordion-content>` - the content for the accordion that is hidden and shown

## HTML 

The accordion in the HTML should have this structure. 

```html
<accordion-widget>
  <accordion-item>
    <h4>Accordion 1</h4>
    <accordion-content>
      <p>Accordion content 1</p>
    </accordion-content>
  </accordion-item>
  <accordion-item>
    <h4>Accordion 2</h4>
    <accordion-content>
      <p>Accordion content 2</p>
    </accordion-content>
  </accordion-item>
  <accordion-item>
    <h4>Accordion 3</h4>
    <accordion-content>
      <p>Accordion content 3</p>
    </accordion-content>
  </accordion-item>
</accordion-widget>
```

<div class="example-container">
  <accordion-widget>
    <accordion-item>
      <h4>Accordion 1</h4>
      <accordion-content>
        <p>Accordion content 1</p>
      </accordion-content>
    </accordion-item>
    <accordion-item>
      <h4>Accordion 2</h4>
      <accordion-content>
        <p>Accordion content 2</p>
      </accordion-content>
    </accordion-item>
    <accordion-item>
      <h4>Accordion 3</h4>
      <accordion-content>
        <p>Accordion content 3</p>
      </accordion-content>
    </accordion-item>
  </accordion-widget>
</div>