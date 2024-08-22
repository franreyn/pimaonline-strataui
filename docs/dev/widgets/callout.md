<p class="section-text">Widgets</p>

# Callout

A shaded background to draw attention to an important piece of information.

## How to Use

1. Wrap callout content with a `<div>` with `class="callout-widget"`.

_Note: The color of the background depends on which theme you use._

### HTML Example

```html
<div class="callout-widget">Note: Your thesis should present a specific argument or perspective that you will support with evidence throughout your paper.</div>
```

### Preview

<div class="example-container">
  <div class="callout-widget">Note: Your thesis should present a specific argument or perspective that you will support with evidence throughout your paper.</div>
</div>

## CSS

Styles for `callout-widget` are found in `/src/scss/modules/callout.scss` as well as stylesheets for specific themes in `/src/scss/themes`. Callouts have a shaded background color.

```css
.callout-widget {
  display: block;
  margin: 2rem 0;
  padding: 2rem;
  border-radius: var(--subtle-radius);

  h3, h4, h5 {
    margin-top: 0;
  }
}
```

### JS

_There is no JS for this widget._

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>
