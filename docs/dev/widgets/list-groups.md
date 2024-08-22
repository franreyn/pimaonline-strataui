<p class="section-text">Widgets</p>

# List Groups

A visual way to separate list items within a group.

## How to Use

1. There are two types of list groups, `unordered` and `ordered`. Depending on the nature of the list, add the `<ul>` element or `<ol>` element to wrap the whole list. Add `class="list-group"` to the `<ul>` or `<ol>` element.
2. Add a `<li>` element for each item in the list.
3. Add the text content for each list group item. (No need to add a `<p>` for each list group item).

### Unordered Lists Example

`Unordered Lists` - these lists are for unrelated items, that could be placed in any order.

```html
<ul class="list-group">
  <li>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.</li>
  <li>Nullam lobortis quam id justo porta suscipit.</li>
  <li>Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. </li>
</ul>
```

### Ordered Lists Example

`Ordred Lists` - these lists are for procedural items, where order matters.

```html
<ol class="list-group">
  <li>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.</li>
  <li>Nullam lobortis quam id justo porta suscipit.</li>
  <li>Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. </li>
</ol>
```

### Utility Classes

To limit the size of the list, you can add one of two utility classes.

1. `full-width` - makes the list full width.
2. `half-width` - makes the list half width.

```html
<ol class="full-width">
  <li>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.</li>
  <li>Nullam lobortis quam id justo porta suscipit.</li>
  <li>Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. </li>
</ol>
```

```html
<ol class="half-width">
  <li>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero.</li>
  <li>Nullam lobortis quam id justo porta suscipit.</li>
  <li>Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. </li>
</ol>
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

## CSS

The styles create the border, hover animation, and add lines between list items.

```css
// List groups
ul.list-group, ol.list-group {
  max-width: max-content;
  border: 1px solid var(--color-grey);
  border-radius: var(--round-radius);
  padding: 0;
 
  li {
     border-bottom: 1px solid var(--color-grey);
     position: relative;
     display: block;
     padding: 10px 15px;
     text-decoration: none;
     margin: 0;
     width: auto;

     &::marker {
      display: none;
     }

     &:last-of-type {
      border-bottom: none;
     }

     &:hover {
      background-color: var(--slider-bkg);
     
      &:first-of-type {
        border-top-left-radius: var(--round-radius);
        border-top-right-radius: var(--round-radius);
      }
      &:last-of-type {
        border-bottom-left-radius: var(--round-radius);
        border-bottom-right-radius: var(--round-radius);
      }
    }
  }
 
  ul > li {
     list-style-type: none;
  }

  li > ul > li {
    list-style-type: disc !important;
    display: list-item !important;
 }
 }

 .full-width {
  max-width: 100% !important;
 }

 .half-width {
  max-width: 50% !important;
 }

 // When screen is too small, ensure half-width really takes up full width
 @media screen and (max-width: 576px) {
  .half-width {
    max-width: 100% !important;
   }
 }
```

## JS

_There is no JS for this widget._

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
