# List Groups

List groups are a styled way to separate list items.

## HTML

There are two types of list groups, `unordered` and `ordered`. They are visually the same, but serve different purposes accessibility-wise and semantically.

1. `Unordered Lists` - these lists are for unrelated items, that could be placed in any order.

```html
<unordered-list-group>
  <list-group-item>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.</list-group-item>
  <list-group-item>Nullam lobortis quam id justo porta suscipit.</list-group-item>
  <list-group-item>Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. </list-group-item>
</unordered-list-group>
```

2. `Ordred Lists` - these lists are for procedural items, where order matters.

```html
<ordered-list-group>
  <list-group-item>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.</list-group-item>
  <list-group-item>Nullam lobortis quam id justo porta suscipit.</list-group-item>
  <list-group-item>Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. </list-group-item>
</ordered-list-group>
```

### Utility Classes

To limit the size of the list, you can add one of two utility classes.

1. `.full-width` - makes the list full width.
2. `.half-width` - makes the list half width.

```html
<ordered-list-group class="half-width">
  <list-group-item>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.</list-group-item>
  <list-group-item>Nullam lobortis quam id justo porta suscipit.</list-group-item>
  <list-group-item>Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. </list-group-item>
</ordered-list-group>
```

```scss
.full-width {
  max-width: 100% !important;
}

.half-width {
  max-width: 50% !important;
}
```

**Note: Both the unordered, and ordered lists are visually identical.**

<div class="example-container">
  <ordered-list-group>
    <list-group-item>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.</list-group-item>
    <list-group-item>Nullam lobortis quam id justo porta suscipit.</list-group-item>
    <list-group-item>Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros.
    </list-group-item>
    <list-group-item>Curabitur leo nulla, ornare et bibendum imperdiet, congue id purus.</list-group-item>
    <list-group-item>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.</list-group-item>
    <list-group-item>Nullam lobortis quam id justo porta suscipit.</list-group-item>
    <list-group-item>Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros.
    </list-group-item>
  </ordered-list-group>
</div>
