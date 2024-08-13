<p class="section-text">Widgets</p>

# List Groups

A visual way to separate list items within a group.

## How to Use

1. There are two types of list groups, `unordered` and `ordered`. Depending on the nature of the list, add `<unordered-list-group>` or `<ordered-list-group>` to wrap the whole list.
2. Add `<list-group-item>` for each item in the list.
3. Add the text content for each list group item. (No need to add a `<p>` for each list group item).

### Unordered Lists Example

`Unordered Lists` - these lists are for unrelated items, that could be placed in any order.

```html
<unordered-list-group>
  <list-group-item>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.</list-group-item>
  <list-group-item>Nullam lobortis quam id justo porta suscipit.</list-group-item>
  <list-group-item>Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. </list-group-item>
</unordered-list-group>
```

### Ordered Lists Example

`Ordred Lists` - these lists are for procedural items, where order matters.

```html
<ordered-list-group>
  <list-group-item>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.</list-group-item>
  <list-group-item>Nullam lobortis quam id justo porta suscipit.</list-group-item>
  <list-group-item>Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. </list-group-item>
</ordered-list-group>
```

### Utility Classes

To limit the size of the list, you can add one of two utility classes.

1. `full-width` - makes the list full width.
2. `half-width` - makes the list half width.

```html
<ordered-list-group class="full-width">
  <list-group-item>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.</list-group-item>
  <list-group-item>Nullam lobortis quam id justo porta suscipit.</list-group-item>
  <list-group-item>Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. </list-group-item>
</ordered-list-group>
```

```html
<ordered-list-group class="half-width">
  <list-group-item>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.</list-group-item>
  <list-group-item>Nullam lobortis quam id justo porta suscipit.</list-group-item>
  <list-group-item>Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. </list-group-item>
</ordered-list-group>
```

_Note: Both the unordered, and ordered lists are visually identical._

#### Preview

<div class="example-container">
  <ol class="list-group full-width">
    <li class="list-group-item">Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.</li>
    <li class="list-group-item">Nullam lobortis quam id justo porta suscipit.</li>
    <li class="list-group-item">Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros.
    </li>
    <li class="list-group-item">Curabitur leo nulla, ornare et bibendum imperdiet, congue id purus.</li>
    <li class="list-group-item">Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.</li>
    <li class="list-group-item">Nullam lobortis quam id justo porta suscipit.</li>
    <li class="list-group-item">Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros.
    </li>
  </ordered-list-group>
</ol>
</div>

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
