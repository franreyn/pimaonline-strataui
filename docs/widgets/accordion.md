<p class="section-text">Widgets</p>

# Accordion

Displays content in drop-down containers that users can interact with.

## How to Use

1. Add the `<accordion-widget>`. This will wrap all the accordions and group them together.
2. For each accordion add `<accordion-item>`. This will be the container for each accordion dropdown.
3. Add an `<h3>` with the text for the accordion title within the `<accordion-item>` container. This will be what the student will click on to trigger the accordion toggling open and close.
4. Add `<accordion-content>` right after the `<h3>`. The `<accordion-content>` container holds all the content visible after the accordion is open. You may also use any other widgets within this container.

### Utility Class

You can also adjust the assignment title font size to be smaller by adding the `font-size-h4` class to the `<h3>` tag. This class changes the font size to the `<h4>` font size.

```html
<accordion-item>
  <h3 class="font-size-h4">Accordion 1</h3>
  <accordion-content>
    <p>Accordion content 1</p>
  </accordion-content>
</accordion-item>
```

### HTML Example

```html
<accordion-widget>
  <accordion-item>
    <h3>Accordion 1</h3>
    <accordion-content>
      <p>Accordion content 1</p>
    </accordion-content>
  </accordion-item>
  <accordion-item>
    <h3>Accordion 2</h3>
    <accordion-content>
      <p>Accordion content 2</p>
    </accordion-content>
  </accordion-item>
  <accordion-item>
    <h3>Accordion 3</h3>
    <accordion-content>
      <p>Accordion content 3</p>
    </accordion-content>
  </accordion-item>
</accordion-widget>
```

### Preview

<div class="example-container">
  <accordion-widget>
    <accordion-item>
      <h3>Accordion 1</h3>
      <accordion-content>
        <p>Accordion content 1</p>
      </accordion-content>
    </accordion-item>
    <accordion-item>
      <h3>Accordion 2</h3>
      <accordion-content>
        <p>Accordion content 2</p>
      </accordion-content>
    </accordion-item>
    <accordion-item>
      <h3>Accordion 3</h3>
      <accordion-content>
        <p>Accordion content 3</p>
      </accordion-content>
    </accordion-item>
  </accordion-widget>
</div>

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
