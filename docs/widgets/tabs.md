<p class="section-text">Widgets</p>

# Tabs

Organize and separate related information into their own individual tabs.

## How to Use

1. Add `<tabs-widget>` to wrap all the tab items.
2. Add `<tab-item>` for each tab item.
3. Add `<tab-title>` to add the title and clickable space for each `<tab-item>`.
4. Add `<tab-content>` to inside of that container add text, images, or any other widgets within this space.

_Note: Tabs are best used when there are multiple tabs. If there is only one item hidden, please use an accordion_

### HTML Example

```html
<tabs-widget>
  <tab-item>
    <tab-title>Tab Title 1</tab-title>
    <tab-content>
      <h4>Tab 1 Heading Inside</h4>
      <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
    </tab-content>
  </tab-item>
  <tab-item>
    <tab-title>Tab Title 2</tab-title>
    <tab-content>
      <h4>Tab 2 Heading Inside</h4>
      <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
    </tab-content>
  </tab-item>
</tabs-widget>
```

### Preview

<div class="example-container">
<tabs-widget>
  <tab-item>
    <tab-title>Tab Title 1</tab-title>
    <tab-content>
      <h4>Tab 1 Heading Inside</h4>
      <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
    </tab-content>
  </tab-item>
  <tab-item>
    <tab-title>Tab Title 2</tab-title>
    <tab-content>
      <h4>Tab 2 Heading Inside</h4>
      <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
    </tab-content>
  </tab-item>
</tabs-widget>
</div>

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
